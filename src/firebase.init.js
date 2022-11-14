// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD84xTRapURNQLK-_CB0SA85sMBAfK0OQI",
  authDomain: "em-manufacturing.firebaseapp.com",
  projectId: "em-manufacturing",
  storageBucket: "em-manufacturing.appspot.com",
  messagingSenderId: "202426371166",
  appId: "1:202426371166:web:1f82a55ca37fec2da3b8cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;