// Firebase is lazy-loaded to keep it out of the critical path.
// Do NOT import 'firebase/app', 'firebase/auth', or 'firebase/firestore' at module top level —
// that would pull ~340KB into the initial bundle even for anonymous users on the marketing pages.
// Instead, callers use ensureAuth() / ensureDb() which dynamically import on demand.

const firebaseConfig = {
  apiKey: "AIzaSyDsff-pdOMLTvFjJHw0inKgz4QizqrGptg",
  authDomain: "tapcrop-765aa.firebaseapp.com",
  projectId: "tapcrop-765aa",
  storageBucket: "tapcrop-765aa.firebasestorage.app",
  messagingSenderId: "577826231388",
  appId: "1:577826231388:web:9f8a5062413da7aceb0299",
  measurementId: "G-P8EMHH4VGQ"
}

let appPromise = null
let authPromise = null
let dbPromise = null

function ensureApp() {
  if (!appPromise) {
    appPromise = import('firebase/app').then(({ initializeApp }) => initializeApp(firebaseConfig))
  }
  return appPromise
}

export function ensureAuth() {
  if (!authPromise) {
    authPromise = Promise.all([ensureApp(), import('firebase/auth')])
      .then(([app, mod]) => mod.getAuth(app))
  }
  return authPromise
}

export function ensureDb() {
  if (!dbPromise) {
    dbPromise = Promise.all([ensureApp(), import('firebase/firestore')])
      .then(([app, mod]) => mod.getFirestore(app))
  }
  return dbPromise
}
