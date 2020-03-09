import React from "react";

class MovieTabs extends React.Component {
  constructor() {
    super();

    this.state = {
      willWatch: false
    };

    //this.deleteMovie = this.deleteMovie.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState, this.props.sortBy);
    if (nextProps.sortBy !== this.props.sortBy) {
      return true;
    } else {
      return false;
    }
  }

  handleClick = value => {
    const { updateSortBy } = this.props;
    return () => {
      updateSortBy(value);
    };
  };

  getClassLink = value => {
    const { sortBy } = this.props;
    return sortBy === value ? "btn-primary" : "btn-secondary";
  };

  render() {
    const { sortBy } = this.props;
    return (
      <div>
        <ul className="tabs nav nav-pills">
          <li className="pl-0 nav-link">
            <div
              className={`btn ${this.getClassLink("popularity.desc")}`}
              onClick={this.handleClick("popularity.desc")}
            >
              Popylarity{console.log(sortBy)}
            </div>
          </li>
          <li className="nav-link">
            <div
              className={`btn  ${this.getClassLink("revenue.desc")}`}
              onClick={this.handleClick("revenue.desc")}
            >
              Revenue
            </div>
          </li>
          <li className="nav-link">
            <div
              className={`btn ${this.getClassLink("vote_average.desc")}`}
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
