import React from "react";
import Header from "./Header";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import "./Home.css";
import Footer from "./Footer";
import Navbar from "../Navbar/Navbar";
const HomeComponent = () => {
  return (
    <>
      <Navbar></Navbar>
      <Header />
      <About />
      <Service />
      <Contact />
      <Footer />
    </>
  );
};

export default HomeComponent;
