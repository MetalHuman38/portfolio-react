import "./css/App.css";
import "./sass/App.scss";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatMetalBrain,
} from "./containers";
import { Brand, Cta, Navbar } from "./components";
import React from "react";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatMetalBrain />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
