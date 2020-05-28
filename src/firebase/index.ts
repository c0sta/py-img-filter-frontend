import firebase from "firebase/app";
import "firebase/storage";

let firebaseConfig = {
  apiKey: "AIzaSyCTqzXbhyIXVLI8JzQ4SnlLWGs1v5V-8Y4",
  authDomain: "image-filter-6d9d4.firebaseapp.com",
  databaseURL: "https://image-filter-6d9d4.firebaseio.com",
  projectId: "image-filter-6d9d4",
  storageBucket: "image-filter-6d9d4.appspot.com",
  messagingSenderId: "535829169994",
  appId: "1:535829169994:web:a2ce663674f68e2ebc23b3",
  measurementId: "G-KF426H3GG1",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase };
