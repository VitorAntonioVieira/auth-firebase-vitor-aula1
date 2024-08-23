// Import the functions you need from the SDKs you need
import { initializeApp, getReact } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6bzXzQmIaeME0EwSYfxOrx5yD_19E-Tc",
  authDomain: "auth-firebase-aula1.firebaseapp.com",
  projectId: "auth-firebase-aula1",
  storageBucket: "auth-firebase-aula1.appspot.com",
  messagingSenderId: "659354948813",
  appId: "1:659354948813:web:63d41fc1fb32ade30d4584",
  measurementId: "G-HZ5R7HHB5Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;