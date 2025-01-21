import { adminDb } from "@/firebaseAdmin";
import { auth } from "@clerk/nextjs/server";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
import { Index, RecordMetadata } from "@pinecone-database/pinecone";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import pineconeClient from "./pinecone";

const model = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  modelName: "gpt-4o",
});

export const indexName = "chatpdf";

async function fetchMessagesFromDB(docId: string) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not found");
  }

  console.log("--- Fetching chat history from the firestore database.... ----");

  const chats = await adminDb
    .collection("users")
    .doc(userId)
    .collection("files")
    .doc(docId)
    .collection("chat")
    .orderBy("createdAt", "desc")
    .get();

  const chatHistory = chats.docs.map((doc) => {
    return doc.data().role == "human"
      ? new HumanMessage(doc.data().message)
      : new AIMessage(doc.data().message);
  });

  console.log(
    `--- fetched last ${chatHistory.length} messages successfully ----`
  );
  console.log(chatHistory.map((msg) => msg.content.toString()));

  return chatHistory;
}

async function namespaceExists(
  index: Index<RecordMetadata>,
  namespace: string
) {
  if (namespace == null) throw new Error("No namespace value provided.");
  const { namespaces } = await index.describeIndexStats();
  return namespaces?.[namespace] !== undefined;
}

export async function generateDocs(docId: string) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not found");
  }

  console.log("----Fetch the download URL from Firebase... ---");
  const firebaseRef = await adminDb
    .collection("users")
    .doc(userId)
    .collection("files")
    .doc(docId)
    .get();

  const downloadUrl = firebaseRef.data()?.downloadUrl;

  if (!downloadUrl) {
    throw new Error("Download URL not found");
  }

  console.log(`--- Download URL fetched successfully: ${downloadUrl} ---`);

  // Fetch the PDF from the specified URL
  const response = await fetch(downloadUrl);

  // Load PDF into a PDFDocument Object
  const data = await response.blob();

  // Load PDF document from the specified path
  const loader = new PDFLoader(data);
  const docs = await loader.load();

  // Split the loaded document into smaller parts for easier processing
  console.log("--- Splitting the document into smaller parts ... ---");
  const splitter = new RecursiveCharacterTextSplitter();

  const splitDocs = await splitter.splitDocuments(docs);
  console.log(`--- Split into ${splitDocs.length} parts ---`);

  return splitDocs;
}

export async function generateEmbeddingsInPineconeVectorStore(docId: string) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not found");
  }

  let pineconeVectorStore;

  // Generate Embeddings (numerical representations) for the split documents
  console.log("---- Generate embeddings.... ----");
  const embeddings = new OpenAIEmbeddings();

  const index = await pineconeClient.index(indexName);
  const namespaceAlreadyExists = await namespaceExists(index, docId);

  if (namespaceAlreadyExists) {
    console.log(
      `Namespace ${docId} already exists, reuse already generated embeddings`
    );

    pineconeVectorStore = await PineconeStore.fromExistingIndex(embeddings, {
      pineconeIndex: index,
      namespace: docId,
    });

    return pineconeVectorStore;
  } else {
    // If the namespace does not exist, download the PDF from firestore via the stored Download URL & generate the embeddings and store them in the Pinecone vector store

    const splitDocs = await generateDocs(docId);

    console.log(
      `--- Storing the embeddings in namespace ${docId} in the ${indexName} Pinecone vector store... ---`
    );

    pineconeVectorStore = await PineconeStore.fromDocuments(
      splitDocs,
      embeddings,
      {
        pineconeIndex: index,
        namespace: docId,
      }
    );

    return pineconeVectorStore;
  }
}

const generateLangchainCompletion = async (docId: string, question: string) => {
  const pineconeVectorStore = await generateEmbeddingsInPineconeVectorStore(
    docId
  );
  if (!pineconeVectorStore) {
    throw new Error("Pinecone vector store not found");
  }

  console.log("--- Creating a retriever .... ---");
  const retriever = pineconeVectorStore.asRetriever();

  const chatHistory = await fetchMessagesFromDB(docId);

  console.log(
    "---- define a prompt template for generating search queries based on conversation history .... ----"
  );
  const historyAwarePrompt = ChatPromptTemplate.fromMessages([
    ...chatHistory,
    ["user", "{input}"],
    [
      "user",
      "Given the above conversation, generate a search query to look up in order to get information relevant to the conversation",
    ],
  ]);

  console.log("--- Creating a history-aware retriever chain.... ----");
  const historyAwareRetrieverChain = await createHistoryAwareRetriever({
    llm: model,
    retriever,
    rephrasePrompt: historyAwarePrompt,
  });

  // Define a prompt template fpr answering questions based on retieved context
  console.log("--- Defining a prompt template for answering questions ...---");
  const historyAwareRetrievalPrompt = ChatPromptTemplate.fromMessages([
    [
      "system",
      "Answer the user's question based on the below context:\n\n{context}",
    ],
    ...chatHistory,
    ["user", "{input}"],
  ]);

  // Create a chain to combine the retieved documents into a coherent response
  console.log("---- Creating a document combining chain... ----");
  const historyAwareCombineDocsChain = await createStuffDocumentsChain({
    llm: model,
    prompt: historyAwareRetrievalPrompt,
  });

  // Create the main retieval chain that combines the history-aware retiever and document combining chains
  console.log("--- Creating the main retrieval chain...-----");
  const conversationalRetrievalChain = await createRetrievalChain({
    retriever: historyAwareRetrieverChain,
    combineDocsChain: historyAwareCombineDocsChain,
  });

  console.log("--- Running the chain with a sample conversation...-----");
  const reply = await conversationalRetrievalChain.invoke({
    chat_history: chatHistory,
    input: question,
  });

  // Print the result to the console
  console.log(reply.answer);
  return reply.answer;
};

// Export the model and the run function
export { generateLangchainCompletion, model };
