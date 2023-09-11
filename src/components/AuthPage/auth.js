import { initializeApp } from "firebase/app";
import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut } from 'firebase/auth'

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyDGWKpsh_cBRgUgMjF5q5HCI3uJT-rQ4U8",
  authDomain: "food-order-app-266d4.firebaseapp.com",
  databaseURL: "https://food-order-app-266d4-default-rtdb.firebaseio.com",
  projectId: "food-order-app-266d4",
  storageBucket: "food-order-app-266d4.appspot.com",
  messagingSenderId: "869359762545",
  appId: "1:869359762545:web:4f3e081b6c591a54ee6fd0"
});
const auth = getAuth(firebaseConfig);

export const loginEmailPassword = async (email,password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Successfully logged in with user:", user);
  }
  catch(error) {
    console.log(error)
  }
}

export const createAccount = async (email,password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Successfully created account for user:", user);
  }
  catch(error) {
    console.log(error)
  }
}

export const logOut = async () => {
  signOut(auth)
}