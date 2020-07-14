import React from "react";
import "./MovieList.css";
const MoviesList = (props) => {
  //add to favorite-------------------------------------------------------------------
  async function fav(movie_id) {
    // fetching(posting) and catching promises where its adding to favorite
    await fetch(
      `https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=${props.api}&session_id=${props.sessionID}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          media_type: "movie",
          media_id: movie_id,
          favorite: true,
        }),
      }
    ).then((result) => {
      result.json().then((response) => {
        console.log(response);
      });
    });
    props.update();
  }
  //remove from favourite----------------------------------------------------------------
  async function Removefav(movie_id) {
    // fetching(posting) and catching promises where its deleting from favorite
    await fetch(
      `https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=${props.api}&session_id=${props.sessionID}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          media_type: "movie",
          media_id: movie_id,
          favorite: false,
        }),
      }
    ).then((result) => {
      result.json().then((response) => {
        console.log(response);
      });
    });
    props.update();
  }
  //-----------------------------------------------------
  const movies = props.movies;
  //mapping the movies in the grid--------------------------------------------
  const movieItems = movies.map(
    (movie, i) => (
      <div className="container" key={i}>
        <div id="row" className="row">
          {/* col of picture and if statement where if the picture isnt found will put a not found img */}
          <div id="col-pic" className="col-2-sm">
            <img
              id="imgSize"
              src={
                movie.poster_path
                  ? `http://image.tmdb.org/t/p/w185${movie.poster_path}`
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQppJKxBxJI-9UWLe2VVmzuBd24zsq4_ihxZw&usqp=CAU"
              }
              alt=""
            />
          </div>

          <div id="col-1" className="col-3">
            <p>Title: {movie.original_title}</p>
          </div>
          <div id="col" className="col-5">
            {movie.overview}
          </div>
          {/* -------------------------------------------------------------------------- */}
          {/* movie vote is put on a col here and the like and delete from fav buttons*/}
          <div id="col-2" className="col-2">
            <p>
              {movie.vote_average}/10
              <br />
              <button
                id="like"
                onClick={() => {
                  fav(movie.id);
                }}
              >
                {/* an icon */}
                {
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-suit-heart-fill"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4
                   1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1
                   -.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
                    />
                  </svg>
                }
              </button>
              <button
                onClick={() => {
                  Removefav(movie.id);
                }}
              >
                {/* an icon */}
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-trash-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 
                  1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 
                  1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 
                  0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 
                  1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
                  />
                </svg>
                {/* ----------------------- */}
              </button>
            </p>
          </div>
        </div>
      </div>
    )
    //mapping ends here---------------------------------------------------------
  );
  //--------------------------------------------------------------------------
  return movieItems;
};

export default MoviesList;
