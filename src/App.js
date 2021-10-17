import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav/Nav';
import MoviePreview from './components/MoviePreview/MoviePreview';
import TVShows from './components/TVShows';
import Movies from './components/Movies';
import MyList from './components/Mylist';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
      <Router>
        <Nav />
        <Switch>
            <Route exact path="/" component={MoviePreview} />
            <Route path="/tvshows" component={TVShows} />
            <Route path="/movies" component={Movies} />
            <Route path="/mylist" component={MyList} />
        </Switch>
    </Router>
  )
}
