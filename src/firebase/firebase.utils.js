import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyBwbiroFXv4FHedHURx4NcPh7TZ92u8UK8",
    authDomain: "crwn-db-5151e.firebaseapp.com",
    databaseURL: "https://crwn-db-5151e.firebaseio.com",
    projectId: "crwn-db-5151e",
    storageBucket: "",
    messagingSenderId: "367263737078",
    appId: "1:367263737078:web:7e7cf9759f068831"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;