import React, { Component } from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import RestaurantList from "./components/RestaurantList/RestaurantList";
import Menu from "./components/RestaurantProfile/Menu";
import Cart from './components/Cart/Cart'
import Confirmation from './components/Confirmation/Confirmation'

class App extends Component {
  render() {
    return (
      <div className="App">
      
	      <Link to="/">Home</Link>
	      <Link to="/menu">Menu</Link>
	      <Link to="/restaurantlist">RestaurantList</Link>
	      <Link to="/cart">Cart</Link>
	      <Link to="/confirmation">Confirmation</Link>
	      
	      <Header />
	      <Route exact path="/" render={()=><Home/>} />
	      <Route exact path="/menu" render={()=><Menu/>} />
	      <Route exact path="/restaurantlist" render={()=><RestaurantList/>} />
	      <Route exact path="/cart" render={()=><Cart />} />
	      <Route exact path="/confirmation" render={()=><Confirmation />} />
	      <Footer />
	      
      </div>
    );
  }
}

export default App;