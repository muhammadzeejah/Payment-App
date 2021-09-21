import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [state, setstate] = useState(false);
  const clicked = () => setstate(!state);
  const closeMenu = () => setstate(false);
  return (
    <>
      <nav className="nav-bar">
        {/* Logo */}
        <NavLink to="/" className="logo">
          <h1>PayZot</h1>
        </NavLink>
        <div className="menu-icon" onClick={clicked}>
          <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={state ? "menu active" : "menu"}>
          <li className="nav-item">
            <NavLink className="navlink" to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="navlink" to="/service" onClick={closeMenu}>
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="navlink" to="/about" onClick={closeMenu}>
              AboutUs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="navlink" to="/contact" onClick={closeMenu}>
              ContactUs
            </NavLink>
          </li>
          <div className="mob-btn">
            <li>
              <NavLink
                className="navlink-mob-login"
                to="/contact"
                onClick={closeMenu}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navlink-mob-signup"
                to="/contact"
                onClick={closeMenu}
              >
                Signup
              </NavLink>
            </li>
          </div>
        </ul>
        <NavLink to="/contact">
          <button className="btn login">Login</button>
        </NavLink>
        <NavLink to="/contact">
          <button className="btn signup">Signup</button>
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
