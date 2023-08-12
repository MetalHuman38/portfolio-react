import React from "react";
import "./header.scss";
import people from "../img/people.png";
import brain from "../img/header.jpg";

const Header = () => {
  return (
    <div className="metal__header section__padding" id="home">
      <div className="metal__header-content">
        <h1 className="gradient__text">
          Code to Canvas: Crafting Digital Experiences With Excellence.
        </h1>
        <p>
          With the artistry of translating intricate lines of code into
          captivating digital canvases. The process of merging technical
          expertise with creative finesse, resulting in the creation of
          remarkable digital experiences that resonate with excellence and
          innovation.
        </p>
        <div className="metal__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="metal__header-content__people">
          <img src={people} alt="people" />
          <p>Over 1500 people are onboard and more than 3000 visitor daily</p>
        </div>
      </div>
      <div className="metal__header-image">
        <img src={brain} alt="brain" />
      </div>
    </div>
  );
};

export default Header;
