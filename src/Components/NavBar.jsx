import React, { Component } from "react";
import "../Components/Styles/NavBar.css";

class NavBar extends Component {
  state = { clicked: true };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
    return (
      <div id="navBar">
        <div className="logo"></div>
        <div className={`option ${this.state.clicked ? "active" : ""}`}>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
              this.handleClick(); // Toggle the clicked state
            }}
            role="button"
            tabIndex={0}
          >
            Home
          </a>
          <a
            href="#program"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("program");
              this.handleClick(); // Toggle the clicked state
            }}
            role="button"
            tabIndex={0}
          >
            Program
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
              this.handleClick(); // Toggle the clicked state
            }}
            role="button"
            tabIndex={0}
          >
            About
          </a>{" "}
          <a
            href="#service"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("service");
              this.handleClick(); // Toggle the clicked state
            }}
            role="button"
            tabIndex={0}
          >
            Service
          </a>         
          <a
            href="#community"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("community");
              this.handleClick(); // Toggle the clicked state
            }}
            role="button"
            tabIndex={0}
          >
            Community
          </a>           {/* <div className="profile">
            <i class="fas fa-user"></i>
          </div> */}
          <button className="joinnow">Join Now</button>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fa fa-bars" : "fa fa-times"}
            ></i>
          </div>{" "}
        </div>
      </div>
    );
  }
}

export default NavBar;
