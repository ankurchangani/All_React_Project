// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHAKO7dIUiLNDhfXOlLgS7ZTNjW-SSp_c",
  authDomain: "keep-2d231.firebaseapp.com",
  projectId: "keep-2d231",
  storageBucket: "keep-2d231.firebasestorage.app",
  messagingSenderId: "398125289950",
  appId: "1:398125289950:web:199e451548bbcb4e784d4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);