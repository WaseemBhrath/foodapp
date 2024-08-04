import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

export default function Navbar({setshowLogin}) {
  let [menu, setmenu] = useState("Home");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="Logo" className="navbar_logo" />
      <ul className="navbar_menu">
        <li
          onClick={() => setmenu("Home")}
          className={menu == "Home" ? "active" : ""}> Home</li>
        <a href="#exploremenu"
          onClick={() => setmenu("Menu")}
          className={menu == "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a href="#App-download"
          onClick={() => setmenu("Mobile App")}
          className={menu == "Mobile App" ? "active" : ""}
        >
          Mobile App
        </a>
        <a href="#footer"
          onClick={() => setmenu("Contact us")}
          className={menu == "contact us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar_right">
        <img src={assets.search_icon} alt="search icon" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket icon" />
          <div className="dot"></div>
        </div>
        <button onClick={()=>setshowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
}
