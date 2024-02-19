// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Add Auth
import { collection, getFirestore } from "firebase/firestore"; // Add Firestore
import { getDatabase } from "firebase/database"; // Add Realtime Database
import { getStorage } from "firebase/storage"; // Add Storage
import { query, where, getDocs } from "firebase/firestore";


// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1WaPhblL23jJZBib1qMAg55fHFVXa3Ro",
    authDomain: "productdevelopment-cffa5.firebaseapp.com",
    databaseURL: "https://productdevelopment-cffa5-default-rtdb.firebaseio.com",
    projectId: "productdevelopment-cffa5",
    storageBucket: "productdevelopment-cffa5.appspot.com",
    messagingSenderId: "73884901939",
    appId: "1:73884901939:web:576591c50bc57d36a03946",
    measurementId: "G-ZKBYG6JZKT"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

// Initialize Firebase services
const auth = getAuth(firebaseApp); // Initialize Auth
const firestore = getFirestore(firebaseApp); // Initialize Firestore
const database = getDatabase(firebaseApp); // Initialize Realtime Database
const storage = getStorage(firebaseApp); // Initialize Storage

// Getting from firebase
async function getDetails(firestore, email) {
    const usersCollection = collection(firestore, 'users');
    const q = query(usersCollection, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        return userData; // Return user data
    } else {
        return null; // User not found
    }
}

export { auth, firestore, database, storage, firebaseApp };