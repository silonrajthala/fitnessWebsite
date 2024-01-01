import React, { Component } from "react";
import "../Components/Styles/About.css";

class About extends Component {
  render() {
    return (
      <div id="about">
        <div className="about-container">
          <div className="about-container1">
            <div className="container1-text">
              <h1>Who we are</h1>

              <h2>Take Your Health And Body To Next Level</h2>
              <p>
                Take your health and body to the next level with our
                comprehensive program designed to help you reach your fitness
                goals.
              </p>
              <div className="type">
                <div className="type1 Border">
                  <img src="/assets/images/PT.png" alt=""></img>
                  <div className="type1-t typetext">
                    <h3> Profrssional Trainers</h3>
                  </div>{" "}
                </div>
                <div className="type2 Border">
                  <img src="/assets/images/ME.png" alt=""></img>
                  <div className="type2-t typetext">
                    <h3>Modern Equipment</h3>
                  </div>{" "}
                </div>
                <div className="type3 Border">
                  <img src="/assets/images/FE.png" alt=""></img>
                  <div className="type3-t typetext">
                    <h3> Fancy Gym Machines</h3>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div className="container1-img"></div>
          </div>

          <div className="container2">
            <div className="container2-img "></div>
            <div className="container2-txt">
              <h1>Why choose us</h1>
              <h2>We Can Give A Shape Of Your Body Here!</h2>
              <p>
                At Gym, we are dedicated to helping you achieve the body of your
                dreams. Our expert trainers and nutritionists will work with you
                to create a personalized fitness and nutrition plan that helps
                you reach your specific goals.
              </p>
              <div className="type">
                <div className="type1 Border">
                  <img src="/assets/images/FFT.png" alt=""></img>
                  <div className="type1-t typetext">
                    <h3> Free Fitness Training</h3>
                  </div>{" "}
                </div>
                <div className="type2 Border">
                  <img src="/assets/images/ME.png" alt=""></img>
                  <div className="type2-t typetext">
                    <h3> Modern Gym Equipment</h3>
                  </div>{" "}
                </div>
                <div className="type3 Border">
                  <img src="https://cdn-icons-png.flaticon.com/512/10703/10703205.png" alt=""></img>
                  <div className="type3-t typetext">
                    <h3>Gym Bag Equipment</h3>
                  </div>{" "}
                </div>
                <div className="type4 Border">
                  <img src="/assets/images/WB.png" alt=""></img>
                  <div className="type3-t typetext">
                    <h3> Fresh Bottle Water</h3>
                  </div>{" "}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container3">
          <h1>Gym Trainers</h1>
          <h2>Team of Expert</h2>
          <p>
            Expert team of coaches helps you succeed in any goal,
            <br />
            personalized guidance and motivation provided!
          </p>
          <div className="coach">
            <div className="coach1 Border">
              <img src="/assets/images/Gunner.png" alt=""></img>
              <h3>Gunnar Peterson</h3>
              <p>Gym Trainer</p>
            </div>
            <div className="coach2 Border">
              <img src="/assets/images/Kayla.png" alt=""></img>
              <h3>Kayla Itsines</h3>
              <p>Yoga Trainer</p>
            </div>
            <div className="coach3 Border">
              <img src="/assets/images/Harley.png" alt=""></img>
              <h3>Harley Pasternak</h3>
              <p>Crossfit Trainer</p>
            </div>
            <div className="coach4 Border">
              <img src="/assets/images/Joe.png" alt=""></img>
              <h3>Joe Wicks</h3>
              <p>Fitness Trainer</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
