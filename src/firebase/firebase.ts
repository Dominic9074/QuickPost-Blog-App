// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1GRMGRPAqBCexPptPYrjXYgL6dsObrXA",
  authDomain: "quick-post-475d9.firebaseapp.com",
  projectId: "quick-post-475d9",
  storageBucket: "quick-post-475d9.firebasestorage.app",
  messagingSenderId: "805176606389",
  appId: "1:805176606389:web:0ee8f8f9d23088df0348fc",
  measurementId: "G-GFY0PEGYDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
export const db=getFirestore(app)