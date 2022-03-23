import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBKAZmGrXK92I9sj9olVfkjEZP9Brwjb2w",
	authDomain: "manga-encyclopedia.firebaseapp.com",
	projectId: "manga-encyclopedia",
	storageBucket: "manga-encyclopedia.appspot.com",
	messagingSenderId: "579648274354",
	appId: "1:579648274354:web:8f1428b2ee43e219daaeab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };
