import React, { useState } from "react";
import { usePlacesWidget } from "react-google-autocomplete";
import { Link, useHistory } from "react-router-dom";
import logo from "../assets/mr-d.svg";
import "./style.css";

function SearchResult() {
  return (
    <>
      <div className="search-result">
        <Link
          to="/restaurants?street=Pretoria, South Africa"
          className="search-result-item"
        >
          <span className="start">Pretoria, South Africa</span>
          <br />
          <span className="end">Justice Mahomed Street, Brooklyn</span>
        </Link>
        <Link
          to="/restaurants?street=Pretoria, South Africa"
          className="search-result-item"
        >
          <span className="start">Pretoria, South Africa</span>
          <br />
          <span className="end">Justice Mahomed Street, Brooklyn</span>
        </Link>
        <Link
          to="/restaurants?street=Pretoria, South Africa"
          className="search-result-item"
        >
          <span className="start">Pretoria, South Africa</span>
          <br />
          <span className="end">Justice Mahomed Street, Brooklyn</span>
        </Link>
      </div>
    </>
  );
}

export default function LandingPage(props) {
  let history = useHistory();
  const { ref } = usePlacesWidget({
    apiKey: "AIzaSyCs2UIPeA_ygj6aDL45ta9ZdJu3Mo1PIOs",
    options: { types: ["address"] },
    onPlaceSelected: (place) => {
      //console.log(place);
      history.push(`/restaurants/${place.geometry.location.lat()}/${place.geometry.location.lng()}/${place.formatted_address}`);
    },
  });
  console.log(ref.current);
  const [state, setstate] = useState({ searchBoxOpened: false });
  const closeSeachBox = (event) => {
    if (event.target.id !== "search-box") {
      //setstate({ ...state, searchBoxOpened: false });
    }
  };
  const openSearchBox = (event) => {
    //setstate({ ...state, searchBoxOpened: true })
  };
  return (
    <div className="main">
      <div className="nav-bar">
        <img id="logo" src={logo} alt="img"></img>
        <ul className="menu-list">
          <li>
            <a href="/">Sign up your restaurant</a>
          </li>
          <li>
            <a href="/">Become a driver</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li id="sign-up">
            <a href="/">Sign up</a>
          </li>
        </ul>
      </div>
      <div className="section-lunch">
        <div className="section-lunch-left">
          <div className="lunch-text">
            <h2>working late ?</h2>
            <h3>Get the joy of food, delivered.</h3>
          </div>
          <div className="lp-search-box">
            <input
              ref={ref}
              id="search-box"
              onBlur={closeSeachBox}
              onFocus={openSearchBox}
              placeholder="Enter your street address"
            />
            <button>Find restaurants</button>
            {state.searchBoxOpened ? <SearchResult /> : <></>}
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
