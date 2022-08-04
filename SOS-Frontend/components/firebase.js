import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAD4M-WQhjPkCaWfhRSIRmPfsHWReItWxw",
    authDomain: "sosapp-877db.firebaseapp.com",
    projectId: "sosapp-877db",
    storageBucket: "sosapp-877db.appspot.com",
    messagingSenderId: "552222011747",
    appId: "1:552222011747:web:cd7cb766e463a47dd92356",
    measurementId: "G-6SMB0X6W6Y"
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app, {experimentalForceDetectLongPolling : true});

export {firestore}
