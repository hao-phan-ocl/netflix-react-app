import { createContext, useEffect, useState } from 'react'
import { 
    signOut,
    onAuthStateChanged, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from '@firebase/auth'
import { auth } from '../firebase/firebase'

export const UserContext = createContext()

export function ContextProvider({children}) {
    const [searchText, setSearchText] = useState('')
    const [user, setUser] = useState()
    
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return signOut(auth)
    }

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user)
        })

        return unsubscribe
    }, [])

    return (
        <UserContext.Provider value={{searchText, setSearchText, user, signup, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}