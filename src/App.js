import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="Text Utils" subNav="About" />
        <TextForm />
      </div>
    );
  }
}

export default App;
