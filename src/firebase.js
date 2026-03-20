import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDsff-pdOMLTvFjJHw0inKgz4QizqrGptg",
  authDomain: "tapcrop-765aa.firebaseapp.com",
  projectId: "tapcrop-765aa",
  storageBucket: "tapcrop-765aa.firebasestorage.app",
  messagingSenderId: "577826231388",
  appId: "1:577826231388:web:9f8a5062413da7aceb0299",
  measurementId: "G-P8EMHH4VGQ"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
