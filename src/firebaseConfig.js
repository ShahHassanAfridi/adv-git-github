import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: process.env.VITE_API_KEY,
    authDomain: process.env.VITE_API_KEY,
    projectId: process.env.VITE_API_KEY,
    storageBucket: process.env.VITE_API_KEY,
    messagingSenderId: process.env.VITE_API_KEY,
    appId: process.env.VITE_API_KEY
  };

  export const app = initializeApp(firebaseConfig);