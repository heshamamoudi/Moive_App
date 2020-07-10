import React from "react";
import MoviesList from "./MoviesList";
//class not completed yet
class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      Pages: 1,
      maxPages: 0,
      SearchState: "spider",
    };
    this.api = "aa63da3e1c35587ca73079e2c2d90101";
    this.getPopularMovies = this.getPopularMovies.bind(this);
  }
  
  getUrl() {
    //  return `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${SearchState}`;
  }
  //   this method is made to fetch and get the api components also the promises where (.then ) starts
  componentDidMount() {
    this.getPopularMovies();
  }
  getPopularMovies = async function () {
    await fetch(this.getUrl(), {
      method: "GET",
      headers: {
        Accept: "Application/json",
        "Content-Type": "Application/json",
      },
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp.results);
        this.setState({
          movies: [...resp.results],
          maxPages: resp.total_pages,
        });
      });
    });
  };

  render() {
    return (
      <div className="body">
        <div>
          <h1 style={{ textAlign: "relative" }}>Popular</h1>
        </div>

        <MoviesList movies={this.state.movies} />
      </div>
    );
  }
}

export default Search;
