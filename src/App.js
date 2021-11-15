import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
          <Route path="/" element={<Home />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/search" element={<Search />} />
        </Routes>
    </Router>
    </SearchProvider>
  )
}