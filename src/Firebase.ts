// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
//   authDomain: `${config.firebaseAuthDomain}`,
//   projectId: `${config.firebaseProjectId}`,
//   storageBucket: `${config.firebaseStorageBucket}`,
//   messagingSenderId: `${config.messageSender}`,
//   appId: `${config.appId}`,
//   measurementId: `${config.measurementId}`,
// };
const firebaseConfig = {
  apiKey: "AIzaSyCuUKXFRUH-iV8IRIJINNb-50Dhj5vhdbQ",
  authDomain: "netflix-5eca2.firebaseapp.com",
  projectId: "netflix-5eca2",
  storageBucket: "netflix-5eca2.firebasestorage.app",
  messagingSenderId: "637978371076",
  appId: "1:637978371076:web:c93c59190e65651a1f8151",
  measurementId: "G-VCEDS8GFL7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
