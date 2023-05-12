import React from "react";
import "./Buscador.css";
import FlechaAtras from "/iconos/positionLeft-1.svg";

function Buscador() {
  return (
    <div className="centrar">
      <div className="buscadorPage">
        <header className="enLinea">
          <h1 className="buscador">Buscador</h1>
        </header>
        <input type="search" name="" id="" placeholder=""/>¿Qué deseas escuchar?
      </div>
    </div>
  );
}

export default Buscador;
