import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBZtU5JrthcblZix_hmsd1ve5ELObbpko0",
  authDomain: "ecommerce-app-db-696d1.firebaseapp.com",
  projectId: "ecommerce-app-db-696d1",
  storageBucket: "ecommerce-app-db-696d1.appspot.com",
  messagingSenderId: "259423310262",
  appId: "1:259423310262:web:c7b91bc2fb4551ab1f7117",
  measurementId: "G-N2F7V0R84Q"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
