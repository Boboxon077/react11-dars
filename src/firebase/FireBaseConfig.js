import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjGzagufxPX7I6EMNlHz3orivPynCt8R4",
  authDomain: "mybook-test-ad4e2.firebaseapp.com",
  projectId: "mybook-test-ad4e2",
  storageBucket: "mybook-test-ad4e2.appspot.com",
  messagingSenderId: "882673352115",
  appId: "1:882673352115:web:b04ce4d070e982e29e5fc6",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

export { db, auth };
