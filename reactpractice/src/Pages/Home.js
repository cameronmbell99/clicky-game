import React, { Component } from 'react';
import Nav from "../components/Nav";
import Card from "../components/Card";

class Home extends Component {
  state = {
      characters: [],
      GuessedChars: [],
      Guess: ""
  }

  render() {
    return (
        <div>
            <Nav />
            <Card />
        </div>
    );
    }
}
export default Home;

