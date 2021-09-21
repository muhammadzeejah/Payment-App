import React from "react";
import image from "./images/header-img.svg";
import "./Home.css";
const Header = () => {
  return (
    <>
      <div className="container">
        <div className="container-left">
          <h1>
            Online Payment Made <br />
            Easy For You.
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            sit architecto culpa, necessitatibus obcaecati officia soluta, ea,
            repudiandae commodi eius earum eos voluptates. Ex dolores commodi
            numquam reprehenderit vitae neque.
          </p>
          <p>Get Early Access For You</p>
          <div className="input">
            <a href="#" className="head-btn">
              Learn more
              <i className="fa fa-chevron-circle-right hvr-icon"></i>
            </a>
          </div>
        </div>
        <div className="container-right">
          <img src={image} className="animated" alt="Online pament" />
        </div>
      </div>
    </>
  );
};

export default Header;
