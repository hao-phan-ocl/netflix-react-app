import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TVShows from './components/TVShows';
import Movies from './components/Movies';
import MyList from './components/Mylist';
import './App.scss';
import Billboard from './components/Billboard/Billboard';
import Home from './pages/Home/Home';

export default function App() {
  return (
    <Home />
  )
}
