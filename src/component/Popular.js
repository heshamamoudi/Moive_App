import React, { Component } from "react";
import MoviesList from "./MoviesList";
import "./Popular.css";

class Popular extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      favMovies: [],
      Pages: 1,
      maxPages: 0,
      SearchState: "",
      token: "",
      sessionID: "",
      pop: true,
    };
    this.tabs = this.tabs.bind(this);
    this.api = "aa63da3e1c35587ca73079e2c2d90101";
    this.getPopularMovies = this.getPopularMovies.bind(this);
    this.load_More_Movies = this.load_More_Movies.bind(this);
    this.StartSession = this.StartSession.bind(this);
    this.getToken = this.getToken.bind(this);
    this.getfav = this.getfav.bind(this);
    this.getfavorite = this.getfavorite.bind(this);
  }
  //geters----------------------------------------------------------------------------------------------
  getSessionInfo() {
    return `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${this.api}`;
  }
  getUrl() {
    return `https://api.themoviedb.org/3/movie/popular?api_key=${this.api}&language=en-US&page=${this.state.Pages}`;
  }
  getfav() {
    return `https://api.themoviedb.org/3/account/{account_id}/favorite/movies?api_key=${this.api}&session_id=${this.state.sessionID}&sort_by=created_at.asc`;
  }
  //-----------------------------------------------------------------------------------------------------------
  componentDidMount() {
    this.getToken();
    this.getPopularMovies();
  }

  //this method is made to fetch and get the api components also the promises where (.then ) starts

  //------------------------------------------------------------------------
  getPopularMovies = async function () {
    //getting popular movies from api and assigning it to movies state(variable)
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
  //-----------------------------------------------------------------------------
  load_More_Movies = async function () {
    //loading more movies and pushing it to the movies array variable using a temporary refference
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
  //--------------------------------------------------------------------------------
  getTokenUrl() {
    return `https://api.themoviedb.org/3/authentication/token/new?api_key=${this.api}`;
  }
  //---------------------------------------------------------------------------------
  getToken = async function () {
    //fetching token to start a session amd updating  token state (variable)
    await fetch(this.getTokenUrl(), {
      method: "GET",
      headers: {
        Accept: "Application/json",
        "Content-Type": "Application/json",
      },
    }).then((result) => {
      result.json().then((response) => {
        this.setState({
          token: response.request_token,
        });
      });
    });
  };
  //------------------------------------------------------
  StartSession = async function () {
    //starting sessions but with some kind of error using a recursive function till i accept the authorization

    await fetch(
      `https://api.themoviedb.org/3/authentication/session/new?api_key=aa63da3e1c35587ca73079e2c2d90101`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          request_token: this.state.token,
        }),
      }
    ).then((result) => {
      result.json().then((response) => {
        switch (response.status_message) {
          case "Session denied.":
            this.StartSession();
            break;
          default:
        }
        this.setState({
          sessionID: response.session_id,
        });
        this.getfavorite();
      });
    });
  };
  //--------------------------------------------------------------------------------------------------
  getfavorite = async function () {
    await fetch(this.getfav(), {
      method: "GET",
      headers: {
        Accept: "Application/json",
        "Content-Type": "Application/json",
      },
    }).then((result) => {
      result.json().then((response) => {
        this.setState({
          favMovies: response.results,
        });
      });
    });
  };
  //---------------------------------------------------------------------------------------------------
  tabs() {
    //using a tab way where its not complete yet but working in bad way
    if (this.state.pop === true) {
      this.setState({ pop: false });
      console.log("im turning false");
    } else {
      this.setState({ pop: true });
      console.log("im turning true");
    }
  }
  //---------------------------------------------------------------------
  render() {
    return (
      <div className="bodyC">
        {/* ----------------------------------------------------------- */}
        {/* i made the session start with a button in a new tab where i authorize it */}
        <div style={{ textAlign: "center" }}>
          <a
            href={`https://www.themoviedb.org/authenticate/${this.state.token}?`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="start" onClick={this.StartSession}>
              Start Session
            </button>
          </a>
        </div>
        {/* start session ends------------------------------------------------ */}
        {/* tab containers ---------------------------------------------------- */}
        <div className="container">
          <button className="popularBt" onClick={this.tabs}>
            <h1>Popular </h1>
          </button>

          <button className="favBt" onClick={this.tabs}>
            <h1>Favorite </h1>
          </button>
        </div>
        {/* container ends here------------------------------------------------------ */}
        {/* condition where i will update the tabs------------------------------------- */}
        {this.state.pop ? (
          <MoviesList
            movies={this.state.movies}
            sessionID={this.state.sessionID}
            api={this.api}
            update={this.getfavorite}
          />
        ) : (
          <MoviesList
            movies={this.state.favMovies}
            sessionID={this.state.sessionID}
            api={this.api}
            update={this.getfavorite}
          />
        )}
        {/* condition ends here---------------------------------------------------------- */}
        {/* for more movies button */}
        <div className="moreB">
          <button onClick={this.load_More_Movies}>Show more</button>
        </div>
        {/* button ends------------------------------------------------------------------ */}
        {/* body ends---------------------------------------------------------------- */}
      </div>
    );
  }
}

export default Popular;
