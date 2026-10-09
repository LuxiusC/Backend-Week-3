// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0bQ5U1iKlVTWuzlRbKY3l2JujSREHP2A",
    authDomain: "backend-test-3-d63c4.firebaseapp.com",
    projectId: "backend-test-3-d63c4",
    storageBucket: "backend-test-3-d63c4.firebasestorage.app",
    messagingSenderId: "747081525230",
    appId: "1:747081525230:web:318fd0a086aff9a2bf90ff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)