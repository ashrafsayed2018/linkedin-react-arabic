// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-linkedin-arabic.firebaseapp.com",
  projectId: "react-linkedin-arabic",
  storageBucket: "react-linkedin-arabic.appspot.com",
  messagingSenderId: "417992099049",
  appId: "1:417992099049:web:2e09fa6c25989bc6a19c78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleAuth = new GoogleAuthProvider();
const storage = getStorage();
export { auth, db, googleAuth, storage };
