// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth";
import {getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"; 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMVM7bSMe0R5oL6oU169EBFVbPqie1mSA",
  authDomain: "chatlive-63c02.firebaseapp.com",
  projectId: "chatlive-63c02",
  storageBucket: "chatlive-63c02.appspot.com",
  messagingSenderId: "25221354118",
  appId: "1:25221354118:web:4bd557d1a5853f4cfe7707"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider= new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore();
export {auth, provider};