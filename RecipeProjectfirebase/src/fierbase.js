// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALt-Gyn5vkEoa-9lfzcSov9LfTkDDWUBw",
  authDomain: "recipe-project-react.firebaseapp.com",
  projectId: "recipe-project-react",
  storageBucket: "recipe-project-react.appspot.com",
  messagingSenderId: "638737237931",
  appId: "1:638737237931:web:252d0a17c685cbf6e8f4ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);