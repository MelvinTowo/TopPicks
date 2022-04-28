
import firebase from "firebase/compat/app"
import "firebase/compat/auth"

// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
  apiKey: "AIzaSyDnqJ0DloM1VsBh8Ptw88rfK6Tj4qyPVQU",
  authDomain: "toppicks-a81ae.firebaseapp.com",
  projectId: "toppicks-a81ae",
  storageBucket: "toppicks-a81ae.appspot.com",
  messagingSenderId: "42266653025",
  appId: "1:42266653025:web:c812671aed905663c21520",
  measurementId: "G-55S13WEKR3"
})

// Initialize Firebase


export const auth = app.auth()
export default app;
//Woring one here
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID




  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID



  // apiKey: "AIzaSyDnqJ0DloM1VsBh8Ptw88rfK6Tj4qyPVQU",
  // authDomain: "toppicks-a81ae.firebaseapp.com",
  // projectId: "toppicks-a81ae",
  // storageBucket: "toppicks-a81ae.appspot.com",
  // messagingSenderId: "42266653025",
  // appId: "1:42266653025:web:c812671aed905663c21520",
  // measurementId: "G-55S13WEKR3"