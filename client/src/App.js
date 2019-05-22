import React, { Component } from "react";
import "./App.css";
import history from "./history.js";
import { Link, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import FilterRestaurants from "./components/RestaurantList/FilterRestaurants";
import Menu from "./components/RestaurantProfile/Menu";
import Cart from './components/Cart/Cart'
import Confirmation from './components/Confirmation/Confirmation'
import data from './services/data.json'

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
      index: 0,
      cart:[]
    };
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick = (e,restaurant) => {
  	e.preventDefault();
  	const index=restaurant;
  	this.setState({index},()=>{console.log(this.state.index);history.push("/menu")})
  }

  addToCart = (e,index) => {
  	e.preventDefault();
  	const cart=this.state.cart;
  	const item=data[this.state.index].cuisines[index];
  	cart.push([item.food,item.price]);
  	this.setState({cart},()=>{console.log(this.state.cart)})
  }

  clearCart = (e) => {
  	e.preventDefault();
  	const cart = [];
  	this.setState({cart},()=>{console.log(this.state.cart)})
  }

  displayTotalPrice=()=>{
  	if (this.state.cart.length!=0){
	  	const items = this.state.cart.map(item=>item[1]);
			const reducer = (acc, current) => acc + current;
			const total = items.reduce(reducer)
			console.log(total);
			return total;
		}
		else{
			return 0
		}
  }

  render() {
  	const {index,cart} = this.state
  	const {handleClick,addToCart,clearCart,displayTotalPrice} = this
    return (
      <div className="App">
	      <Route exact path="/" render={()=>
	      	<Home
	      	history={history}
	      	/>}
      	/>
	      <Route exact path="/menu" render={()=>
	      	<Menu
	      	history={history}
	      	data={data}
	      	index={index}
	      	cuisines={data[index].cuisines}
	      	addToCart={addToCart}
	      	/>}
      	/>
	      <Route exact path="/restaurantlist" render={()=>
	      	<FilterRestaurants
	      	history={history}
	      	data={data}
	      	handleClick={handleClick}
	      	/>}
      	/>
	      <Route exact path="/cart" render={()=>
	      	<Cart
	      	history={history}
	      	cart={cart}
	      	displayTotalPrice={displayTotalPrice}
	      	clearCart={clearCart}
	      	/>
	      }
	      />
	      <Route exact path="/confirmation" render={()=>
	      	<Confirmation
	      	history={history}
	      	/>}
      	/>
      </div>
    );
  }
}

export default App;