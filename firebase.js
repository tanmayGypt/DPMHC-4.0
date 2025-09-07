// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCVh-IMfxjUzgOxXs7nP9BPSGcVv6r-iII",
    authDomain: "dp-memorial.firebaseapp.com",
    projectId: "dp-memorial",
    storageBucket: "dp-memorial.firebasestorage.app",
    messagingSenderId: "640641100593",
    appId: "1:640641100593:web:827995efce36f9752c9e10",
    measurementId: "G-2CKHC0KHS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);