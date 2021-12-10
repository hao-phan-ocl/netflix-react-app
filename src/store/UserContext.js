import { createContext, useEffect, useState } from 'react'
import { 
    signOut,
    onAuthStateChanged, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from '@firebase/auth'
import { doc, onSnapshot, setDoc } from '@firebase/firestore'
import { auth, db } from '../firebase/firebase'

export const UserContext = createContext()

export function ContextProvider({children}) {
    const [searchText, setSearchText] = useState('')
    const [user, setUser] = useState()
    const [loadingPage, setLoadingPage] = useState(true)
    const [watchlist, setWatchlist] = useState([])
    
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
        onAuthStateChanged(auth, user => {
            setUser(user)
            if (!user) setLoadingPage(false)
        })
    }, [])

    function addToMyList(movie) {
        if (!watchlist) {
            return setDoc(doc(db, 'watchlist', user.uid), {
                movies: [movie]    
            })    
        } else if (!watchlist.find(elem => elem === movie)) {
            return setDoc(doc(db, 'watchlist', user.uid), {
                movies: [...watchlist, movie]
            })    
        }
    }
    
    useEffect(() => {
        let unsub
           
        if (user) {
            unsub = onSnapshot(doc(db, 'watchlist', user.uid), snapshot => {
                if (snapshot.exists()) {
                    setWatchlist(snapshot.data().movies)
                }
            })
        }
        
        return unsub
    }, [user])
    
    return (
        <UserContext.Provider value={{
            searchText, 
            setSearchText, 
            user, 
            signup, 
            login, 
            logout, 
            loadingPage, 
            addToMyList, 
            setWatchlist,
            watchlist
        }}>
            {children}
        </UserContext.Provider>
    )
}