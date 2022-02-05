import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDF3EBlImApeQ2Jkl9wtssHr_Q0BIIMP8M",
  authDomain: "whatsapp-clone-react-d01d2.firebaseapp.com",
  projectId: "whatsapp-clone-react-d01d2",
  storageBucket: "whatsapp-clone-react-d01d2.appspot.com",
  messagingSenderId: "933244138122",
  appId: "1:933244138122:web:bf376286a011d331f47373"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage().ref('images');
const audioStorage = firebase.storage().ref('audios');
const createTimestamp = firebase.firestore.FieldValue.serverTimestamp;
const serverTimestamp = firebase.database.ServerValue.TIMESTAMP;

export {
    db,
    auth,
    provider,
    storage,
    audioStorage,
    createTimestamp,
    serverTimestamp
}