import React, { useState } from "react";
import "./Buscador.css";
import FlechaAtras from "/iconos/positionLeft-1.svg";
import Lupa from "/iconos/styleOutline_stateInactive-1.svg";

function Buscador() {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearClick = () => {
    setSearchValue("");
  };
  return (
    <div className="centrar">
      <div className="buscadorPage">
        <header className="enLinea">
          <h1 className="buscador">Buscador</h1>
        </header>
        <input
          type="search"
          name=""
          id=""
          placeholder="¿Qué deseas escuchar?"
          className="busquedaBar"
          value={searchValue}
          onChange={handleInputChange}
        />
        <img src={Lupa} alt="Buscar" className="iconoLupa" />
        {searchValue && (
          <img
            src={IconoBorrar}
            alt="Borrar"
            onClick={handleClearClick}
            className="iconoBorrar"
          />
        )}
        <div className="corte">
          <p className="top20">Top 20s</p>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Buscador;
