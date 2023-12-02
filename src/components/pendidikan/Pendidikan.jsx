import { Component } from "react";
import "./pendidikan.css";

const customCSSland5 =  `
.custombody2 {
  align-items: center;
  background: transparent;
  display: flex;
  height: fit-content;
  justify-content: center;
}

@-webkit-keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}
.slider-custom2 {
  background: #ffffff05;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100vw;
  margin-top: 20px;
}
.slider-custom2::before, .slider-custom2::after {
  background: linear-gradient(to right, var(--color-bg-variant) 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}
.slider-custom2::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider-custom2::before {
  left: 0;
  top: 0;
}
.slider-custom2 .slide-track {
  -webkit-animation: scroll 40s linear infinite;
          animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 14);
}
.slider-custom2 .slide {
  height: 100px; 
  width: 100%; 
  transform: scale(1.2); 
}
.slider-custom2 .slide img {
  transform: scale(0.5); 
  width: auto;
  object-fit: cover;
}

`;

class Pendidikan extends Component {
  render() {
    return (
      <section id="testimonials">
        <section className="testimonialpendidikan">
        <h5>I coded and got references from</h5>
        <div className='custombody2'>
              <div className="slider-custom2">
                <style>{customCSSland5}</style>
                <div className="slide-track">
                  <div className="slide">
                    <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" height="100" width="250" alt="" />
                  </div>
                  <div className="slide">
                    <img src="https://assets.stickpng.com/images/62c71bdbb44be1961554a6e6.png" height="100" width="250" alt="" />
                  </div>
                  <div className="slide">
                    <img src="https://icons.veryicon.com/png/o/miscellaneous/eva-fill/behance-71.png" height="100" width="250" alt="" />
                  </div>
                  <div className="slide">
                    <img src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png" height="100" width="250" alt="" />
                  </div>
                  <div className="slide">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/2175px-W3Schools_logo.svg.png" height="100" width="250" alt="" />
                  </div>
                  <div className="slide">
                    <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" height="100" width="250" alt="" />
                  </div>
                  <div className="slide">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Dribbble_logo.png" height="100" width="250" alt="" />
                  </div>
                  <div className="slide">
                    <img src="https://download.logo.wine/logo/Behance/Behance-Logo.wine.png" height="100" width="250" alt="" />
                  </div>
                  <div className="slide">
                    <img src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png" height="100" width="250" alt="" />
                  </div>
                  <div className="slide">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/2175px-W3Schools_logo.svg.png" height="100" width="250" alt="" />
                  </div>
                  <div className="slide">
                    <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" height="100" width="250" alt="" />
                  </div>
                  <div className="slide">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Dribbble_logo.png" height="100" width="250" alt="" />
                  </div>
                  <div className="slide">
                    <img src="https://download.logo.wine/logo/Behance/Behance-Logo.wine.png" height="100" width="250" alt="" />
                  </div>
                  <div className="slide">
                    <img src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png" height="100" width="250" alt="" />
                  </div>
                </div>
              </div>
              </div>
        </section>
      </section>
    );
  }
}

export default Pendidikan;
