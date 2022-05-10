import React from "react";
import "../../index.css";
import "./Header.css";
import CTA from "./CTA";
import MEE from "../../assets/mee.png";
import HeaderSocials from "./HeaderSocials";
import { BsArrowDownCircle } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Chaitanya</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={MEE} alt="My Img" />
        </div>

        <a title="Scroll Down" href="#contact" className="scroll__down">
          <BsArrowDownCircle />
        </a>
      </div>
    </header>
  );
};

export default Header;
