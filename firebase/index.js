// import firebase
// import {} from 'dotenv/config';
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDdA_OKvGulVAR-zjpU2RswYL51Op0fqR0',
    authDomain: 'webnovel-project.firebaseapp.com',
    projectId: 'webnovel-project',
    storageBucket: 'webnovel-project.appspot.com',
    messagingSenderId: '451164453364',
    appId: '1:451164453364:web:5256b5a5354328358ca1a1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// const database = getDatabase(app);
const db = getFirestore(app);

export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword };
