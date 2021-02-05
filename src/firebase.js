import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyA5Xz5IhE-aJq97Fh4X9P6sx8ZKR082sUY",
    authDomain: "cafetell12-d8446.firebaseapp.com",
    projectId: "cafetell12-d8446",
    storageBucket: "cafetell12-d8446.appspot.com",
    messagingSenderId: "721698846030",
    appId: "1:721698846030:web:6843134a5faedf84fb9a1f"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();
  let storage = firebase.storage();

  export { 
      firebase, db, storage 
  };