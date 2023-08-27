// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2r22VJ9RI3ePVyv-W72NiOihpXotteUE",
    authDomain: "react-socialmedia-13ee1.firebaseapp.com",
    projectId: "react-socialmedia-13ee1",
    storageBucket: "react-socialmedia-13ee1.appspot.com",
    messagingSenderId: "822025316540",
    appId: "1:822025316540:web:55b70dcf831ddc24c088b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();