import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: process.env["REACT_APP_FIREBASE_API_KEY"],
  authDomain: "samer-slack.firebaseapp.com",
  projectId: "samer-slack",
  storageBucket: "samer-slack.appspot.com",
  messagingSenderId: "419362939894",
  appId: "1:419362939894:web:84d10b5e875e77fff01dd7",
};

initializeApp(config);

const db = getFirestore();
