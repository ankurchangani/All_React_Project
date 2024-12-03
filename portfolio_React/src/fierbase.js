// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLK62gbN5FvAWH-xiY_XAADLeFOStNdhQ",
  authDomain: "portfolio-e0bc6.firebaseapp.com",
  projectId: "portfolio-e0bc6",
  storageBucket: "portfolio-e0bc6.firebasestorage.app",
  messagingSenderId: "956440032525",
  appId: "1:956440032525:web:e67dd0a252b86079a9ec44",
  measurementId: "G-C83H1QHEGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


