import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Contacts from "./components/Contacts";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Резюме</h1>
        <a className="resumeSite" href="https://kraken1970.github.io">
          Сайт резюме: https://kraken1970.github.io
        </a>{" "}
        <Header />
        <Main />
        <Contacts />
      </div>
    );
  }
}

export default App;
