import Constants from "expo-constants";
import firebase from "firebase";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/messaging";
import "firebase/storage";

firebase.initializeApp(Constants.manifest.extra.firebase);
const analytics = firebase.analytics();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const db = firebase.firestore();

// FCM
const messaging = firebase.messaging();

messaging
  .requestPermission()
  .then(() => {
    console.log("Have Permission");
    return messaging.getToken();
  })
  .then(token => {
    console.log(token);
  })
  .catch(() => console.log("Error Occured"));

messaging.onMessage(payload => {
  console.log("Message received. ", payload);
});

export {
  firebase,
  db,
  auth,
  storage,
  messaging,
  functions,
  analytics,
  googleAuthProvider
};
