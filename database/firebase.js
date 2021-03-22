import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyApG4N6tfArhdmJaY9y0L3z7T0-ay8S-g8",
    authDomain: "react-native-firebase-cr-3f737.firebaseapp.com",
    projectId: "react-native-firebase-cr-3f737",
    storageBucket: "react-native-firebase-cr-3f737.appspot.com",
    messagingSenderId: "102581887128",
    appId: "1:102581887128:web:51781abb9a64a834e9b0ed"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export default {
      firebase,
      db
  }