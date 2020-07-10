import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./component/NavBar";
import Popular from "./component/Popular";
import Search from "./component/Search";
class App extends Component {
  render() {
    return (
      <div className="body">
        <Router>
          <NavBar style={{ position: "fixed" }} />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

          <Switch>
            <Route exact path="/Popular" component={Popular} />
            <Route path="/pages"></Route>
            <Route path="/Movie_App" component={Popular}></Route>
            <Route path="/Search" component={Search}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
