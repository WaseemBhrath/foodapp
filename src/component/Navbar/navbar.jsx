import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
export default function Navbar({ setshowLogin }) {
  let [menu, setmenu] = useState("Home");
  return (
    <div className="navbar">
      <Link to={"/"}>
        {" "}
       <img src={assets.logo} alt="Logo" className="navbar_logo" />{" "}
      </Link>
      <ul className="navbar_menu">
        <a
          href="/"
          onClick={() => setmenu("Home")}
          className={menu == "Home" ? "active" : ""}
        >
          {" "}
          Home
        </a>
        <a
          href="#exploremenu"
          onClick={() => setmenu("Menu")}
          className={menu == "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#App-download"
          onClick={() => setmenu("Mobile App")}
          className={menu == "Mobile App" ? "active" : ""}
        >
          Mobile App
        </a>
        <a
          href="#footer"
          onClick={() => setmenu("Contact us")}
          className={menu == "contact us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar_right">
        <img src={assets?.search_icon} alt="search icon" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            {" "}
            <img src={assets?.basket_icon} alt="basket icon" />
          </Link>
          <div className="dot"></div>
        </div>
        <button onClick={() => setshowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
}
