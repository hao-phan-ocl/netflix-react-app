import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
import { ContextProvider } from "./context/UserContext";
import Home from './pages/Home/Home';

export default function App() {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  )
}
