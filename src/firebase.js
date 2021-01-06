import firebase from 'firebase';



// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
    // ...
    apiKey: "AIzaSyAYGtXZS4Kwi8Iuo_-bmmFOQSjUokDQET4",
    authDomain: "itechpanda.firebaseapp.com",
    databaseURL: "https://itechpanda-default-rtdb.firebaseio.com",
    projectId: "itechpanda",
    storageBucket: "itechpanda.appspot.com",
    messagingSenderId: "53203057372",
    appId: "1:53203057372:web:d3e734645fae72b4211219",
    measurementId: "G-4QPPJXMHFG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;