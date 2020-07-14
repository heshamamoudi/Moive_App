import React from "react";
import MoviesList from "./MoviesList";
import "./Search.css";
//class not completed yet
class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      Pages: 1,
      maxPages: 0,
      searchStatement: "",
    };

    this.api = "aa63da3e1c35587ca73079e2c2d90101";
    this.getSearchMovies = this.getSearchMovies.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  //handles the input changes with an if else statements also so if it becomes null or empty it doesnt crash
  handleChange = async function (event) {
    await this.setState({ searchStatement: event.target.value });
    let s = this.state.searchStatement;
    if (s === "") {
      this.setState({ isLoaded: false });
    } else {
      this.setState({ isLoaded: true });
      this.getSearchMovies(s);
    }
  };
  //----------------------------------------------------------------------------------------------------------
  //searching using api url (fetching/Get)----------------------------------------------
  getSearchMovies = async function (searchterm) {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${this.api}&query=${searchterm}`;

    await this.setState({ Pages: this.state.Pages + 1 });
    await fetch(url, {
      method: "GET",
      headers: {
        Accept: "Application/json",
        "Content-Type": "Application/json",
      },
    }).then((result) => {
      result.json().then((resp) => {
        this.setState({
          movies: [...resp.results],
          maxPages: resp.total_pages,
        });
      });
    });
  };
  //-------------------------------------------------------------------------------------

  render() {
    return (
      //body starts----------------------
      <div className="body">
        {/* solved the issue using a form and input at the same class file */}
        <form id="form">
          <input
            className="input"
            type="search"
            onChange={this.handleChange}
          ></input>
        </form>
        {/* -------------------------------------------------------------------- */}
        <br />
        {/* listing the movies in its own class using mapping */}
        <MoviesList movies={this.state.movies} />
        {/* body ends----------------------------------------- */}
      </div>
    );
  }
}

export default Search;
