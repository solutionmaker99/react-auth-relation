// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1F-WwGJ-RbGEvYkIM-rJEf8M9Z4VE1uM",
  authDomain: "react-auth-realation.firebaseapp.com",
  projectId: "react-auth-realation",
  storageBucket: "react-auth-realation.appspot.com",
  messagingSenderId: "26995886549",
  appId: "1:26995886549:web:72669c3e21b38af043d55c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
