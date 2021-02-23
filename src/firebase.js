// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBlD9GEoISr4wNw0529Ko3xbJ0PpgjQrak",
  authDomain: "facebook-268db.firebaseapp.com",
  projectId: "facebook-268db",
  storageBucket: "facebook-268db.appspot.com",
  messagingSenderId: "559987903442",
  appId: "1:559987903442:web:2aee1b8c80da9ba7d4560b",
  measurementId: "G-FYSSXK4KMN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const  provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;