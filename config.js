import firebase from 'firebase'

var firebaseConfig = {
  // copy and paste your firebase credential here
  apiKey: "AIzaSyBAF6GrWGwVabjEqBngsOI56tsjXfxr7AA",
  authDomain: "flippa-calendar.firebaseapp.com",
  projectId: "flippa-calendar",
  storageBucket: "flippa-calendar.appspot.com",
  messagingSenderId: "325020630155",
  appId: "1:325020630155:web:7f3d817be2cdd5458b688e",
  
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };