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

    function addMovie(movie) {
        if (!watchlist) {
            return setDoc(doc(db, 'users', user.uid), {
                movies: [movie]    
            })    
        } else if (!watchlist.find(elem => elem.id === movie.id)) {
            return setDoc(doc(db, 'users', user.uid), {
                movies: [...watchlist, movie]
            })    
        }
    }

    function removeMovie(movie) {
        return setDoc(doc(db, 'users', user.uid), {
            movies: watchlist.filter(elem => elem.id !== movie.id)
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
            if (!user) setLoadingPage(false)
        })
    }, [])
    
    useEffect(() => {
        let unsub
           
        if (user) {
            unsub = onSnapshot(doc(db, 'users', user.uid), snapshot => {
                if (snapshot.exists()) {
                    setWatchlist(snapshot.data().movies)
                } else setWatchlist([])
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
            addMovie, 
            setWatchlist,
            watchlist,
            removeMovie,
        }}>
            {children}
        </UserContext.Provider>
    )
}