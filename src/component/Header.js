import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getJwt } from "../helper/jwt";

export class header extends Component {
  changes = (e) => {
    const jwt = getJwt();
    if (!jwt) {
      return alert("Please SignUp/SignIn to upload images");
    }
  };
  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-light bg-dark mb-5">
            <div className="container">
              <div className="navbar-header amno ">
                <Link
                  className="navbar-brand text-white text-lg brand-text"
                  to="/"
                >
                  Image Directory{" "}
                  <i className="fa fa-file-image fa-3x" id="imdb-logo" />
                </Link>
              </div>

              <ul className="navbar-nav ml-auto text-light d-inline-block">
                <Link to="/signup" className="btn btn-info btn-lg check1">
                  Sign up
                </Link>
                <Link to="/signin" className="btn btn-info btn-lg check1">
                  Sign in
                </Link>
                <Link
                  to="/uploadPhoto"
                  onClick={this.changes}
                  className="btn btn-info btn-lg check1"
                >
                  upload photos
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default header;
