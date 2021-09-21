import React from "react";
import image1 from "./images/icon-suvs.svg";
import image2 from "./images/icon-sedans.svg";
import image3 from "./images/icon-luxury.svg";
import "./Home.css";
const Service = () => {
  return (
    <>
      {" "}
      <h1 className="containerhead">Our Services</h1>
      <div className="Service-container">
        <div className="service sedans">
          <img src={image1} alt="service"></img>
          <h1>SEDANS</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicin facilis eveniet
            aliquam reprehenderit illum hic consequuntur culpa. Sapiente quo
            voluptates atque adipisci deserunt?
          </p>
          {/* <button className="service-signup-btn">Learn More</button> */}
          <div className="input">
            <a href="#" className="head-btn">
              Learn more
              <i className="fa fa-chevron-circle-right hvr-icon"></i>
            </a>
          </div>
        </div>
        <div className="service suv">
          <img src={image2} alt="service"></img>
          <h1>SUVS</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicin facilis eveniet
            aliquam reprehenderit illum hic consequuntur culpa. Sapiente quo
            voluptates atque adipisci deserunt?
          </p>
          {/* <button className="service-signup-btn">Learn More</button> */}
          <div className="input">
            <a href="#" className="head-btn">
              Learn more
              <i className="fa fa-chevron-circle-right hvr-icon"></i>
            </a>
          </div>
        </div>
        <div className="service luxury">
          <img src={image3} alt="service"></img>
          <h1>LUXURY</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicin facilis eveniet
            aliquam reprehenderit illum hic consequuntur culpa. Sapiente quo
            voluptates atque adipisci deserunt?
          </p>
          {/* <button className="service-signup-btn">Learn More</button> */}
          <div className="input">
            <a href="#" className="head-btn">
              Learn more
              <i className="fa fa-chevron-circle-right hvr-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
