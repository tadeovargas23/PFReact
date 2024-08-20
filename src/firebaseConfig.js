// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyCng8xTKSkKs-abZxXiuK7j259GHX-doYk",
  authDomain: "finalreact-1ba1a.firebaseapp.com",
  projectId: "finalreact-1ba1a",
  storageBucket: "finalreact-1ba1a.appspot.com",
  messagingSenderId: "222267604559",
  appId: "1:222267604559:web:77b9531f70d587f30f11d8",
  measurementId: "G-52YRH44KYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
