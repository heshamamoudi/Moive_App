import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./Nav.css";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchStatement: "",
    };
  }

  render() {
    return (
      <Navbar className="nav fixed-top mb-5" expand="md">
        <Navbar.Brand id="link" href="/Popular">
          Movies-App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link id="link" href="/Supprt">
              Support
            </Nav.Link>
          </Nav>

          <Link to="/Search">
            <Button id="link-1" varient="outline-info">
              Search
            </Button>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
