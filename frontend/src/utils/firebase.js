// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqoqIRd101VBwlV_uxSxzn1IweFjZ9Gmw",
  authDomain: "netflixgpt-7a5d9.firebaseapp.com",
  projectId: "netflixgpt-7a5d9",
  storageBucket: "netflixgpt-7a5d9.appspot.com",
  messagingSenderId: "895512333608",
  appId: "1:895512333608:web:1d8b7d67183e5ef419141d",
  measurementId: "G-50QPLLPC3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();