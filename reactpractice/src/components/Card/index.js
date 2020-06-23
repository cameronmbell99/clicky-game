import React from "react";

function Card({ handleClick, id, name, image }) {
  return (
    <div class="card" style={{width: '18rem', backgroundImage:`url(${image})`}}>
        <img class="card-img-top" 
            // src={image}
            alt={name}
            onClick={() => handleClick(id)}>
        </img>
      
    </div>
  );
}

export default Card;
