// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA50nx2Z2SmvOLsfEe3kG5VATytsEJF4u8",
  authDomain: "tomoseg-2b1d1.firebaseapp.com",
  projectId: "tomoseg-2b1d1",
  storageBucket: "tomoseg-2b1d1.appspot.com",
  messagingSenderId: "580611834942",
  appId: "1:580611834942:web:2bd2904ef130767f90bd6f",
  measurementId: "G-BN3NCK93PS"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// init firestore service
const db = getFirestore()

export default {
  firebaseApp,
  db,
}