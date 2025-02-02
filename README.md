<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h1 align="center">Chat To PDF</h1>

  <p align="center">
Chat with PDFs using AI like ChatGPT that remembers previous interactions for personalized answers.
    <br />
    <a href="https://github.com/indraantoor/Chat-PDF-AI"><strong>Explore the docs »</strong></a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project allows users to chat with PDFs using an AI similar to ChatGPT, providing personalized and context-aware responses. Unlike traditional PDF readers or AI assistants, this system remembers previous interactions, ensuring a seamless, intelligent, and engaging conversation over multiple queries.

Users can upload PDFs, ask questions, and receive relevant, concise, and accurate answers without needing to rephrase or provide context repeatedly. The AI continuously learns from previous exchanges within a session, making responses more tailored and intuitive.

Built with a focus on usability, efficiency, and scalability, this project is ideal for students, researchers, professionals, and anyone who frequently works with documents. Whether you need quick insights, summaries, explanations, or specific details, this AI-powered tool enhances your workflow and productivity.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- Next js
- React js
- Open AI (API)
- Pinecone DB
- LangChain
- Firebase
- Clerk
- ShadCn
- Stripe
- Typescript
- Tailwind CSS
- Daisy UI

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- Node

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a Open AI API Key at [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)

2. Get Pinecone API KEY, Firebase API Key, Firebase Service Key, Firebase Storage Bucket name, Clerk Publishable Key, Clerk Secret Key and Stripe's Publishable Key, Stripe Secret Key, Stripe Webhook Secret.

3. Clone the repo

   ```sh
   git clone https://github.com/indraantoor/Chat-PDF-AI
   ```

4. Install NPM packages In All Of These Cloned Directories

   ```sh
   npm install
   ```

5. In your environment variable file paste those values with the following names

```sh
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<value_here>
    CLERK_SECRET_KEY=<value_here>
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<value_here>
    STRIPE_API_KEY=<value_here>
    STRIPE_WEBHOOK_SECRET=<value_here>
    PINECONE_API_KEY=<value_here>
    OPENAI_API_KEY=<value_here>
    FIREBASE_API_KEY=<value_here>
    FIREBASE_SERVICE_KEY=<value_here>
    FIREBASE_STORAGE_BUCKET=<value_here>
```

6. Run the application

   ```sh
   Navigate To The Directory and run

   npm run dev
   (to run app in development mode)

   npm start
   (to run app in production mode after building using npm run build)
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Login or sign up to access the application.

Once on your dashboard page click on "Add a document".

Drag and drop your contract file and make sure it is in "pdf" format.

Wait for the processing to get completed, you will get live updates of the step the processing is currently on.

You can now Chat With the PDF using the chatbot on the right section.

You can also delete uploaded PDF files and download them.

### Plan Restrictions

There are 2 plans Free and PRO. In Free plan you can only upload a limited number of documents and the number of messages per document is also limited (2) and you can also not delete documents

In the PRO plan you can upload documents and delete documents and the chat messages limit is 20 per document.

It is implemented using STRIPE. To upgrade from FREE to PRO you can go to the pricing page and upgrade.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Project Link: [https://github.com/indraantoor/Chat-PDF-AI](https://github.com/indraantoor/Chat-PDF-AI)

<a href="https://in.linkedin.com/in/indraantoor"><img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555" /></a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
