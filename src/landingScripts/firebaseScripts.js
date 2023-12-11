/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "fixdapic.firebaseapp.com",
  projectId: "fixdapic",
  storageBucket: "fixdapic.appspot.com",
  messagingSenderId: "707389909448",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-24M0XF36HQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
