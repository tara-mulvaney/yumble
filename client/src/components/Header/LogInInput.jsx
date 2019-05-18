import React from "react";
import "./Header.css";

function LogInInput() {
  return (
    <div>
      <div className="login">
        <input type="text" name="login" placeholder="email" />
        <input type="text" name="password" placeholder="password" />
        {/* <input type="submit">LogIn</input> */}
      </div>
    </div>
  );
}

export default LogInInput;
