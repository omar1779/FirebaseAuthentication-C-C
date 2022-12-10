import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCZgOvwZ7bLyIIYcKS6TM04gYcOBZjL0gk",
  authDomain: "coffeeandcode-cfa1d.firebaseapp.com",
  projectId: "coffeeandcode-cfa1d",
  storageBucket: "coffeeandcode-cfa1d.appspot.com",
  messagingSenderId: "247340833494",
  appId: "1:247340833494:web:b7df908547c1c2a9f04777",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
