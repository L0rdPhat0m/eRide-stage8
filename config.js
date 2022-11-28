import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyC4bu3Cl4I-YqblsPB0PeVlOHzYP4wPbuw",
  authDomain: "eride-b8d51.firebaseapp.com",
  projectId: "eride-b8d51",
  storageBucket: "eride-b8d51.appspot.com",
  messagingSenderId: "1029239830136",
  appId: "1:1029239830136:web:4a6dbfe268e7e9bfdb1f8d"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
