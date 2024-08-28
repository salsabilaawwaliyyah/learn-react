import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB07pMp-t9e7Ye56xWnSR7bOGLGb8P9ZLs",
  authDomain: "clone-news-ca.firebaseapp.com",
  projectId: "clone-news-ca",
  storageBucket: "clone-news-ca.appspot.com",
  messagingSenderId: "334842822659",
  appId: "1:334842822659:web:3458c2433da92de9c94e36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();