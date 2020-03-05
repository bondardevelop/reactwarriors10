import React from "react";
import MovieItem from "./movieItem";
import MovieTabs from "./movieTabs";
import { API_URL, API_KEY } from "../api/api";

class App extends React.Component {
  constructor() {
    console.log("constructor");
    super();

    this.state = {
      movies: [],
      moviesToWatch: [],
      sort_by: "popularity.desc"
    };

    //this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY}&sort_by=${this.state.sort_by}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("fetch", data);
        this.setState({
          movies: data.results
        });
      });
  }

  updateSortBy = value => {
    this.setState({
      sort_by: value
    });
  };

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
    console.log("render");
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              <div className="col-12 mb-4">
                <MovieTabs
                  sortBy={this.state.sort_by}
                  updateSortBy={this.updateSortBy}
                />
              </div>
            </div>
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
          <div className="col-3">
            Movie to watch {this.state.moviesToWatch.length}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
