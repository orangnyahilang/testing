import { Component } from "react";
import CTA from "./CTA";
import ME from "../../assets/lp3.png";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
import ScrollButton from "./ScrollButton";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>iNext Dev</h1>
          <div className="text-light">Fullstack Developer</div>
          <CTA />
          <div className="me">
            <img src={ME} className="bglp" alt="ME" />
            <h3 className="txtlp">Scroll untuk melihat Portfolio Saya</h3>
            <ScrollButton />
          </div>
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
          <HeaderSocials />
        </div>
      </header>
    );
  }
}

export default Header;
