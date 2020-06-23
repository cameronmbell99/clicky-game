import React from "react";

const Nav = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary justify-content-between" >
      <a class="navbar-brand" href="#">Clicky Game</a>
      <div id="directions">Don't click the same image twice! </div>
      <div id="scoreDiv">Score: {props.score}</div>
      
    </nav>
  );
}

export default Nav;
