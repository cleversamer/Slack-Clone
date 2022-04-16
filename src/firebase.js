import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  doc,
  addDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

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

export const auth = getAuth();

export const provider = new GoogleAuthProvider();

const channelsRef = collection(db, "channels");

export const channelsQuery = query(channelsRef, orderBy("timestamp", "asc"));

export const createChannel = (name) => {
  addDoc(channelsRef, {
    name,
    timestamp: serverTimestamp(),
  });
};

export const deleteChannel = (channelId) => {
  const channelRef = doc(db, "channels", channelId);
  deleteDoc(channelRef);
};
