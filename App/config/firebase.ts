import Constants from "expo-constants";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

firebase.initializeApp(Constants.manifest.extra.firebase);
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const db = firebase.firestore();

export { firebase, db, auth, storage, functions, googleAuthProvider };
