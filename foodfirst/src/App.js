import React from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import "./App.css";
// import Profile from "./components/profile/Profile";
import List from "./components/list/List";
import TestPage from "./components/list/TestPage";
import LandingPage from "./components/landingpage/LandingPage";

const App = () => {
  return (
    <Router>
      <div className="App"></div>
      <Route path="/landingpage" component={LandingPage} />
      <Route path="/testpage" component={TestPage} />
      <Route path="/list" component={List} />
    </Router>
  );
};

export default withRouter(App);
