import React, { Component } from "react";
import Card from "./components/Card";
import {Container, Row} from "./components/Grid";
import Nav from "./components/Nav";
import matches from "./Avengers.json";

let correctGuesses = 0;
let bestScore = 0;

class App extends Component {
    
    // Setting this.state.matches to the matches json array
    state = {
        matches,
        correctGuesses,
        bestScore
    };

    handleClick = id => {

        // Make a copy of the state matches array to work with
        const matches = this.state.matches;

        // Filter for the clicked match
        const clickedMatch = matches.filter(match => match.id === id);

        // If the matched image's clicked value is already true, 
        // do the game over actions
        if (clickedMatch[0].clicked){
            alert("You clicked the same one twice, better luck next time");

            console.log ("Correct Guesses: " + correctGuesses);
            console.log ("Best Score: " + bestScore);

            correctGuesses = 0;

            for (let i = 0 ; i < matches.length ; i++){
                matches[i].clicked = false;
            }

            this.setState({ correctGuesses });
            this.setState({matches});

        // Otherwise, if clicked = false, and the user hasn't finished
        } else if (correctGuesses < 11) {

            // Set its value to true
            clickedMatch[0].clicked = true;

            // increment the appropriate counter
            correctGuesses++;

            if (correctGuesses > bestScore){
                bestScore = correctGuesses;
                this.setState({ bestScore });
            }

            // Shuffle the array to be rendered in a random order
            matches.sort(function(){return 0.5 - Math.random()});

            // Set this.state.matches equal to the new matches array
            this.setState({ matches });
            this.setState({correctGuesses});
        } else {

            alert("You got a perfect score, you wanna try again?");

            // Set its value to true
            clickedMatch[0].clicked = true;

            // restart the guess counter
            correctGuesses = 0;

            bestScore = 12;
            this.setState({ bestScore });
            
            for (let i = 0 ; i < matches.length ; i++){
                matches[i].clicked = false;
            }

            // Shuffle the array to be rendered in a random order
            matches.sort(function(){return 0.5 - Math.random()});

            // Set this.state.matches equal to the new matches array
            this.setState({ matches });
            this.setState({correctGuesses});

        }
    };

    render() {
        return (
            <Container>
                <Nav correct={this.state.correctGuesses} best={this.state.bestScore}/>
                <Row>
                {this.state.matches.map(match => (
                    <Card
                        handleClick={this.handleClick}
                        id={match.id}
                        key={match.id}
                        image={match.image}
                    />
                ))}
                </Row>
            </Container>
        );
    }
}

export default App;