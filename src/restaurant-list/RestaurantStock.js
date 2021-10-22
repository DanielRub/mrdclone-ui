import React, { useEffect, useState } from "react";
import RestaurantItem from "./RestaurantItem";
import "./restaurantStock.css";
import { Link, useLocation } from "react-router-dom";
import burger from "../assets/1.PNG";
import chicken from "../assets/2.PNG";
import pizza from "../assets/3.PNG";
import steak from "../assets/4.PNG";
import seafood from "../assets/5.PNG";
import dessert from "../assets/6.PNG";

const DropDownSearch = () => {
  return (
    <>
      <div className="dropdown-search">
        <h3>Popular food types</h3>
        <div>
          <ul>
            <li>
              <Link to="/restaurants?cuisines=burger">
                <img src={burger} alt=""></img>
                <p>burger</p>
              </Link>
            </li>
            <li>
              <Link to="/restaurants?cuisines=chicken">
                <img src={chicken} alt=""></img>
                <p>Chicken</p>
              </Link>
            </li>
            <li>
              <Link to="/restaurants?cuisines=pizza">
                <img src={pizza} alt=""></img>
                <p>Pizza</p>
              </Link>
            </li>
            <li>
              <Link to="/restaurants?cuisines=steak">
                <img src={steak} alt=""></img>
                <p>Steak</p>
              </Link>
            </li>
            <li>
              <Link to="/restaurants?cuisines=seafood">
                <img src={seafood} alt=""></img>
                <p>Seafood</p>
              </Link>
            </li>
            <li>
              <Link to="/restaurants?cuisines=dessert">
                <img src={dessert} alt=""></img>
                <p>Dessert</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default function RestaurantStock(props) {
  const params = new URLSearchParams(useLocation().search);
  const URL = "https://mrdclone-api.herokuapp.com";
  const pathData = useLocation().pathname.split("/");
  pathData.shift();
  pathData.shift();
  const [state, setState] = useState({
    searchText: "",
    data: null,
    filteredData: null,
    searchBoxIsOpen: false,
    name: params.get("name"),
    pathData : pathData
  });

  useEffect(() => {
    function loadData() {
      fetch(
        `${URL}/restaurants?name=${state.name || ""}&cuisines=${
          state.cuisines || ""
        }&latitude=${state.pathData[0] || ""}&longitude=${state.pathData[1] || ""}`
      )
        .then((res) => res.json())
        .then((data) => {
          setState({ ...state, data: data, filteredData: data });
          //console.log("data=", data);
        })
        .catch((err) => console.log(err));
    }
    loadData();
  }, []);

  useEffect(() => {
    if (state.data) {
      setState({
        ...state,
        filteredData: state.data.filter((item) =>
          item.cuisines.some((r) =>
            params.get("cuisines").split(",").includes(r)
          )
        ),
        searchBoxIsOpen: false,
      });
    }
  }, [params.get("cuisines")]);


  const handleSearch = (event) => {
    const text = event.target.value;
    setState({
      ...state,
      filteredData: state.data.filter((item) =>
        item.name.toLowerCase().includes(text)
      ),
    });
  };

  const openSearchBox = () => {
    setState({ ...state, searchBoxIsOpen: true });
  };
  const closeSearchBox = () => {
    // setState({ ...state, searchBoxIsOpen: false });
  };

  return (
    <div className="main">
      <div className="header">
        <div className="top">
          <div>
            {"< "}
            <Link to="/"> Back To search</Link>{" "}
          </div>
          <div className="address">
            <h4>{state.pathData[2]}</h4>
            <p></p>
            <Link to="/">Change Adresse</Link>{" "}
          </div>
          <div>Menu</div>
        </div>
        <div className="search-box">
          <input
            onChange={handleSearch}
            onFocus={openSearchBox}
            onBlur={closeSearchBox}
            placeholder="Search restaurants, cuisine and preferences"
            type="text"
          />
          {state.searchBoxIsOpen ? <DropDownSearch /> : <></>}
        </div>
      </div>
      <div className="containt">
        <h2 id="list-title">
          {state.filteredData ? state.filteredData.length : 0} Restaurants
        </h2>

        {state.filteredData ? (
          <ul>
            {state.filteredData.map((restaurant) => (
              <li key={restaurant.name}>
                <RestaurantItem restaurant={restaurant} />
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
