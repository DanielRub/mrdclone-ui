import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./landing-page/LandingPage";
import RestaurantSock from "./restaurant-list/RestaurantStock";

function App() {

  return (
    <>
      <Switch>
        <Route path="/restaurants">
          <RestaurantSock />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
