// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCx-hUJzXRNNw5pyw7sIuJ2-SoMGbPLGqw",
  authDomain: "clone-10db1.firebaseapp.com",
  projectId: "clone-10db1",
  storageBucket: "clone-10db1.firebasestorage.app",
  messagingSenderId: "38566777252",
  appId: "1:38566777252:web:03a464eaf0c5fc6dd3f131",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const db = getFirestore(app);
export { db };
