import React, { Component } from "react";
import "./App.css";


import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
