import React, { Component } from "react";
import "../Components/Styles/Community.css";

class Community extends Component {
  render() {
    return (
      <div id="community">
        <h1>Community</h1>
        <div className="community-container">
          <div className="community-logo">
            <img src="./assets/images/logo.png" alt=""></img>
            <p>
              
              Take the first step towards a healther, stronger you with our
              unbeatable plans. Lets sweat, achieve and conquer together!
            </p>
            <div>
              
              <i class="fab fa-facebook"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-twitter"></i>
            </div>
          </div>
          <div className="company">
            
            <h2>Company</h2>

            <p>Business</p>
            <p>Franchies</p>
            <p>Partnership</p>
            <p>Network</p>
          </div>
          <div className="aboutus">
            <h2>About Us</h2>
            <p>Blogs</p>
            <p>Security</p>
            <p>Careers</p>
          </div>
          <div className="community-contact ">
            <h2>Contact</h2>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>BMI Calculator</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Community;
