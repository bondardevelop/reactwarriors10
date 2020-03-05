import React from "react";

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      willWatch: false
    };

    //this.deleteMovie = this.deleteMovie.bind(this);
  }

  buttonWillWatchHandle = () => {
    this.setState({
      willWatch: !this.state.willWatch
    });
  };

  render() {
    const {
      movie,
      deleteMovie,
      addTowillWatch,
      removeFromwillWatch
    } = this.props;
    return (
      <div className="card">
        <img
          className="card-img"
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
            movie.poster_path}`}
          alt={movie.title}
        />
        <div className="p-2">
          <h6>{movie.title}</h6>
          <div className="align-items-center d-flex justify-content-between mb-4">
            <p className="m-0">{`Rating ${movie.vote_average}`}</p>

            <button
              className={
                this.state.willWatch ? "btn btn-primary" : "btn btn-success"
              }
              onClick={() => {
                this.buttonWillWatchHandle();
                this.state.willWatch
                  ? removeFromwillWatch(movie)
                  : addTowillWatch(movie);
              }}
            >
              {this.state.willWatch ? "Not watch" : "Will Watch"}
            </button>
          </div>
          <div className="d-flex">
            <button
              className="btn btn-secondary"
              onClick={deleteMovie.bind(null, movie)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;
