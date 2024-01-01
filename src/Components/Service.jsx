import React, { Component } from "react";
import "../Components/Styles/Service.css";

class Service extends Component {
  render() {
    return (
      <div id="service">
        <div className="service-container">
          <h1>Services</h1>{" "}
          <div className="service-plan">
            <div className="plan1">
              <h2>basic plan</h2>
              <div className="price1 price">RS:150</div>
              <div className="available1">
                <div className=" available">
                  <i className="fas fa-check"></i>
                  <p>Smart Workout Plan</p>
                </div>
                <div className=" available">
                  <i className="fas fa-check"></i>
                  <p>At Home Workouts</p>
                </div>
              </div>
            </div>

            <div className="plan2">
              <h2>Weekly plan</h2>
              <div className="price2 price">RS:900</div>
              <div className="available1">
                <div className=" available">
                  <i className="fas fa-check"></i>
                  <p>PRO Gyms</p>
                </div>
                <div className=" available">
                  <i className="fas fa-check"></i>
                  <p>Smart Workout Plan</p>
                </div>
                <div className=" available">
                  <i className="fas fa-check"></i>
                  <p>At Home Workouts</p>
                </div>
              </div>
            </div>
            <div className="plan3">
              <h2>Monthly plan</h2>
              <div className="price2 price">RS:2500</div>
              <div className="available1">
                <div className=" available">
                  <i className="fas fa-check"></i>
                  <p>Elite Gyms and Classes</p>
                </div>
                <div className=" available">
                  <i className="fas fa-check"></i>
                  <p>PRO Gyms</p>
                </div>
                <div className=" available">
                  <i className="fas fa-check"></i>
                  <p>Smart Workout Plan</p>
                </div>
                <div className=" available">
                  <i className="fas fa-check"></i>
                  <p>At Home Workouts</p>
                </div>
              </div>
            </div>
            <div className="plan4">
              <h2>Quartely plan</h2>
              <div className="price2 price">RS:6000</div>
              <div className="available1">
                <div className=" available">
                  <i className="fas fa-check"></i>
                  <p>Personal Training</p>
                </div>
                <div className=" available">
                  <i className="fas fa-check"></i>
                  <p>Elite Gyms and Classes</p>
                </div>
                <div className=" available">
                  <i className="fas fa-check"></i>
                  <p>PRO Gyms</p>
                </div>
                <div className=" available">
                  <i className="fas fa-check"></i>
                  <p>Smart Workout Plan</p>
                </div>
                <div className=" available">
                  <i className="fas fa-check"></i>
                  <p>At Home Workouts</p>
                </div>
              </div>
            </div>
          </div>
          <div className="services-class">
            <h1>Classes</h1>
            <h2>We Are Offering Best Flexible Classes</h2>
            <div className="classes">
              <div className="gym">GYM</div>
              <div className="zumba">Zumba</div>
              <div className="aerobic">Aerobic</div>

              <div className="cardio">Cardio</div>
              <div className="meditation">Meditation</div>
              <div className="kickboxing">Kick Boxing</div>
              <div className="swimming">Swimming </div>
            </div>
            <div></div>
          </div>
          <div className="service-testomonals">
            <h1>Testomonals</h1>
            <div className="test-mono">
              <div>
                {" "}
                <img
                  src="https://i.pinimg.com/236x/8d/96/b5/8d96b5af2947996f2b30dd806df3123b.jpg"
                  alt=""
                ></img>
              </div>
              <div className="review">
                <div className="review-head"></div>
                <div className="review-body">
                  <img
                    src="https://krmangalamvikaspuri.com/wp-content/uploads/2022/11/Quote.png"
                    alt=""
                  ></img>
                  <p>
                    “I've been a member of Gymate for the past 6 months and it
                    has been an amazing experience. The trainers are
                    knowledgeable and supportive, the equipment is top-notch,
                    and the community of members is friendly and encouraging.”
                  </p>
                  <h2>Harry Potter</h2>
                  <h3>CEO of Hogwarts</h3>
                </div>
              </div>
            </div>
            <div className="test-mono test2">
              <div className="review review2">
                <div className="review-head "></div>
                <div className="review-body review-body2">
                  <img
                    src="https://krmangalamvikaspuri.com/wp-content/uploads/2022/11/Quote.png"
                    alt=""
                  ></img>
                  <p>
                    “I've been a member of Gymate for the past 6 months and it
                    has been an amazing experience. The trainers are
                    knowledgeable and supportive, the equipment is top-notch,
                    and the community of members is friendly and encouraging.”
                  </p>
                  <h2>Adresss Garte</h2>
                  <h3>CEO of Brund</h3>
                </div>
              </div>
              <div>
                <img
                  src="https://www.personalisedandprinted.com/wp-content/uploads/2020/07/gymgear.jpg"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Service;
