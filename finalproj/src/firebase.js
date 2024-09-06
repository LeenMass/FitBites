import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyD6CobNT1sVe7gwA9_EJmMYeOwAdw4_Hsw",
    authDomain: "appe-6d5f4.firebaseapp.com",
    projectId: "appe-6d5f4",
    storageBucket: "appe-6d5f4.appspot.com",
    messagingSenderId: "557572723814",
    appId: "1:557572723814:web:826cd4680ed0b9ce8d89a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); const db = getFirestore(app);

export default db;
