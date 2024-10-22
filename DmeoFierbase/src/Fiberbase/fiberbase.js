// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa-BL_nd4ftKCzdOsyj2_FKFAU4-a6kZg",
  authDomain: "crudreact-ef2a3.firebaseapp.com",
  projectId: "crudreact-ef2a3",
  storageBucket: "crudreact-ef2a3.appspot.com",
  messagingSenderId: "992515746149",
  appId: "1:992515746149:web:ac077bd5e455a867ff598c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db =  getFirestore(app) ;
