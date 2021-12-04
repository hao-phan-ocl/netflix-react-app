import { initializeApp } from '@firebase/app'
import { getAuth } from '@firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCJulrGaVJsbSBKoOz5kxXWkCJJSX3d90w",
  authDomain: "react-movies-app-867b0.firebaseapp.com",
  projectId: "react-movies-app-867b0",
  storageBucket: "react-movies-app-867b0.appspot.com",
  messagingSenderId: "421245371788",
  appId: "1:421245371788:web:197e4c31f3a9cbc73302a9"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
