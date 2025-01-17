import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY ?? "";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "chat-pdf-78d0c.firebaseapp.com",
  projectId: "chat-pdf-78d0c",
  storageBucket: "chat-pdf-78d0c.firebasestorage.app",
  messagingSenderId: "158814382279",
  appId: "1:158814382279:web:bea9bbfd8f7f5397c676e2",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
