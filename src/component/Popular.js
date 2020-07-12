import React, { Component } from "react";
import MoviesList from "./MoviesList";
import "./Popular.css";
class Popular extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      Pages: 1,
      maxPages: 0,
      SearchState: "",  
      guest:[],
      token:'',
    }; 
    this.username="heshamamoudi";
    this.password="hesham123";
    this.api = "aa63da3e1c35587ca73079e2c2d90101";
    this.getPopularMovies = this.getPopularMovies.bind(this);
    this.load_More_Movies = this.load_More_Movies.bind(this);
    //  this.StartSession = this.StartSession.bind(this);
     this.getToken = this.getToken.bind(this);
  }
  getSessionInfo() {
    return `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${this.api}`;
  }
  getUrl() {
    return `https://api.themoviedb.org/3/movie/popular?api_key=${this.api}&language=en-US&page=${this.state.Pages}`;
  }
  getTokenUrl() {
    return `https://api.themoviedb.org/3/authentication/token/new?api_key=${this.api}`;
  }

  componentDidMount() {
    this.getPopularMovies();
    // this.StartSession();
    
  }
  getToken = async function () {
    await fetch(this.getTokenUrl(), {
      method: "GET",
      headers: {
        Accept: "Application/json",
        "Content-Type": "Application/json",
      },
      
    }).then((result) => {
      result.json().then((response) => {
        console.log(response.success+response.request_token);
        this.setState({
          token:response.request_token
        });
      });
    });
  };
  //   this method is made to fetch and get the api components also the promises where (.then ) starts
  // StartSession = async function () {
  //   let tt=this.getToken();
  //   await fetch(this.getSessionInfo() , {
  //     method: "POST",
  //     headers: {
  //       Accept: "Application/json",
  //       "Content-Type": "Application/json",
  //     },
      
      
  //   }).then((result) => {
  //     result.json().then((response) => {
  //       console.log(response);
  //       // this.setState({
  //       //   // guest: [...response.results],
  //       //   // maxPages: response.total_pages,
  //       // });
  //     });
  //   });
  // };
  getPopularMovies = async function () {
    await fetch(this.getUrl(), {
      method: "GET",
      headers: {
        Accept: "Application/json",
        "Content-Type": "Application/json",
      },
    }).then((result) => {
      result.json().then((response) => {
        this.setState({
          movies: [...response.results],
          maxPages: response.total_pages,
        });
      });
    });
  };

  load_More_Movies = async function () {
    await this.setState({ Pages: this.state.Pages + 1 });

    await fetch(this.getUrl(), {
      method: "GET",
      headers: {
        Accept: "Application/json",
        "Content-Type": "Application/json",
      },
    }).then((result) => {
      result.json().then((response) => {
        console.log(
          "----------------------------------------------------------"
        );
        console.log(...response.results);
        var temp = this.state.movies;
        response.results.forEach((movie) => {
          temp.push(movie);
        });
      });
    });
  };

  render() {
    return (
      <div className="bodyC">
        <h1>Popular</h1>

        <MoviesList movies={this.state.movies} />
        <div className="moreB">
          <button onClick={this.load_More_Movies}>Show more</button>
        </div>
      </div>
    );
  }
}

export default Popular;
