import  firebase from "firebase";

var firebaseConfig = {
   apiKey: "AIzaSyCl580653Y18iqODfGHMnjpla22fr2MjgI",
   authDomain: "spacex-9d03b.firebaseapp.com",
   databaseURL: "https://spacex-9d03b.firebaseio.com",
   projectId: "spacex-9d03b",
   storageBucket: "spacex-9d03b.appspot.com",
   messagingSenderId: "482450850451",
   appId: "1:482450850451:web:f38c0e36f540eff6cec366"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
export default firebase;
