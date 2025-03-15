import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "march-madness-bracket-b24db.firebaseapp.com",
    projectId: "march-madness-bracket-b24db",
    storageBucket: "march-madness-bracket-b24db.appspot.com",
    messagingSenderId: "386065547208",
    appId: "1:386065547208:web:0104ae67bd2c232a0da461"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Correctly Export Firestore Functions
export { db, collection, addDoc };
