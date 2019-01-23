import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Home from './Home.js';
import Meals from './Meals.js';
import Meal from './Meal.js';




class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/:meal/:id" component={Meals} />
          <Route exact path="/:meal/:id/:mealName" component={Meal} />
        </div>
      </Router>

    );
  }
}

// <Route path="/:id" component={Item} />



export default App;
