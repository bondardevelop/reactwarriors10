import React from "react";
import { moviesData } from "../moviesData";
import MovieItem from "./movieItem";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesToWatch: []
    };

    //this.deleteMovie = this.deleteMovie.bind(this);
  }

  deleteMovie = movie => {
    const updateMovies = this.state.movies.filter(item => {
      return item.id !== movie.id;
    });
    this.setState({
      movies: updateMovies
    });
  };

  addTowillWatch = movie => {
    const willWatchMovie = [...this.state.moviesToWatch, movie];
    this.setState({
      moviesToWatch: willWatchMovie
    });
    console.log("updateMovies", willWatchMovie);
  };

  removeFromwillWatch = movie => {
    const updateMoviesWillwatch = this.state.moviesToWatch.filter(item => {
      return item.id !== movie.id;
    });
    this.setState({
      moviesToWatch: updateMoviesWillwatch
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {this.state.movies.map(movie => {
                return (
                  <div className="col-6 mb-4" key={movie.id}>
                    <MovieItem
                      movie={movie}
                      deleteMovie={this.deleteMovie}
                      addTowillWatch={this.addTowillWatch}
                      removeFromwillWatch={this.removeFromwillWatch}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3">{this.state.moviesToWatch.length}</div>
        </div>
      </div>
    );
  }
}

export default App;
