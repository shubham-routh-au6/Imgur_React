import React, { Component } from "react";
import Spinner from "./Spinner";
import ImageContainer from "./ImageContainer";

export class Landing extends Component {
  state = {
    loading: true,
    image: [],
  };
  async componentDidMount() {
    const url = "https://dry-wave-28291.herokuapp.com/getImages";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ image: data.message, loading: false });
  }
  render() {
    return (
      <div>
        <h1 className="landingHeading">
          Hello Comrade Welcome to Image uploader
        </h1>
        <div className="row">
          {this.state.loading ? (
            <Spinner />
          ) : (
            this.state.image.map((mess, index) => (
              // <img className="landingImage" src={mess.reportUrl}></img>
              <ImageContainer key={index} image={mess} />
            ))
          )}
          {/* {this.state.image.owner} */}
        </div>
      </div>
    );
  }
}

export default Landing;

// import React from "react";

// export default class FetchRandomUser extends React.Component {
//   state = {
//     loading: true,
//     person: null,
//   };

//   async componentDidMount() {
//     const url = "https://api.randomuser.me/";
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//     this.setState({ person: data.results[0], loading: false });
//   }

//   render() {
//     if (this.state.loading) {
//       return <div>loading...</div>;
//     }

//     if (!this.state.person) {
//       return <div>didn't get a person</div>;
//     }

//     return (
//       <div>
//         <div>{this.state.person.name.title}</div>
//         <div>{this.state.person.name.first}</div>
//         <div>{this.state.person.name.last}</div>
//         <img src={this.state.person.picture.large} />
//       </div>
//     );
//   }
// }
