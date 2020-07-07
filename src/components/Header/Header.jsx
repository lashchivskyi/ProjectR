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
        if{props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
