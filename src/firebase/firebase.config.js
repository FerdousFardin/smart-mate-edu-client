// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-DeCZjCL6K4etRU1Wn4lSbvqtyY38m60",
  authDomain: "assignment-10-d089e.firebaseapp.com",
  projectId: "assignment-10-d089e",
  storageBucket: "assignment-10-d089e.appspot.com",
  messagingSenderId: "1008406941695",
  appId: "1:1008406941695:web:39c2c7568c4f7dab60a1ca",
  measurementId: "G-CX3P56DPBY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
