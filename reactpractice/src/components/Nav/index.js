import React from "react";

const Nav = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary justify-content-between" >
      <a class="navbar-brand" href="#">Clicky Game</a>
      <div id="directions">Click on an Avenger to gain points! Click on the same one twice and you lose!</div>
      <div id="scoreDiv">Score: {props.correct}</div>
      <div id="scoreDiv">Best Score: {props.best}</div>
      
    </nav>
  );
}

export default Nav;
