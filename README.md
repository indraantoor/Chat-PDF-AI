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

1. Get a Google Gemini AI API Key at [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. Clone the repos

   ```sh
   git clone https://github.com/indraantoor/Chat-PDF-AI
   ```

   ```sh
   git clone https://github.com/indraantoor/Contract-AI-Backend
   ```

3. Install NPM packages In All Of These Cloned Directories
   ```sh
   npm install
   ```
4. In frontend directory create a ".env" file and paste your values for these variables
   ```
   NEXT_PUBLIC_API_URL=<YOUR_FRONTEND_URL>
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<YOUR_STRIPE_PUBLISHABLE_KEY>
   ```
5. In the backend directory create a ".env" file and paste your values for these variables
   ```
   MONGODB_URI=<YOUR_MONGODB_URI>
   GOOGLE_CLIENT_ID=<YOUR_GOOGLE_CLIENT_ID>
   GOOGLE_CLIENT_SECRET=<YOUR_GOOGLE_CLIENT_SECRET>
   CLIENT_URL=<YOUR_FRONTEND_URL>
   SESSION_SECRET=<YOUR_DEFINED_SESSION_SECRET>
   UPSTASH_REDIS_REST_URL=<YOUR_UPSTASH_REDIS_REST_URL>
   UPSTASH_REDIS_REST_TOKEN=<YOUR_UPSTASH_REDIS_TOKEN>
   GEMINI_API_KEY=<YOUR_GEMINI_API_KEY>
   RESEND_API_KEY=<YOUR_RESEND_API_KEY>
   STRIPE_SECRET_KEY=<YOUR_STRIPE_SECRET_KEY>
   ```
6. Run the application
   ```sh
   Navigate To The Backend Directory
   npm run dev
   ```
   ```sh
   Navigate To The Frontend Directory
   npm run dev (to run app in development mode)
   npm start (to run app in production mode)
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Login or sign up to access the application.

<img width="1800" alt="sign up" src="https://github.com/user-attachments/assets/cbc92aa5-1c91-4bc7-bfc4-27a17ba7e6d7">

Once on your dashboard page click on "New Contract" button.

<img width="1800" alt="new contract" src="https://github.com/user-attachments/assets/2c8d75b0-c73d-4b53-a632-f0bfca1f7a1f">

Drag and drop your contract file and make sure it is in "pdf" format and click on "Analyze Contract With AI" button. It will then detect the type of the contract and to finally completely analyze it, confirm and click on "Yes, I want to analyze it" button.

Wait for the AI analysis to get completed.

<img width="1800" alt="analyse loading" src="https://github.com/user-attachments/assets/b4deae68-9ae1-43c1-8ebd-8dd62a05fa69">

To view the results click on "View Results" button

<img width="1800" alt="view results" src="https://github.com/user-attachments/assets/127b186b-d2f7-44c1-8b10-9d71b8bad030">

In the "FREE VERSION" you will see limited results and in "Premium" you will see full results. To See all details you can upgrade to premium.

<img width="1800" alt="Screenshot 2024-11-19 at 3 25 39 PM" src="https://github.com/user-attachments/assets/0773e8c4-45eb-4760-bc82-2ebdd3d020e9">

<img width="1800" alt="Screenshot 2024-11-19 at 3 26 11 PM" src="https://github.com/user-attachments/assets/a2dabe7a-a31b-495a-98ca-58c4aefdd9e8">

<img width="1800" alt="Screenshot 2024-11-19 at 3 27 20 PM" src="https://github.com/user-attachments/assets/1846be58-34e8-4a5b-b7b4-f373768b6c2d">

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Project Link: [https://github.com/indraantoor/Chat-PDF-AI](https://github.com/indraantoor/Chat-PDF-AI)

<a href="https://in.linkedin.com/in/indraantoor"><img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555" /></a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
