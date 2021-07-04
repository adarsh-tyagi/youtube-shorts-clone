import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCQszVhQQLloW4JGjyHfF9hypZHj1OfoI8",
  authDomain: "shorts-23d07.firebaseapp.com",
  projectId: "shorts-23d07",
  storageBucket: "shorts-23d07.appspot.com",
  messagingSenderId: "712362287108",
  appId: "1:712362287108:web:6d0e6e821d0e0d72f09551",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db