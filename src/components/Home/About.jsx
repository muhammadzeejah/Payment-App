import React, { useState } from "react";
import img from "./img.jpg";
import api from "./api.js";
import "./Home.css";
const About = () => {
  const [data, setdata] = useState(api);
  return (
    <>
      {/* -----------How it works------------- */}
      <div className="workContainer">
        <h1 className="containerhead">How does it works</h1>
        <div className="card">
          {data.map((element) => {
            const { id, logo, title, info } = element;
            return (
              <>
                <div className={`b${id}`}>
                  <i className={`icons ${logo}`}></i>
                  <h2>{title}</h2>
                  <p>{info}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {/* -----------------How to use----------------- */}
      <div className="use-container">
        <div className="useContainer-left">
          <img src={img} alt="payment image" />
        </div>
        <div className="useContainer-right">
          <p className="sub-title">
            --AVAIABLE @ GOOGLE AND IOS APP STORE ONLY
          </p>
          <h1>How to Use The App?</h1>
          <ol>
            <li>
              <h2>Sign in</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium dignissimos hic itaque doloremque atque mollitia
                quas expedita reiciendis magnam consequatur?
              </p>
            </li>
            <li>
              <h2>Add your bank account</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium dignissimos hic itaque doloremque atque mollitia
                quas expedita reiciendis magnam consequatur?
              </p>
            </li>
            <li>
              <h2>Send payment request</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium dignissimos hic itaque doloremque atque mollitia
                quas expedita reiciendis magnam consequatur?
              </p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default About;
