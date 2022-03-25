import { initializeApp } from "firebase/app";
import { getFirestore}  from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDZoxZtLSbPj6KvCK_j84Jc2rxYJkNWCwI",
  authDomain: "mining-7b6a4.firebaseapp.com",
  projectId: "mining-7b6a4",
  storageBucket: "mining-7b6a4.appspot.com",
  messagingSenderId: "867853426556",
  appId: "1:867853426556:web:a6b91f5cdc772a310f4ef9"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// export const auth =getAuth();

// export {app}

export {app,db}
