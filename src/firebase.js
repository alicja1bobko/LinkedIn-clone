import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvzQylTsMShQPN0dlDW1gbuZ3C8g8AQYo",
  authDomain: "linkedin-clone-firebase-redux.firebaseapp.com",
  projectId: "linkedin-clone-firebase-redux",
  storageBucket: "linkedin-clone-firebase-redux.appspot.com",
  messagingSenderId: "1042013556426",
  appId: "1:1042013556426:web:ccbd0357ac94abe745ae33",
  measurementId: "G-WK1H1Q3WD9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
