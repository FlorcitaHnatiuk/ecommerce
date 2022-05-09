
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA0LnZt-3NLgH6jM1IV74AMV6-zAG_GTs8",
    authDomain: "lavinotecadeflor.firebaseapp.com",
    projectId: "lavinotecadeflor",
    storageBucket: "lavinotecadeflor.appspot.com",
    messagingSenderId: "176796102955",
    appId: "1:176796102955:web:5617b4b1ce80f189e0556e"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)