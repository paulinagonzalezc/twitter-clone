import firebase from "firebase/compat/app";

import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhh7IO6_-kMQkqS8Ny1drJeWEvghB-42A",
  authDomain: "twitter-clone-2c47a.firebaseapp.com",
  projectId: "twitter-clone-2c47a",
  storageBucket: "twitter-clone-2c47a.appspot.com",
  messagingSenderId: "990042172893",
  appId: "1:990042172893:web:0628ed99d8fe981a80da34",
  measurementId: "G-B986QGCD51",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export { db };
