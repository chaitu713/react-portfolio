import React from "react";
import "./Footer.css";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiTwitterLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      {/* <a href="#" className="footer__logo">
        CHAITANYA
      </a> */}
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.facebook.com/chaytuuuuu/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <RiFacebookCircleLine />
        </a>
        <a
          href="https://www.instagram.com/chaytuuuuu/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <RiInstagramLine />
        </a>
        <a
          href="https://twitter.com/i_am_krishchai"
          rel="noreferrer noopener"
          target="_blank"
        >
          <RiTwitterLine />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; 2022 CHAITU's Portfolio. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
