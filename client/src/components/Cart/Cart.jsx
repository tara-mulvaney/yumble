import React from "react";
import "./cart.css";

function Cart(props) {
  const {cart,displayTotalPrice,history,clearCart} = props
  return (
    <div>
      <button onClick={()=>history.push("/menu")}>&#60;</button>
      <h1 className="cart-banner">Bill</h1>
      <div className="main-cart-box">
        <ul className="pick-deliv">
          <li>
            <input type="radio" id="pickup" name="pickup" />
            <label for="pickup">PICK UP</label>
          </li>
          <li>
            <input type="radio" id="delivery" name="pickup" />
            <label for="delivery">Delivery</label>
          </li>
        </ul>
      </div>
      <div className="cart-box">
        <form>
          <h3>DELIVERY TIME</h3>
          <div className="delivery-time">
          <select>
            <option value="30">30 min</option>
            <option value="45">45 min</option>
            <option value="60">60 min</option>
          </select>
          </div>
        </form>
        <div className="price-render">
          <h3>PRICE</h3>
          <p>$1.50</p>
        </div>

      <div className="cart-box">
        <h3>FOOD ITEMS</h3>
        <div className="cart-box">
          {cart.length ? (
            cart.map((item,index) => {
              return (
                <div className="cart-list">
                  <p>{item[0]}</p>
                  <p>{item[1]}</p>
                </div>
              );
            })):
            <p className="cart-list">Cart is empty</p>}
        </div>
      </div>
      <div className="cart-box">
        <h3>YUMBLE FEE</h3>
        <p className="yumble-fee">$1.20</p>
      </div>
      <div className="cart-box">
        <h3>DELIVERY TIP</h3>
        <ul className="delivery-tip">
          <li>
            <input type="radio" id="a15" name="amount" />
            <label for="a15">15%</label>
          </li>
          <li>
            <input type="radio" id="a20" name="amount" />
            <label for="a20">20%</label>
          </li>
          <li>
            <input type="radio" id="a25" name="amount" />
            <label for="a25">25%</label>
          </li>
          <li>
            <input type="radio" id="a0" name="amount" />
            <label for="a0">Add Later</label>
          </li>
          <li>
            <input type="radio" id="other" name="amount" />
            <label for="other">other:</label>
          </li>
          <li>
            <input type="number" id="otherAmount" name="numAmount" />
          </li>
        </ul>
      </div>
      <div className="total-pay">
        <h2>Total: ${displayTotalPrice()}</h2>
        <button onClick={(e)=>{clearCart(e);history.push("/confirmation")}}>Pay Now</button>
      </div>
    </div>
    </div>
  );
}

export default Cart;

