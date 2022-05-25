import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCAD7UkZ5lAkytvlEisVJ0ONjtfFK0_qJA",
    authDomain: "linkedin-papa-ec1a4.firebaseapp.com",
    projectId: "linkedin-papa-ec1a4",
    storageBucket: "linkedin-papa-ec1a4.appspot.com",
    messagingSenderId: "306193751215",
    appId: "1:306193751215:web:985623bd764c89345fc85a"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
export {db, auth}