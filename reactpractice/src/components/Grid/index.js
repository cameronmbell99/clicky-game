import React, {Component} from "react";
import Avengers from "../../Avengers.json";
import Card from "../Card";
import Nav from "../Nav";


class Grid extends Component {
    state = {
        Avengers: Avengers,
        score: 0
    }

    resetGame = () => {
        this.setState({
            score: 0,
            Avengers: Avengers
        })      
    }

    handleCorrect = newAvengers => {
        this.setState({
            Avengers: this.shuffleArray(newAvengers), 
            score: this.state.score +1,
        });
        
        if (this.state.score === 11) {
            this.resetGame();
            console.log("You won!");
        }

    };

    handleWrong = () => {
        this.resetGame();
    };

    handleClick = name => {
        let guessedCorrect = false;
        const newAvengers = this.state.Avengers.map(Avenger => {
           const newPic = {...Avenger};
           if (newPic.name === name) {
               if(!newPic.clicked){
                   console.log("Already guessed------------");
                   newPic.clicked = true;
                   guessedCorrect = true;
               }
               
           }
           return newPic;
       })       
       console.log("GUESSED CORRECT: ", guessedCorrect)
       guessedCorrect ? this.handleCorrect(newAvengers) : this.handleWrong(newAvengers)
    };

    shuffleArray = Avengers => {
        for (let i = Avengers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [Avengers[i], Avengers[j]] = [Avengers[j], Avengers[i]];
        }
        return (Avengers);
    };

    render() {
        return(
            <div>
                <Nav score={this.state.score}/>
                <div className="gridWrapper">
                    <div className="grid">
                    {this.state.Avengers.map(({id, name, image}) => {
                            return (<Card 
                            name={name}
                            id={id}
                            key={id} 
                            handleClick={this.handleClick}
                            src={image} 
                            alt={name}  
                        />)
                        })}
                    </div>
                </div>
            </div> 
        );
    }
};

export default Grid;