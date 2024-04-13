import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../data/assets/logo-white.png";

import "../styles/Nav.css";
const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [Open, setOpen] = useState(false);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    setOpen(false); 
  };

  const toggleMenu = () => {
    setOpen(!Open);
    if (!Open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <>
      <div className={`Navbarbg ${Open ? "no-scroll" : ""}`}>
        <nav className="NavB">
          <ul className="mobMenu">
            <input
              type="checkbox"
              id="checkbox"
              onChange={() => toggleMenu()}
              checked={Open}
            ></input>
            <label htmlFor="checkbox" className="toggle">
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>

            <img src={logo} height={50} width={120}></img>
          </ul>

          <ul className="Nav">
            <img src={logo} height={50} width={150}></img>
            <li
              className={activeItem === "Home" ? "active" : ""}
              onClick={() => handleItemClick("Home")}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={activeItem === "Speakers" ? "active" : ""}
              onClick={() => handleItemClick("Speakers")}
            >
              <Link to="/Speakers">Speakers</Link>
            </li>
            <li
              className={activeItem === "Sponsors" ? "active" : ""}
              onClick={() => handleItemClick("Sponsors")}
            >
              <Link to="/#">Sponsors</Link>
            </li>
            <li
              className={activeItem === "Team" ? "active" : ""}
              onClick={() => handleItemClick("Team")}
            >
              <Link to="/Team">Team</Link>
            </li>
          </ul>
          {/* <Link
            to="/Register"
            className="buttonn"
            onClick={() => handleItemClick("")}
          >
            Register
          </Link> */}
        </nav>
      </div>

      {Open && (
        <div className="MobNav">
          <li
            className={activeItem === "Home" ? "active" : ""}
            onClick={() => handleItemClick("Home")}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={activeItem === "Speakers" ? "active" : ""}
            onClick={() => handleItemClick("Speakers")}
          >
            <Link to="/Speakers">Speakers</Link>
          </li>
          <li
            className={activeItem === "Sponsors" ? "active" : ""}
            onClick={() => handleItemClick("Sponsors")}
          >
            <Link to="/Sponsors">Sponsors</Link>
          </li>
          <li
            className={activeItem === "Team" ? "active" : ""}
            onClick={() => handleItemClick("Team")}
          >
            <Link to="/Team">Team</Link>
          </li>
        </div>
      )}
    </>
  );
};

export default Navbar;
