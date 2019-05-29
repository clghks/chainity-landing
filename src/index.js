import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";

import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";

var hist = createBrowserHistory();

export const ROUTER_PATH = {
  ROOT: "/",
  LOGIN: "/login-page",
  PROFILE: "/profile-page"
};

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path={ROUTER_PATH.PROFILE} component={ProfilePage} />
      <Route path={ROUTER_PATH.LOGIN} component={LoginPage} />
      <Route path={ROUTER_PATH.ROOT} component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
