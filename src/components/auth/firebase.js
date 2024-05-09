// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0dFEfgCHNyr97lkWftantInNhntfxm1s",
  authDomain: "aprende-ya-1d7af.firebaseapp.com",
  projectId: "aprende-ya-1d7af",
  storageBucket: "aprende-ya-1d7af.appspot.com",
  messagingSenderId: "847125064926",
  appId: "1:847125064926:web:ad63acf86a18d00194664f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth=getAuth()
export default app;