import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDN1eOhx92hjxw5ZO6EHGC31YHtxDfS1EU",
  authDomain: "photogallery-42129.firebaseapp.com",
  projectId: "photogallery-42129",
  storageBucket: "photogallery-42129.appspot.com",
  messagingSenderId: "360113683545",
  appId: "1:360113683545:web:a5c3b52c7021868a974548",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const fireStore = firebase.firestore();

export { projectStorage, fireStore };
