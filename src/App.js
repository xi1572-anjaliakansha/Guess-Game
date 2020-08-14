import React, { Component } from "react";
import "./App.css";
import Congrats from "./congrats/Congrats";
import GuessedWords from "./Guessed/GuessedWords";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h3> Jotto</h3>
        <Congrats success={true} />
        <GuessedWords
          guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
        />
      </div>
    );
  }
}

export default App;
