import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDPUuKEm1EpPi4cMIWe4gd-qDpwI6BTKfc",
  authDomain: "formik-6bdc3.firebaseapp.com",
  projectId: "formik-6bdc3",
  storageBucket: "formik-6bdc3.appspot.com",
  messagingSenderId: "370174881818",
  appId: "1:370174881818:web:4aa6cd4a9ec5e41df421a3",
};
// Initialize Firebase
const FirebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default FirebaseApp;
export { db };
