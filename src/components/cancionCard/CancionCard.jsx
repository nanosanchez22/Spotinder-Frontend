import React from "react";
import "./CancionCard.css";

function CancionCard() {
  return (
    <div>
      <img className="imgCard" src="\imagenes\brand_eyewear.jpg" alt="" />
      <p className="nombreCard">Nombre de cancion</p>
      <p className="artistaCard">Nombre de artista</p>
    </div>
  );
}

export default CancionCard;
