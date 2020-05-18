import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginForm from './components/login'
import Home from "./components/Home.js"
import './App.css';

function App() {
  return (
    <div>
      <div className="main"> 
      <Router>
       <Switch>
         <Route exact path="/" component={LoginForm} />
         <Route path="/home" component={Home} />
       </Switch>
       </Router>  
      </div>
    </div>
  );
}

export default App;
