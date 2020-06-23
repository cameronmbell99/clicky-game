import React from "react";

const Nav = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary" >
      <div>Clicky Game</div>
      <div id="directions">Don't click the same image twice!</div>
      <div id="scoreDiv">Score: {props.score}</div>
    </nav>
  );
}

export default Nav;
