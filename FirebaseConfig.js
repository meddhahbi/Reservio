// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJE0f2fcIyE0h_sU-6bIN8UYFnjgrAY_0",
  authDomain: "reservio-631ba.firebaseapp.com",
  projectId: "reservio-631ba",
  storageBucket: "reservio-631ba.appspot.com",
  messagingSenderId: "1070179753330",
  appId: "1:1070179753330:web:83e75356e02faddec8d1eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore();
export {auth,db};