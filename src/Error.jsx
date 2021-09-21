import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import img from "./error.svg";
import Footer from "./components/Home/Footer";
import Navbar from "./components/Navbar/Navbar";
const Error = () => {
  return (
    <>
      <Navbar />
      <div className="Error">
        <img src={img} alt="Error" />
        <NavLink to="/" className="error-btn">
          Go to Home
        </NavLink>
      </div>
      <Footer />
    </>
  );
};

export default Error;
