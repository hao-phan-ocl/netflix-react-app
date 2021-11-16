import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Search from './components/Search/Search';
import Page from './components/Page/Page';
import { SearchProvider } from './store/SearchContext';
import requests from './api/requests';
import Login from './components/Login/Login';

export default function App() {
  const user = true;

  return (
    <SearchProvider>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" element={<Page fetchData={requests.trending} />} />
            <Route path="/tvshows" element={<Page fetchData={requests.tvTrending} />} />
            <Route path="/movies" element={<Page fetchData={requests.movieTrending}/>} />
            <Route path="/search" element={<Search />} />
          </Routes>
        )}
      </Router>
    </SearchProvider>
  )
}