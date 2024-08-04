import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

export default function Navbar() {
  let [menu, setmenu] = useState("Home");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="Logo" className="navbar_logo" />
      <ul className="navbar_menu">
        <li
          onClick={() => setmenu("Home")}
          className={menu == "Home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setmenu("Menu")}
          className={menu == "Menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setmenu("Mobile App")}
          className={menu == "Mobile App" ? "active" : ""}
        >
          Mobile App
        </li>
        <li
          onClick={() => setmenu("Contact us")}
          className={menu == "contact us" ? "active" : ""}
        >
          Contact us
        </li>
      </ul>
      <div className="navbar_right">
        <img src={assets.search_icon} alt="search icon" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket icon" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
}
