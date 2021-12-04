import { initializeApp } from '@firebase/app'
import { getAuth } from '@firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBMZIqTSW16j67t2HtdPxy0F9uiHjnT-0E",
    authDomain: "netflix-clone-148e4.firebaseapp.com",
    databaseURL: "https://netflix-clone-148e4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "netflix-clone-148e4",
    storageBucket: "netflix-clone-148e4.appspot.com",
    messagingSenderId: "1055051808227",
    appId: "1:1055051808227:web:d14b72f15ecab0f80534d6",
    measurementId: "G-EJZYYWJZ1D"
  }

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

