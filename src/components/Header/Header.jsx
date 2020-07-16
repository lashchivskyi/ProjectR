import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <img
        alt="img"
        src="https://s1.logaster.com/static/v3/img/products/logo.png"
      ></img>
      <div className="login-block">
        {props.isAuth ? (
          <div>
            {props.login} <button onClick={props.loginExit}>Exit</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
