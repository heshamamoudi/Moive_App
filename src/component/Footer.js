import React, { Component } from "react";
import "./Footer.css";
class footer extends Component {
  render() {
    return (
      <footer className="body">
        <div className="scroll">
          <h1 onClick={window.scrollTo(0, 0)}>Scroll-up ↟ </h1>
        </div>
      </footer>
    );
  }
}
export default footer;
