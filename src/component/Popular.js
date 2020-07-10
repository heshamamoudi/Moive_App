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
    };
    this.api = "aa63da3e1c35587ca73079e2c2d90101";
    this.getPopularMovies = this.getPopularMovies.bind(this);
    this.load_More_Movies = this.load_More_Movies.bind(this);
  }
  getUrl() {
    return `https://api.themoviedb.org/3/movie/popular?api_key=${this.api}&language=en-US&page=${this.state.Pages}`;
  }
  componentDidMount() {
    this.getPopularMovies();
  }
  //   this method is made to fetch and get the api components also the promises where (.then ) starts
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
