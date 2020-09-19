import React from 'react';
import logo from './logo.svg';
import './App.css';
import BranchPage from "./components/BranchPage"
import UniPage from "./components/UniPage"
import MainPage from "./components/MainPage"
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import HeaderComp from './components/HeaderComp';
import Startpage from './components/StartPage';

function App() {
  return (
    <Router>
      
      <div className="App" dir="rtl">
        <HeaderComp />
        <Route path="/" component={BranchPage} exact />
        <Route path="/uni/:name" component={UniPage} />
        <Route path="/start" component={Startpage} />

      </div>
    </Router>
    
  );
}

export default App;
