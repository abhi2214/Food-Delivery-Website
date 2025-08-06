import React, { useContext } from "react";
import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ( {setShowlogin} ) => {
  const [menu, setMenu] = useState("Home");
  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="logo" className="logo" /></Link>
      {/* <img src={assets.search_icon} alt="" /> */}
      <ul className="navbar-menu">
        <li>
          <Link
            to="/"
            onClick={() => {
              setMenu("Home");
            }}
            className={menu === "Home" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="#explore-menu"
            onClick={() => {
              setMenu("Menu");
            }}
            className={menu === "Menu" ? "active" : ""}
          >
            Menu
          </a>
        </li>

        <li>
          {" "}
          <a
            href="#app-download"
            onClick={() => {
              setMenu("mobile-app");
            }}
            className={menu === "mobile-app" ? "active" : ""}
          >
            mobile-app
          </a>
        </li>

        <li>
          {" "}
          <a
            href="#footer"
            onClick={() => {
              setMenu("Contact-us");
            }}
            className={menu === "Contact-us" ? "active" : ""}
          >
            Contact-us
          </a>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search_icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0 ?"":"dot"}></div>
        </div>
        <button onClick={() => setShowlogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
