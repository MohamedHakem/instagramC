import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCb57kw44WF5ik2MdJFpWw08sRWv8664dE",
  authDomain: "instaframe-765af.firebaseapp.com",
  projectId: "instaframe-765af",
  storageBucket: "instaframe-765af.appspot.com",
  messagingSenderId: "637226582404",
  appId: "1:637226582404:web:cb4c63d11e123f9c7e9dd1",
  measurementId: "G-D2VZ55NC2X",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
