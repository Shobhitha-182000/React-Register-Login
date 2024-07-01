// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt9xJvH-QPYfGx3wLvsGqxTKX7oc93gNo",
  authDomain: "login-auth-788b1.firebaseapp.com",
  projectId: "login-auth-788b1",
  storageBucket: "login-auth-788b1.appspot.com",
  messagingSenderId: "824798332172",
  appId: "1:824798332172:web:69356cd3b1ee5779e7f529"
};

 
const app = initializeApp(firebaseConfig);

 
export const auth = getAuth(app);  
export const db = getFirestore(app); 

export default app;  
