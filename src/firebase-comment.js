import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBP_29pK3X7f6zL3H6i4HxpZDElS6ULO3s",
    authDomain: "portfolio-4df6b.firebaseapp.com",
    projectId: "portfolio-4df6b",
    storageBucket: "portfolio-4df6b.firebasestorage.app",
    messagingSenderId: "755004288467",
    appId: "1:755004288467:web:e9887ed4951fbca071d326"
  };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };