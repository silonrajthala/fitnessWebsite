import React, { Component } from "react";
import "../Components/Styles/Program.css";

class Program extends Component {
  render() {
    return (
      <div id="program">
        <h1>Explore Our Program</h1>
        <div className="program-item">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/9762/9762199.png"
              alt=""
            ></img>
            <h3>Strength</h3>
            <p>
              Embrace the essence of strength as we delve into its various
              dimensions physical, mental and emotional.
            </p>
            <h4>Join Now ➜</h4>
          </div>
          <div>
            <img
              src="https://cdn1.iconfinder.com/data/icons/smashicons-fitness-yellow/60/26_-Love_Gym-_Yellow-512.png"
              alt=""
            ></img>
            <h3>Physical Fitness</h3>
            <p>
              It encompasses a range of activites that improve health, strength,
              fexibility, and overall well-being.
            </p>
            <h4>Join Now ➜</h4>
          </div>
          <div>
            <img src="/assets/images/Fat.png" alt=""></img>
            <h3>Fat loss</h3>
            <p>
              Through a combination of workout routine and expert guidance,
              we'll empower you to reach your goals.
            </p>
            <h4>Join Now ➜</h4>
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5940/5940031.png"
              alt=""
            ></img>
            <h3>Weight Gain</h3>
            <p>
              Designed for individuals, our program offers an effective approach
              to gaining weight in a sustainable manner.
            </p>
            <h4>Join Now ➜</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Program;
