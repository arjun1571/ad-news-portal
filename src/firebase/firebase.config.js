// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmJq9S6qtdL_Xl96wjrkNDlrHTT0WQ7nc",
  authDomain: "ad-news-portal.firebaseapp.com",
  projectId: "ad-news-portal",
  storageBucket: "ad-news-portal.appspot.com",
  messagingSenderId: "993817702262",
  appId: "1:993817702262:web:d1e399b491e5737095d457"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;