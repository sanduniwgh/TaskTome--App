import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuzI_LUQpXd-LpmWZ0ndLo62dBfTKYQ0E",
    authDomain: "to-do-app-da8df.firebaseapp.com",
    projectId: "to-do-app-da8df",
    storageBucket: "to-do-app-da8df.appspot.com",
    messagingSenderId: "131892488889",
    appId: "1:131892488889:web:9a6650b48fdcf1656d0968"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {app, auth};