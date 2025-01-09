// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmE98vGwyffenbgan3TywsZnxY64p4LbY",
  authDomain: "suvrat-bhatta.firebaseapp.com",
  projectId: "suvrat-bhatta",
  storageBucket: "suvrat-bhatta.appspot.com",
  messagingSenderId: "54162575835",
  appId: "1:54162575835:web:0ddeaa2546ca60fbf2d7fe",
  measurementId: "G-X4EB53J662"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);