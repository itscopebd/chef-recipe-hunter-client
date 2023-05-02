// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDbk-zMh272XGJRBDkEPyGaHDEh23IEnwI",
//   authDomain: "email-password-auth-902dd.firebaseapp.com",
//   projectId: "email-password-auth-902dd",
//   storageBucket: "email-password-auth-902dd.appspot.com",
//   messagingSenderId: "632643142291",
//   appId: "1:632643142291:web:266d578afa82b475944366"
// };

// Initialize Firebase



const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKYE,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;