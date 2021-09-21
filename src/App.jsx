import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../src/Home";
import About from "../src/Aboutus";
import Service from "../src/OurServices";
import Contact from "../src/Contactus";
import Error from "./Error";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/service" component={Service}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
}

export default App;
