import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home.js';
import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar.js';

function App() {
  return (
    <div style={{overflow: 'auto'}}>
      <Navbar />
      <Switch>
      <Route  exact path='/' render={(props)=><Home {...props}/>}/>
      </Switch>
    </div>
  );
}

export default App;
