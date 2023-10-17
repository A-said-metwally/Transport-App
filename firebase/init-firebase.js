// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAC0OZqlTUU-mS5PvSRv1q7MQ650j2aqpY",
  authDomain: "help-service-6f883.firebaseapp.com",
  projectId: "help-service-6f883",
  storageBucket: "help-service-6f883.appspot.com",
  messagingSenderId: "642187702290",
  appId: "1:642187702290:web:77e2ac70d5711e87f3a8cb"};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const storage = getStorage(app); // Get a reference to the storage service

