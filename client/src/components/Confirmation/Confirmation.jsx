import React from "react";
import "./confirmation.css";
import Footer from '../Footer/Footer'

function Confirmation(props) {
  const {history} = props
  return (
    <div>
      <h1 className="confirmation-banner">Are you ready to Yumble!!</h1>
      <div className="confirmation-box">
        <h3>Your order will arrive shortly.</h3>
      </div>
      <div className="button-wrapper">
        
        <button onClick={()=>history.push("/restaurantlist")} className="return-button">Return Home</button>
      </div>
    </div>
  );
}

export default Confirmation;
