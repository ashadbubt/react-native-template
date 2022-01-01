import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD5xqQ9twmDzkqzLyqS7AOELJ7jeo3Vqw4",
    authDomain: "reactnativetest-d8c89.firebaseapp.com",
    projectId: "reactnativetest-d8c89",
    storageBucket: "reactnativetest-d8c89.appspot.com",
    messagingSenderId: "1010976590328",
    appId: "1:1010976590328:web:ae32025a0759064494ae0d"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };