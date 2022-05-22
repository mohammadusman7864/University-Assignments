import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCRc5FWwiR75CwAcq_Rsn4Vmyt08_eemwk",
  authDomain: "e-comerce-63375.firebaseapp.com",
  projectId: "e-comerce-63375",
  storageBucket: "e-comerce-63375.appspot.com",
  messagingSenderId: "569417000043",
  appId: "1:569417000043:web:15d306db93395c22d83d2e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = firebase.auth();
export const db = firebase.firestore();
