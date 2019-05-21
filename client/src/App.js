import React, { Component } from "react";
import "./App.css";
// import { Link, Route } from "react-router-dom";

// import Footer from "./components/Footer/Footer";
// import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
// import RestaurantList from "./components/RestaurantList/RestaurantList";
import Menu from "./components/RestaurantProfile/Menu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
      </div>
    );
  }
}

export default App;
