import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav/Nav';
import Search from './pages/Search';
import Home from './pages/Home';
import TvShows from './pages/TvShows';
import Movies from './pages/Movies';
import { SearchProvider } from './store/SearchContext';

export default function App() {
  return (
    <SearchProvider>
    <Router>
        <Nav />
        <Routes>
          {/* <Route path="/netflix-react-app" /> */}
          <Route path="/netflix-react-app" element={<Home />} />
          <Route path="/netflix-react-app/tvshows" element={<TvShows />} />
          <Route path="/netflix-react-app/movies" element={<Movies />} />
          <Route path="/netflix-react-app/search" element={<Search />} />
        </Routes>
    </Router>
    </SearchProvider>
  )
}

// element={<Navigate to="/home" />}