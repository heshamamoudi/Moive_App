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
    
  }
  handleChange = async function (event) {
    await this.setState({ searchStatement: event.target.value });
  };

  

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
          <Form inline action='/Search'>
            <FormControl
              id="feedback"
              type="Search"
              placeholder="Search"
              className="mr-sm-2"
              onChange={this.handleChange}
            />
            <Nav.Link  
               href='/Search' component={Search.setState={SearchState:this.state.searchStatement}}>
              <Button id="link-1" varient="outline-info">Search</Button>
            
            </Nav.Link>
            
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
