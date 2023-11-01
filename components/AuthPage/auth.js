import { initializeApp } from "firebase/app";
import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut,GoogleAuthProvider,signInWithPopup } from 'firebase/auth'

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyDGWKpsh_cBRgUgMjF5q5HCI3uJT-rQ4U8",
  authDomain: "food-order-app-266d4.firebaseapp.com",
  databaseURL: "https://food-order-app-266d4-default-rtdb.firebaseio.com",
  projectId: "food-order-app-266d4",
  storageBucket: "food-order-app-266d4.appspot.com",
  messagingSenderId: "869359762545",
  appId: "1:869359762545:web:4f3e081b6c591a54ee6fd0"
});
export const auth = getAuth(firebaseConfig);

console.log("Firebase API Key:",apiKey);


export const loginEmailPassword = async (email,password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Successfully logged in with user:", user);
    return user;
  }
  catch(error) {
    console.log(error);
    throw error;
  }
};

export const createAccount = async (email,password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Successfully created account for user:", user);
    return user;
  }
  catch(error) {
    console.log(error);
    throw error;
  }
};

export const logOut = async () => {
  signOut(auth)
};

export const GoogleProvider = new GoogleAuthProvider()

export const loginWithGoogle = async () => {
  signInWithPopup(auth,GoogleProvider).then((result) => {
    console.log(result)

  }).catch((error) => {
    console.log(error)
  })
};