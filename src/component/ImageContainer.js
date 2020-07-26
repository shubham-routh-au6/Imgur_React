import React, { Component } from "react";
// import { Link } from "react-router-dom";

export class MovieCard extends Component {
  render() {
    const { image } = this.props;
    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" src={image.reportUrl} alt="Movie Cover" />
        </div>
      </div>
    );
  }
}

export default MovieCard;
