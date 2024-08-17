import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBOLmuiXCdrMWtEOysmso8dK44T6Ampe-Y",
    authDomain: "e-commerceapp-637ba.firebaseapp.com",
    projectId: "e-commerceapp-637ba",
    storageBucket: "e-commerceapp-637ba.appspot.com",
    messagingSenderId: "1023806634081",
    appId: "1:1023806634081:web:a5350f13602b216c8e5220"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;