import React, { Component } from "react";
import axios from "axios";
import { getJwt } from "../helper/jwt";
import "./Login.css";
// import Axios from "axios";

export class PhotoUploader extends Component {
  state = {
    selectedFile: null,
  };
  //   componentDidMount() {}
  fileSelectorHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };
  fileUploadHandler = () => {
    const jwt = getJwt();
    if (!jwt) {
      alert("Please login to upload Images");
    } else {
      alert("Image successfully uploaded");
      const fd = new FormData();
      fd.append(
        "reportUrl",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
      axios
        .post("https://dry-wave-28291.herokuapp.com/submitImage", fd)
        // .post("http://localhost:5000/submitImage", fd, {
        // })

        .then((res) => {
          alert("Refresh the page to see recent uploads");
          console.log(res);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  render() {
    return (
      <div className="Dore">
        <input
          style={{ display: "none" }}
          type="file"
          name="reportUrl"
          onChange={this.fileSelectorHandler}
          ref={(fileInput) => (this.fileInput = fileInput)}
        />
        <button
          className="btn btn-success btn-lg check1"
          style={{ margin: "1em" }}
          onClick={() => this.fileInput.click()}
        >
          Pick File
        </button>
        <button
          className="btn btn-info btn-lg check1"
          style={{ margin: "1em" }}
          onClick={this.fileUploadHandler}
        >
          Upload
        </button>
      </div>
    );
  }
}

export default PhotoUploader;
