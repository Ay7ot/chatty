// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFsr1bEfS1WcxQc5-6FTkKHyeJqpy-Qyk",
  authDomain: "knowitall-scrimba.firebaseapp.com",
  databaseURL: "https://knowitall-scrimba-default-rtdb.firebaseio.com",
  projectId: "knowitall-scrimba",
  storageBucket: "knowitall-scrimba.appspot.com",
  messagingSenderId: "880389993042",
  appId: "1:880389993042:web:232892fbf676e557eb258b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

export { db }