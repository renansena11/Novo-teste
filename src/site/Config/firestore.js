import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyApMq_EEN2VUndfdVnsTKXDgrDoXoG0Dk4",
    authDomain: "sena-engenharia.firebaseapp.com",
    projectId: "sena-engenharia",
    storageBucket: "sena-engenharia.appspot.com",
    messagingSenderId: "1024017179379",
    appId: "1:1024017179379:web:23bb61a375f8751ba18d86"    
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;

