import React, { Component } from 'react';
import './App.css';
import Welcome from '../Welcome/Welcome.js';
import Home from '../Home/Home.js';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route exact path='/' component={Welcome} />
        <Route path='/home' component={Home} />
      </div>
    );
  }
}

export default App;
