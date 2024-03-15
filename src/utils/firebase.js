// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL3Hk9DsDyAa-8DRNrpTcg8D_3XSTQiEg",
  authDomain: "netflixgpt-332d4.firebaseapp.com",
  projectId: "netflixgpt-332d4",
  storageBucket: "netflixgpt-332d4.appspot.com",
  messagingSenderId: "810742487520",
  appId: "1:810742487520:web:4dca57afd119391900b385",
  measurementId: "G-P5KGBPHCCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

export const auth = getAuth();