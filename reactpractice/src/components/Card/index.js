import React from "react";

function Card(props) {
  return (
    <div onClick={() => props.handleClick(props.id)} class="card">
        <img class="card-img-top" 
            alt={props.name}
            src={props.image}/>
    </div>
  );
}

export default Card;
