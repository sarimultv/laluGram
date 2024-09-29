// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3XNYQkqcpE7LCsPqezGhEAhJncS6pwDc",
  authDomain: "lalugram.firebaseapp.com",
  projectId: "lalugram",
  storageBucket: "lalugram.appspot.com",
  messagingSenderId: "832421753895",
  appId: "1:832421753895:web:a71ad5405235192e678a02",
  measurementId: "G-E7SN368K0B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
