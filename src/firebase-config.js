// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxErN0go9CJQRiz941-DSAm5v_MPt5bMo",
  authDomain: "testing-36c40.firebaseapp.com",
  projectId: "testing-36c40",
  storageBucket: "testing-36c40.appspot.com",
  messagingSenderId: "465509361673",
  appId: "1:465509361673:web:bc6d9a5509aa56de8870d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
