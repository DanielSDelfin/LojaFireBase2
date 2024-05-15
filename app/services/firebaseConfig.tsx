// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection, addDoc, getDocs, updateDoc, doc  } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnRhK6aMBE9qlrVLjCHJOuq4p38gsQ6cU",
  authDomain: "loja-pf-337d8.firebaseapp.com",
  projectId: "loja-pf-337d8",
  storageBucket: "loja-pf-337d8.appspot.com",
  messagingSenderId: "934666258986",
  appId: "1:934666258986:web:5a1352f3183a5c3a459153"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {app, db, getFirestore,collection, addDoc, getDocs, updateDoc, doc}