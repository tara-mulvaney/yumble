import React, { Component } from "react";
import "./App.css";
import history from "./history.js";
import { Link, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import RestaurantList from "./components/RestaurantList/RestaurantList";
import Menu from "./components/RestaurantProfile/Menu";
import Cart from "./components/Cart/Cart";
import Confirmation from "./components/Confirmation/Confirmation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/restaurantlist">RestaurantList</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/confirmation">Confirmation</Link>
          </li>
        </nav>
        <Header />
        <Route exact path="/" render={() => <Home history={history} />} />
        <Route exact path="/menu" render={() => <Menu history={history} />} />
        <Route
          exact
          path="/restaurantlist"
          render={() => <RestaurantList history={history} />}
        />
        <Route exact path="/cart" render={() => <Cart history={history} />} />
        <Route
          exact
          path="/confirmation"
          render={() => <Confirmation history={history} />}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
