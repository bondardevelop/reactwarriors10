import React from "react";
import MovieItem from "./movieItem";
import MovieTabs from "./movieTabs";
import MoviePagination from "./moviePagination";
import { API_URL, API_KEY } from "../api/api";

class App extends React.Component {
  constructor() {
    console.log("constructor");
    super();

    this.state = {
      movies: [],
      moviesToWatch: [],
      sort_by: "popularity.desc",
      current_page: 1,
      total_pages: 1
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.getMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevProps, prevState);
    console.log("this", prevState.current_page, this.state.current_page);
    if (prevState.sort_by !== this.state.sort_by) {
      console.log("callAPI");
      this.getMovies();
    }
  }

  getMovies = () => {
    console.log("callApi");
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY}&sort_by=${this.state.sort_by}&page=${this.state.current_page}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          movies: data.results,
          current_page: data.page,
          total_pages: data.total_pages
        });
      });
  };

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

  nextPage = () => {
    this.setState({
      current_page: (this.state.current_page += 1)
    });
    this.getMovies();
  };

  prevPage = () => {
    this.setState({
      current_page:
        this.state.current_page !== 1 ? (this.state.current_page -= 1) : null
    });
    this.getMovies();
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

  showPageItems = page => {
    console.log(page, this.state.current_page !== 1);
    this.setState({
      current_page: page
    });
    console.log(page, this.state.current_page);
    this.getMovies();
  };

  render() {
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
              <div className="col-12 mb-4">
                <MoviePagination
                  currentPage={this.state.current_page}
                  allPages={this.state.total_pages}
                  showPageItems={this.showPageItems}
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
            <div className="row">
              <div className="col-12">
                Movie to watch {this.state.moviesToWatch.length}
              </div>
              <div className="col-12">page {this.state.current_page}</div>
              <div className="mt-4 col-12">
                <div className="d-flex justify-content-between">
                  <div className="btn btn-success" onClick={this.prevPage}>
                    prev page
                  </div>
                  <div className="btn btn-success" onClick={this.nextPage}>
                    next page
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
