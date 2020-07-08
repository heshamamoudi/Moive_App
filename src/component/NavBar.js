import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      searchStatement: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ searchStatement: event.target.value });
  }

  handleSubmit() {
    console.log(this.state.searchStatement);
  }

  render() {
    return (
      <Navbar className="nav" expand="lg">
        <Navbar.Brand id="link" href="/Popular">
          Movies-App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link id="link" href="/Tv-Shows">
              TV-Shows
            </Nav.Link>
            <Nav.Link id="link" href="/Supprt">
              Support
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              id="feedback"
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={this.handleChange}
            />
            <Button
              id="link"
              variant="outline-info"
              onClick={this.handleSubmit}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
