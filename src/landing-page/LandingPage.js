import React, { Component } from "react";
import "./style.css";
import logo from "../assets/mr-d.svg";

export class LandingPage extends Component {
  render() {
    return (
      <div className="main">
        <div className="nav-bar">
          <img src={logo} alt="img"></img>
        </div>
        <div className="section-lunch">
          <div className="section-lunch-left">
            <div className="lunch-text">
              <h2>working late ?</h2>
              <h3>Get the joy of food, delivered.</h3>
            </div>
            <div className="search-box">
              <input placeholder="Enter your street address" />
              <button>Find restaurants</button>
              
            </div>
          </div>
          <div className="section-lunch-right">right</div>
        </div>
        <div className="section-more-choice">
          <div className="choice-text">
            <h3>More choice. Less hassle. 8000 restaurants delivered.</h3>
            <p>More choice. Less hassle. 8000 restaurants delivered.</p>
          </div>
          <div className="section-more-choice-left"></div>
          <div className="section-more-choice-right">right</div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
