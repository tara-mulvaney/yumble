import React, { Component } from "react";
import "./App.css";
import { Link, Route } from 'react-router-dom';

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import RestaurantList from "./components/RestaurantList/RestaurantList";

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />
        {/* <Home /> */}
        <RestaurantList />
      </div>
    );
  }
}

export default App;
