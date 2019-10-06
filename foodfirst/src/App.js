import React from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import "./App.css";
import OrganizationsList from "./components/list/OrganizationsList";
import LogIn from "./components/login/LogIn";
// import Profile from "./components/profile/Profile";
import TestPage from "./components/list/TestPage";

import { organizations } from "./data/organization";

const App = () => {
  return (
    <Router>
      <div className="App"></div>
      <Route path="/login" component={LogIn} />
      {/* <Route path="/profile" component={Profile} />
      <Route path="/list" component={List} /> */}
      <Route path="/testpage" component={TestPage} />
      <OrganizationsList organizations={organizations} />
    </Router>
  );
};

export default withRouter(App);
