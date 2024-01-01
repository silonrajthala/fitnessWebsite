import React, { Component } from "react";

import "../Components/Styles/Home.css";
import AnimatedText from "./HeroText/HeadingText";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className="hero">
          <div className="hero-text">
            <h2>Feel The Real Test Of Fitness</h2>
            <AnimatedText />
            <p>
            Unlease your potential and embark on a journey towards a stronger,
              fitter, amd more confident you. Sign up for, 'Feel the Real test
              of fitness' now and witness the incredible transformation your
              body is capable of!
            </p>
            <button className="contact">Sign In</button>
          </div>
          <div className="hero-img">
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
