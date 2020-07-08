import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./component/NavBar";
import Popular from "./component/Popular";
function App() {
  return (
    <div className="body">
      <Router>
        <NavBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Switch>
          <Route exact path="/Popular" component={Popular} />

          <Route path="/pages"></Route>
          <Route path="/Movie_App" component={Popular}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
