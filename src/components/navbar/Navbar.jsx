import React, { useState } from "react";
// import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.scss";

// const UnderlinedLink = ({ href, children }) => (
//   <p>
//     <a href={href} className="underlined-link">
//       {children}
//     </a>
//   </p>
// );

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#whatMetalBrain">What is MetalBrain?</a>
    </p>
    <p>
      <a href="#feature">Software Craftsmanship</a>
    </p>
    <p>
      <a href="#possibility">Projects</a>
    </p>
    <p>
      <a href="#home">Blog</a>
    </p>
  </>
);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="metal">
      <div className="metal__navbar-links">
        <div className="metal__navbar-links_logo">
          <a href="#About-me" className="metal__navbar-anchor">
            MetalBrain
          </a>
        </div>
        <div className="metal__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="metal__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="metal__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="metal__navbar-menu_container scale-up-center">
            <div className="metal__navbar-menu_container-links">
              <Menu />
              <div className="metal__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
