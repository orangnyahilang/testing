import React, { Component } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import "./nav.css";

class Nav extends Component {
  constructor() {
    super();
    this.state = { active: "#" };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll("section"); // Sesuaikan dengan struktur HTML Anda

    let currentSectionId = "#";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100; // Sesuaikan dengan tinggi header atau titik lain yang sesuai
      const sectionBottom = sectionTop + section.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentSectionId = `#${section.id}`;
      }
    });

    this.setState({ active: currentSectionId });
  };

  render() {
    const { showNav } = this.props;

    return (
      <nav className={showNav ? "show" : "hide"}>
        <a
          onClick={() => this.setState({ active: "#header" })}
          className={this.state.active === "#" ? "active" : ""}
          href="#"
        >
          <AiOutlineHome />
        </a>
        <a
          onClick={() => this.setState({ active: "#about" })}
          className={this.state.active === "#about" ? "active" : ""}
          href="#about"
        >
          <AiOutlineUser />
        </a>
        <a
          onClick={() => this.setState({ active: "#experience" })}
          className={this.state.active === "#experience" ? "active" : ""}
          href="#experience"
        >
          <BiBook />
        </a>
        <a
          onClick={() => this.setState({ active: "#services" })}
          className={this.state.active === "#services" ? "active" : ""}
          href="#services"
        >
          <RiServiceLine />
        </a>
        <a
          onClick={() => this.setState({ active: "#contact" })}
          className={this.state.active === "#contact" ? "active" : ""}
          href="#contact"
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
    );
  }
}

export default Nav;
