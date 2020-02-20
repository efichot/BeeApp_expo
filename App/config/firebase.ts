import firebase from "firebase";
// import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
// import "firebase/messaging";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBp5oFIC08_p4dH3stTTkEmGBX88Wfuk9Y",
  authDomain: "beeapp2-e12d0.firebaseapp.com",
  databaseURL: "https://beeapp2-e12d0.firebaseio.com",
  projectId: "beeapp2-e12d0",
  storageBucket: "beeapp2-e12d0.appspot.com",
  messagingSenderId: "78138540547",
  appId: "1:78138540547:web:8e4dd34a751401f6de0436",
  measurementId: "G-G3XC3Q15FY"
};

firebase.initializeApp(firebaseConfig);
// const analytics = firebase.analytics();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const db = firebase.firestore();

// FCM
// const messaging = firebase.messaging();

// messaging
//   .requestPermission()
//   .then(() => {
//     console.log("Have Permission");
//     return messaging.getToken();
//   })
//   .then(token => {
//     console.log(token);
//   })
//   .catch(() => console.log("Error Occured"));

// messaging.onMessage(payload => {
//   console.log("Message received. ", payload);
// });

export {
  firebase,
  db,
  auth,
  storage,
  // messaging,
  functions,
  // analytics,
  googleAuthProvider
};
