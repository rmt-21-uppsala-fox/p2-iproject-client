// import firebase
import {} from 'dotenv/config';
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFireStore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.WEBNOVEL_PROJECT_API_KEY,
    authDomain: process.env.WEBNOVEL_PROJECT_AUTH_DOMAIN,
    databaseURL: process.env.WEBNOVEL_PROJECT_DATABASE_URL,
    projectId: process.env.WEBNOVEL_PROJECT_PROJECT_ID,
    storageBucket: process.env.WEBNOVEL_PROJECT_STORAGE_BUCKET,
    messagingSenderId: process.env.WEBNOVEL_PROJECT_MESSAGING_SENDER_ID,
    appId: process.env.WEBNOVEL_PROJECT_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getDatabase(app);
const db = getFireStore(app);

export {
    auth,
    database,
    db,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
};
