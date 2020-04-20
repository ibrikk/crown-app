import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA2y9Y52jxrrpzLewjesyEZxfu-cKDulWU",
  authDomain: "crwn-db-9357b.firebaseapp.com",
  databaseURL: "https://crwn-db-9357b.firebaseio.com",
  projectId: "crwn-db-9357b",
  storageBucket: "crwn-db-9357b.appspot.com",
  messagingSenderId: "62553354967",
  appId: "1:62553354967:web:3d386bba2385722f85b692",
  measurementId: "G-HXBY3G1Y85",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;