// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
import {getAuth} from 'firebase/auth'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDMI7pbs55EZPgPb_urnQtzqyQtPgBLcg8",
    authDomain: "netflix-fire-bfc3c.firebaseapp.com",
    projectId: "netflix-fire-bfc3c",
    storageBucket: "netflix-fire-bfc3c.appspot.com",
    messagingSenderId: "289439356169",
    appId: "1:289439356169:web:ff4d5eee46378f32346fd8"
  };



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const db = getFirestore(app)

export {db}