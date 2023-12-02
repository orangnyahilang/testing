// ScrollButton.js
import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./ScrollButton.css";

const ScrollButton = () => {
  return (
    <>
    <Link
      to="about"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="scroll-button"
    >
      <FontAwesomeIcon icon={faChevronDown} />
    </Link>
        <Link
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="scroll-button2"
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </Link>
      </>
  );
};

export default ScrollButton;
