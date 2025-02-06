import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../Styles/Navbar.css";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  const navRef = useRef();
  const [navColor, setNavColor] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const changeBG = () => {
    if (window.scrollY >= 10) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  window.addEventListener("scroll", changeBG);

  return (
    <header className={navColor ? "active" : ""}>
      <nav ref={navRef}>
        <Link className="Link" smooth to="/#">
          Home
        </Link>
        <Link className="Link" smooth to="#AboutUs">
          About Us
        </Link>
        <Link className="Link" smooth to="#Our-Services">
          Services
        </Link>
        <Link className="Link" smooth to="#Portfolio">
          Portfolio
        </Link>
        <Link className="Link" smooth to="#Pricing">
          Pricing
        </Link>
        <Link className="Link" smooth to="#ContactUs">
          Contact Us
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
