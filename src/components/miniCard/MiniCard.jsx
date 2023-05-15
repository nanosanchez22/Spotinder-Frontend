import React from "react";
import ImagenPrueba from "/imagenes/brand_eyewear.jpg";
import TresPuntos from "/iconos/positionVertical.svg";

function MiniCard(props) {
  return (
    <div className="mini-card">
      <img src={props.canciones.img} alt="" className="albumCover-small" />
      <div className="texto-miniCard">
        <h2 className="tituloCancion">{props.canciones.nombre}</h2>
        <p className="artista">{props.canciones.artista}</p>
      </div>
      <img src={TresPuntos} alt="" />
    </div>
  );
}

export default MiniCard;
