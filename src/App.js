import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom'
import './App.scss'
import Search from './components/Search/Search'
import Page from './components/Page/Page'
import { ContextProvider } from './store/UserContext'
import requests from './api/requests'
import Login from './components/Login/Login'
import Nav from './components/Nav/Nav'
import Register from './components/Register/Register'
import { useContext } from 'react'
import { UserContext } from './store/UserContext'

export default function App() {
  function PrivateRoutes() {
    const {user} = useContext(UserContext)

    return user ? <Outlet /> : <Navigate to='/' />
  }

  return (
    <ContextProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route element={<PrivateRoutes />} >
            <Route path='/home' element={<Page fetchData={requests.trending} />} />
            <Route path='/tvshows' element={<Page fetchData={requests.tvTrending} />} />
            <Route path='/movies' element={<Page fetchData={requests.movieTrending}/>} />
            <Route path='/search' element={<Search />} />
          </Route>
        </Routes>
      </Router>
    </ContextProvider>
  )
}