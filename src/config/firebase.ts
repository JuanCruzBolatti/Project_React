// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb4Ggl0J3hJSFeth5_bFDiJuyMH1sdytY",
  authDomain: "react-project-9959f.firebaseapp.com",
  projectId: "react-project-9959f",
  storageBucket: "react-project-9959f.firebasestorage.app",
  messagingSenderId: "1035423986165",
  appId: "1:1035423986165:web:9691cacfd3857c436770bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);