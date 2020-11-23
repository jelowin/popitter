import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA56N19WtfYMvjoDbWPQxiwXlhh1k0Ua7Y",
  authDomain: "popitter-4fd31.firebaseapp.com",
  databaseURL: "https://popitter-4fd31.firebaseio.com",
  projectId: "popitter-4fd31",
  storageBucket: "popitter-4fd31.appspot.com",
  messagingSenderId: "958502424510",
  appId: "1:958502424510:web:d33934c7a6f719ec3eb3ef",
  measurementId: "G-5LTJBTEPPJ",
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const loginWithEmail = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}
