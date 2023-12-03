import React, { Component } from "react";
import AnimatedComponent from "./AnimatedComponent";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Support from "./components/support/Support.jsx";

class Application extends Component {
  render() {
    return (
      <>
          <Header />
          {/* <Nav/>         */}
          <About />
          <Experience />
          <Services />
          <Portfolio />
          <Support />
          <Testimonials />
          <Contact />
          <Footer />
      </>
    );
  }
}

export default Application;
