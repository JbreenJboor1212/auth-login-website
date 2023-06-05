import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLIIht6NXFa9I4O0MIn1BrOxVMNkXfLX4",
  authDomain: "nice-app-c44df.firebaseapp.com",
  projectId: "nice-app-c44df",
  storageBucket: "nice-app-c44df.appspot.com",
  messagingSenderId: "568202664450",
  appId: "1:568202664450:web:46f458e2a6cff8fd4ee51b",
  measurementId: "G-FYLTKMGTED",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
