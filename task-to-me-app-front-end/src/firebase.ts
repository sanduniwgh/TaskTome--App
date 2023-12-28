// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjVTQX2jy8Y7UqgCHO77hZMGqXXH_t5FU",
    authDomain: "tasktome-app-4b293.firebaseapp.com",
    projectId: "tasktome-app-4b293",
    storageBucket: "tasktome-app-4b293.appspot.com",
    messagingSenderId: "838167535825",
    appId: "1:838167535825:web:fc504dea50d2b19d77a5f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};