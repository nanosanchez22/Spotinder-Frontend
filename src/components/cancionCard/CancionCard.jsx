import React from "react";
import "./CancionCard.css";

function CancionCard(props) {
  return (
    <div>
      <img className="imgCard" src={props.canciones.img} alt="" />
      <p className="nombreCard">{props.canciones.nombre}</p>
      <p className="artistaCard">{props.canciones.artista}</p>
    </div>
  );
}

export default CancionCard;
