// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgueRlsWYWMue-pnNnqWKbj-hYWu3r9uA",
  authDomain: "challenge-spotify.firebaseapp.com",
  projectId: "challenge-spotify",
  storageBucket: "challenge-spotify.appspot.com",
  messagingSenderId: "397415461900",
  appId: "1:397415461900:web:9600c9125de918feb42a29",
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
