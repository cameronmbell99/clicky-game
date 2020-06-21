import React, { Component } from 'react';
import Nav from "../components/Nav";
import Card from "../components/Card";
import Imgs from "../Utils/imgs"

class Home extends Component {
  state = {
      characters: [],
      GuessedChars: [],
      Guess: ""
  }

  componentDidMount() {
    this.loadChars();
  }

  loadChars() {
    Imgs.getChars()
        .then(res => 
            this.setState({characters: res.data, GuessedChars: [], Guess: ""})    
        )
        .catch(err => console.log(err));
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

