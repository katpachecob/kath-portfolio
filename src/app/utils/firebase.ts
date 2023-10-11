
import { getApps, initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: "kath-porfolio",
    storageBucket: "kath-porfolio.appspot.com",
    messagingSenderId: "741562263186",
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: "G-8MZ5T09HGJ"
  };

  let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app

