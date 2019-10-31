import "firebase/analytics";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfLPlG3uk4_CrmnozYxi7Q-Sb5IaFaRXk",
  authDomain: "beeapp-af1c3.firebaseapp.com",
  databaseURL: "https://beeapp-af1c3.firebaseio.com",
  projectId: "beeapp-af1c3",
  storageBucket: "beeapp-af1c3.appspot.com",
  messagingSenderId: "343942339205",
  appId: "1:343942339205:web:1b4539311553b60ce167ec",
  measurementId: "G-C0C7QWSY40"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
