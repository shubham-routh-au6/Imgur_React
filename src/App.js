import React from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Landing from "./component/Landing";
import Register from "./component/Register";
import Login from "./component/Login";
import PhotoUploader from "./component/PhotoUploader";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/signup" component={Register} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/uploadPhoto" component={PhotoUploader} />

        <Landing />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
