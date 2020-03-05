import React from "react";

class MovieTabs extends React.Component {
  constructor() {
    super();

    this.state = {
      willWatch: false
    };

    //this.deleteMovie = this.deleteMovie.bind(this);
  }

  handleClick = value => {
    const { updateSortBy } = this.props;
    return () => {
      updateSortBy(value);
    };
  };

  getClassLink = value => {
    const { sortBy } = this.props;
    return sortBy === value ? "active" : "badge-secondary";
  };

  render() {
    const { sortBy } = this.props;
    return (
      <div>
        <ul className="tabs nav nav-pills">
          <li className="nav-link">
            <div
              className={`btn nav-link ${this.getClassLink("popularity.desc")}`}
              onClick={this.handleClick("popularity.desc")}
            >
              Popylarity{console.log(sortBy)}
            </div>
          </li>
          <li className="nav-link">
            <div
              className={`btn nav-link ${this.getClassLink("revenue.desc")}`}
              onClick={this.handleClick("revenue.desc")}
            >
              Revenue
            </div>
          </li>
          <li className="nav-link">
            <div
              className={`btn nav-link ${this.getClassLink(
                "vote_average.desc"
              )}`}
              onClick={this.handleClick("vote_average.desc")}
            >
              Vote avetage
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default MovieTabs;
