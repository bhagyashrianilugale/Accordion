// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFFAyvPgpeFKZH8jbNAk6hOyjUNQILHaQ",
  authDomain: "react-accordion-d1dd9.firebaseapp.com",
  projectId: "react-accordion-d1dd9",
  storageBucket: "react-accordion-d1dd9.appspot.com",
  messagingSenderId: "746746629500",
  appId: "1:746746629500:web:87aa9ede219dc2979268f9",
  measurementId: "G-CMRP0T4Q57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);