import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA3bJxurQEHzJdwlx8WcqfsOsXwf2NyLCo",
  authDomain: "webcrystal-88c50.firebaseapp.com",
  databaseURL: "https://webcrystal-88c50.firebaseio.com",
  projectId: "webcrystal-88c50",
  storageBucket: "webcrystal-88c50.appspot.com",
  messagingSenderId: "200206586154"
};

firebase.initializeApp(config);
export const db = firebase.database();