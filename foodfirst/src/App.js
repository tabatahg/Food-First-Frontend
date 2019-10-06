import React from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import "./App.css";
// import Profile from "./components/profile/Profile";
import List from "./components/list/List";
import TestPage from "./components/list/TestPage";
import LogIn from "./components/login/LogIn";
import LandingPage from "./components/landingpage/LandingPage";
import Profile from "./components/profile/Profile";

const App = () => {
  return (
    <Router>
      <div className="App"></div>
      <Route exact={true} path="/" component={LandingPage} />
      <Route path="/login" component={LogIn} />
      <Route path="/testpage" component={TestPage} />
      <Route path="/list" component={List} />
      <Route path="/profile" component={Profile} />
    </Router>
  );
};

export default withRouter(App);
