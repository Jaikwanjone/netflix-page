// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { config } from "./configs";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${config.firebaseApiKey}`,
  authDomain: `${config.firebaseApiKey}`,
  projectId: `${config.firebaseApiKey}`,
  storageBucket: `${config.firebaseApiKey}`,
  messagingSenderId: `${config.firebaseApiKey}`,
  appId: `${config.firebaseApiKey}`,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
