import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAACb7o--5-CtzB8cacQ9SgfR6PEy5bmd8",
    authDomain: "cros-db.firebaseapp.com",
    projectId: "cros-db",
    storageBucket: "cros-db.appspot.com",
    messagingSenderId: "98888742662",
    appId: "1:98888742662:web:9d6ba3d47ef84ef49ad087"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;