import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// import firebase from "firebase";


const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyAZO8ZsSkPjZ-yHlptVac5O2h2Ir0s_2cA",
  authDomain: "antrian-ea5c4.firebaseapp.com",
  databaseURL: "https://antrian-ea5c4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "antrian-ea5c4",
  storageBucket: "antrian-ea5c4.appspot.com",
  messagingSenderId: "124622402581",
  appId: "1:124622402581:web:82ec3806721a0f6568ca1c",
  measurementId: "G-CJQ22CXH5S"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);
// const init = firebase.initializeApp(config);
// export const firebaseAuthentication = init.auth();

export default firebase;
