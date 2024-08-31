import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDFpLa-6AHKHspMKaMtNC1yv9b4QRYrcIg",
  authDomain: "project-863fc.firebaseapp.com",
  projectId: "project-863fc",
  storageBucket: "project-863fc.appspot.com",
  messagingSenderId: "31917567513",
  appId: "1:31917567513:web:b6871ec45e97fb63324488",
  measurementId: "G-1S141JYG4C"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);  // Add this line

export { auth, db, storage };