import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./component/NavBar";
import Popular from "./component/Popular";
import Search from "./component/Search";
import Footer from "./component/Footer";
class App extends Component {
  render() {
    return (
      <div className="body">
        <Router>
          <NavBar />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

          <Switch>
            <Route exact path="/" component={Popular} />
            <Route path="/Popular" component={Popular} />
            <Route path="/Movie_App" component={Popular}></Route>
            <Route path="/Search" component={Search}></Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
