// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwWA9NMVQRkbE-QIMh4G-9J59obSE5Hm4",
    authDomain: "eternity-56520.firebaseapp.com",
    projectId: "eternity-56520",
    storageBucket: "eternity-56520.appspot.com",
    messagingSenderId: "762732008005",
    appId: "1:762732008005:web:fa02cdeeeb7294929a892c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app