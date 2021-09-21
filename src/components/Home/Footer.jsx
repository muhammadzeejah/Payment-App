import React from "react";
import "./Home.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <h1>Company</h1>
          <ul>
            <li>Company</li>
            <li>Company</li>
            <li>Company</li>
            <li>Company</li>
          </ul>
        </div>
        <div>
          <h1>Services</h1>
          <ul>
            <li>Services</li>
            <li>Services</li>
            <li>Services</li>
            <li>Services</li>
          </ul>
        </div>
        <div>
          <h1>Support</h1>
          <ul>
            <li>Support</li>
            <li>Support</li>
            <li>Support</li>
            <li>Support</li>
          </ul>
        </div>
        {/* ---------------Footer-Box------------ */}
        <div className="footerBox">
          <div>
            <h1>Explore Us:</h1>
            <p>
              <div class="rounded-social-buttons">
                <a
                  class="social-button facebook"
                  href="https://www.facebook.com/muhammad.zeejah.7"
                  target="_blank"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  class="social-button twitter"
                  href="https://twitter.com/MuhammadZeejah"
                  target="_blank"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  class="social-button linkedin"
                  href="https://www.linkedin.com/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                <a
                  class="social-button youtube"
                  href="https://www.youtube.com/"
                  target="_blank"
                >
                  <i class="fab fa-youtube"></i>
                </a>
                <a
                  class="social-button instagram"
                  href="https://www.instagram.com/muhammad_zeeja/"
                  target="_blank"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </p>
          </div>
          <div>
            <p>
              {" "}
              To Get the Source code of this Project <br /> Click the button
              below:
            </p>
            <button className="footer-btn">
              <a href="#"> Git Repository</a>
            </button>
          </div>
        </div>
      </div>
      <p className="copyright">CopyrightⒸ 2021 ZeeJa. All Right Reserved</p>
    </>
  );
};

export default Footer;
