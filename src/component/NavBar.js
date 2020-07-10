import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "./Nav.css";
import Search from "./Search";
class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      searchStatement: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = async function (event) {
    await this.setState({ searchStatement: event.target.value });
  };

  handleSubmit() {
    let searchStatement = this.state.searchStatement;
    return <Search Statement={searchStatement} />;
  }

  render() {
    return (
      <Navbar className="nav" expand="md">
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
              type="Search"
              placeholder="Search"
              className="mr-sm-2"
              onChange={this.handleChange}
            />
            <Button
              id="link-1"
              variant="outline-info"
              //there is an error and need to be fixed!
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
