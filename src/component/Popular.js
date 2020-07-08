import React, { Component } from "react";

class Popular extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      isLoaded: false,
    };
  }
  //   this method is made to fetch and get the api components also the promises where (.then ) starts
  componentDidMount() {
    let url =
      "https://api.themoviedb.org/3/movie/550?api_key=aa63da3e1c35587ca73079e2c2d90101";
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "Application/json",
        "Content-Type": "Application/json",
      },
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        this.setState();
      });
    });
  }

  render() {
    return (
      <div className="body">
        <h1>HELLOO this is pPage</h1>
        <div className="container">
          <div className="row">
            <div className="col-sm">One of three columns</div>
            <div className="col-sm">One of three columns</div>
            <div className="col-sm">One of three columns</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popular;
