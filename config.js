import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD98LWcdZH25AtoxC7KdNvrAnkPBHV9O2Y",
  authDomain: "eride4-1ce70.firebaseapp.com",
  databaseURL: "https://eride4-1ce70-default-rtdb.firebaseio.com",
  projectId: "eride4-1ce70",
  storageBucket: "eride4-1ce70.appspot.com",
  messagingSenderId: "63244382561",
  appId: "1:63244382561:web:148c32861d5b284b805520"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
