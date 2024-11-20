import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmgU-c2QDrHaMp-D0UgJzgw62_YqrTltQ",
  authDomain: "proyectoweb-9a868.firebaseapp.com",
  projectId: "proyectoweb-9a868",
  storageBucket: "proyectoweb-9a868.firebasestorage.app",
  messagingSenderId: "608723521749",
  appId: "1:608723521749:web:c6ca3ea8ca18f08725525c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };