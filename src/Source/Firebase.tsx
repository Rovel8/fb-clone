import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAGOrtv76YViu5CZm4YB-NAT0Ez32wR2jc",
    authDomain: "facebook-clone-c3c3c.firebaseapp.com",
    databaseURL: "https://facebook-clone-c3c3c.firebaseio.com",
    projectId: "facebook-clone-c3c3c",
    storageBucket: "facebook-clone-c3c3c.appspot.com",
    messagingSenderId: "810076303052",
    appId: "1:810076303052:web:0d1e4d31eadcc8c49b1c69",
    measurementId: "G-KXN10HJMB8"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = firebaseApp.firestore()
export const auth=  firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()