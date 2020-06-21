import React from "react";

function Card({ img }) {
  return (
    <div class="card" style={{width: '18rem'}}>
        <img class="card-img-top" src={img} alt="Character"></img>
      
    </div>
  );
}

export default Card;
