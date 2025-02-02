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


https://github.com/user-attachments/assets/cade9bf0-8116-4b9a-b54a-aa1abdf23817

  
<img width="1798" alt="preview" src="https://github.com/user-attachments/assets/23fbb46e-acaa-45ab-b60e-b2f713e8da84" />
  
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
- Open AI
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

<img width="1798" alt="Screenshot 2025-02-02 at 9 37 14 PM" src="https://github.com/user-attachments/assets/e2bdeb07-bc70-4109-b0d2-966576d3d391" />

<img width="1798" alt="Screenshot 2025-02-02 at 9 37 34 PM" src="https://github.com/user-attachments/assets/7b3cb215-8413-4201-bfa1-1fda89072d0f" />

Once on your dashboard page click on "Add a document".

<img width="1789" alt="Screenshot 2025-02-02 at 9 38 38 PM" src="https://github.com/user-attachments/assets/9a83bcbf-3d4d-49fe-a585-c0a51e73a845" />

Drag and drop your contract file and make sure it is in "pdf" format.

<img width="1798" alt="Screenshot 2025-02-02 at 9 39 21 PM" src="https://github.com/user-attachments/assets/3e9104d3-4e60-44bf-9c81-77046ecf2222" />

Wait for the processing to get completed, you will get live updates of the step the processing is currently on.

<img width="1792" alt="Screenshot 2025-02-02 at 9 39 42 PM" src="https://github.com/user-attachments/assets/a21675b1-2221-4b49-8d41-ada9a5233a77" />

You can now Chat With the PDF using the chatbot on the right section.

<img width="1798" alt="Screenshot 2025-02-02 at 9 41 03 PM" src="https://github.com/user-attachments/assets/c2158dac-ce43-4a96-be03-3cb23eafb7ab" />

<img width="1798" alt="preview" src="https://github.com/user-attachments/assets/44bddaaa-a2c1-4d58-8f91-95fbff7b80c6" />

You can also delete uploaded PDF files and download them.

<img width="1791" alt="Screenshot 2025-02-02 at 9 42 29 PM" src="https://github.com/user-attachments/assets/3f09526f-84a1-48c7-aa5a-344b72a1e750" />

### Plan Restrictions

There are 2 plans Free and PRO. 




#### FREE PLAN
In Free plan you can only upload a limited number of documents and the number of messages per document is also limited (2) and you can also not delete documents
<img width="1792" alt="Screenshot 2025-02-02 at 9 48 42 PM" src="https://github.com/user-attachments/assets/1db39e26-b12c-4fd3-a2dd-7fce3cbd15b3" />

#### PRO PLAN

In the PRO plan you can upload documents and delete documents and the chat messages limit is 20 per document.

#### UPGRADE
It is implemented using STRIPE. To upgrade from FREE to PRO you can go to the pricing page and upgrade.
<img width="1786" alt="Screenshot 2025-02-02 at 9 49 04 PM" src="https://github.com/user-attachments/assets/f6392a1e-9de3-48d8-a6a2-7ed13fce5306" />

<img width="1793" alt="Screenshot 2025-02-02 at 9 50 06 PM" src="https://github.com/user-attachments/assets/f5f10773-b349-4da3-bad2-96e9fda87d05" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Project Link: [https://github.com/indraantoor/Chat-PDF-AI](https://github.com/indraantoor/Chat-PDF-AI)

<a href="https://in.linkedin.com/in/indraantoor"><img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555" /></a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
