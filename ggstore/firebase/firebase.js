// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebase = {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
};

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmPUpxSIZeFegirsYqjST9pWRhHJ0lgGM",
  authDomain: "ggstore-andrizalchaidar.firebaseapp.com",
  projectId: "ggstore-andrizalchaidar",
  storageBucket: "ggstore-andrizalchaidar.appspot.com",
  messagingSenderId: "98711919679",
  appId: "1:98711919679:web:1df97b943b3ef9048e2c8a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = firebase.getAuth(app);

export { firebase, auth };
