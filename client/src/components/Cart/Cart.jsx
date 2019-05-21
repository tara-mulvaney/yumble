import React from "react";
import './cart.css';

function Cart() {
  return (
    <div>
      <h1 className="banner">Bill</h1>
      <div className="cart-box">
	      <button>Pick-up</button>
	      <button>Delivery</button>
      </div>
      <div className="cart-box">
      <form>
      	<h3>DELIVERY TIME</h3>
      	<select>
				  <option value="30">30 min</option>
				  <option value="45">45 min</option>
				  <option value="60">60 min</option>
				</select>
      </form>
      <h3>PRICE</h3>
      <p>$1.50</p>
      </div>
      <div className="cart-box">
	      <h3>FOOD ITEMS</h3>
	      <div className="cart-box">
		      <p>Cheese Croissant</p>
		      <p>$17.15</p>
	      </div>
      </div>
      <div className="cart-box">
	      <h3>YUMBLE FEE</h3>
	      <p>$1.20</p>
      </div>
      <div className="cart-box">
	      <h3>DELIVERY TIP</h3>
	      <form>
		      <input type="radio" name="tip" value="15"/> 15%<br/>
					<input type="radio" name="tip" value="20"/> 20%<br/>
					<input type="radio" name="tip" value="25"/> 25%<br/>
					<input type="radio" name="tip" value="0"/> Add Later
	      </form>
      </div>
      <div>
	      <h2>Total: $23.95</h2>
	      <button>Pay Now</button>      	
      </div>
    </div>
  );
}

export default Cart;
