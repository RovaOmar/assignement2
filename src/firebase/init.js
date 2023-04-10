// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_FbF1IknncGrJIPdCmiIHoXc99Fi8jM8",
  authDomain: "assignement2ideen.firebaseapp.com",
  projectId: "assignement2ideen",
  storageBucket: "assignement2ideen.appspot.com",
  messagingSenderId: "134237992234",
  appId: "1:134237992234:web:06e2c657f5719c51065a53",
  measurementId: "G-L37FYWNHX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
export default {db, auth};