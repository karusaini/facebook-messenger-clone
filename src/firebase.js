import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBSEoZwkd2lsVnZgiPT4sb1Bk_QlD_yp2s",
  authDomain: "facebook-messenger-clone-5a480.firebaseapp.com",
  projectId: "facebook-messenger-clone-5a480",
  storageBucket: "facebook-messenger-clone-5a480.appspot.com",
  messagingSenderId: "401184693768",
  appId: "1:401184693768:web:db025b76c917e154533bbd",
  measurementId: "G-LN3Z15SLZN",
});

const db = firebaseApp.firestore();

export default db;
