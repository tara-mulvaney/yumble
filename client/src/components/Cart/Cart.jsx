import React from "react";
import './cart.css';

function Cart(props) {
  const {cart,displayTotalPrice,history,clearCart} = props
  return (
    <div>
      <button onClick={()=>history.push("/menu")}>&#60;</button>
      <h1 className="cart-banner">Bill</h1>
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
          {cart.length ? (
            cart.map((item,index) => {
              return (
                <div>
                  <p>{item[0]}</p>
                  <p>{item[1]}</p>
                </div>
              );
            })):<p>Cart is empty</p>}
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
	      <h2>Total: ${displayTotalPrice()}</h2>
	      <button onClick={(e)=>{clearCart(e);history.push("/confirmation")}}>Pay Now</button>      	
      </div>
    </div>
  );
}

export default Cart;
