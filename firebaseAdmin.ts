import { App, cert, getApp, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

const serviceKey = JSON.parse(process.env.FIREBASE_SERVICE_KEY!);

let app: App;

if (getApps().length == 0) {
  app = initializeApp({
    credential: cert(serviceKey),
  });
} else {
  app = getApp();
}

const adminDb = getFirestore(app);
const adminStorage = getStorage(app);

export { app as adminApp, adminDb, adminStorage };
