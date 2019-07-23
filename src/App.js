import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={Home}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/about" component={About}/>
  </div>
);

export default App;