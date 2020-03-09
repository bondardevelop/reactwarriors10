import React from "react";

class MoviePagination extends React.Component {
  constructor() {
    super();

    this.state = {
      current_page: 1
    };

    //this.deleteMovie = this.deleteMovie.bind(this);
  }

  setPage = page => {
    this.setState({
      current_page: page
    });
  };

  render() {
    console.log("MoviePagination", this.state, this.props);
    const { showPageItems } = this.props;
    let currentPage = this.state.current_page;
    return (
      <div>
        <div className="row text-center">
          <div className="col-1">
            <div
              className="btn btn-dark"
              onClick={() => {
                this.setPage(currentPage);
                showPageItems((currentPage += 1));
              }}
            >
              {currentPage}
            </div>
          </div>
          <div className="col-1">
            <div className="btn btn-dark">{(currentPage += 1)}</div>
          </div>
          <div className="col-1">
            <div className="btn btn-dark">{(currentPage += 1)}</div>
          </div>
          <div className="col-1">
            <div className="btn btn-dark">{(currentPage += 1)}</div>
          </div>
          <div className="col-1">
            <div className="btn">...</div>
          </div>
          <div className="col-1">
            <div className="btn btn-dark">{this.props.allPages}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MoviePagination;
