// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVnmZC_qu88eJSn8_4gssNuHOt3IE7xfg",
  authDomain: "react-student-crud-5ea22.firebaseapp.com",
  projectId: "react-student-crud-5ea22",
  storageBucket: "react-student-crud-5ea22.appspot.com",
  messagingSenderId: "916732663732",
  appId: "1:916732663732:web:2ebd081af90a90fb3504e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

const db = getFirestore();
export { db };