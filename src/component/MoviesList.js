import React from "react";
import "./MovieList.css";

function MoviesList(props) {
  const movies = props.movies;
  const movieItems = movies.map((movie, i) => (
    <div className="container" key={i}>
      <div id="row" className="row">
        <div id="col-pic" className="col-2-sm">
          <img
            src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`}
            alt=""
          />
        </div>

        <div id="col-1" className="col-3">
          <p>Title: {movie.original_title}</p>
        </div>
        <div id="col" className="col-5">
          {movie.overview}
        </div>
        <div id="col-2" className="col-2">
          <p>{movie.vote_average}/10</p>
        </div>
      </div>
    </div>
  ));
  return movieItems;
}

export default MoviesList;
