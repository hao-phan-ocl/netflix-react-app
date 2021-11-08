import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import TvShows from './pages/TvShows';
import Movies from './pages/Movies';

export default function App() {
  return (
    <Router>
        <Nav />
        <Routes>
         <Route path="/netflix-react-app" element={<Home />} />
         <Route path="/netflix-react-app/tvshows" element={<TvShows />} />
         <Route path="/netflix-react-app/movies" element={<Movies />} />
        </Routes>
    </Router>
  )
}