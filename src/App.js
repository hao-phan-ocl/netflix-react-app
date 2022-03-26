import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react'

import Search from './components/Search/Search'
import Login from './components/Login/Login'
import Nav from './components/Nav/Nav'
import Register from './components/Register/Register'
import { ContextProvider } from './store/UserContext'
import { homeRequests, movieRequests, tvRequests } from './api/requests'
import { UserContext } from './store/UserContext'
import MyList from './components/MyList/MyList'
import Movies from './components/Page/Movies'
import TvShows from './components/Page/TvShows'
import Home from './components/Page/Home'
import Footer from './components/Footer/Footer'
import './App.scss'

export default function App() {
  return (
    <ContextProvider>
      <Router>
        <Nav />
        <Routes>
          <Route element={<PublicRoutes />} >
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
          <Route element={<PrivateRoutes />} >
            <Route path='/' element={<Home fetchData={homeRequests} />} />
            <Route path='/tvshows' element={<TvShows fetchData={tvRequests} />} />
            <Route path='/movies' element={<Movies fetchData={movieRequests}/>} />
            <Route path='/search' element={<Search />} />
            <Route path='/mylist' element={<MyList />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </ContextProvider>
  )
}

function PrivateRoutes() {
  const {user} = useContext(UserContext)
    
  return user ? <Outlet /> : <Navigate to='/login' />
}

function PublicRoutes() {
  const {user} = useContext(UserContext)
      
  return !user ? <Outlet /> : <Navigate to={-1} /> 
}