// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzSALzJHbnQ2Shn48ip6YnzkRjkVmcUwM",
  authDomain: "dragon-news-3dd8f.firebaseapp.com",
  projectId: "dragon-news-3dd8f",
  storageBucket: "dragon-news-3dd8f.appspot.com",
  messagingSenderId: "866463166810",
  appId: "1:866463166810:web:137dff61e9997cb0ddc363"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;