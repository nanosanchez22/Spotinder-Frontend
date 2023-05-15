import React, { useState } from "react";
import "./Buscador.css";
import FlechaAtras from "/iconos/positionLeft-1.svg";
import Lupa from "/iconos/styleOutline_stateInactive-1.svg";
import IconoBorrar from "/iconos/styleDefault_positionDiagonal.svg";
import CancionCard from "../cancionCard/CancionCard";
import { Link, useNavigate } from "react-router-dom";

function Buscador() {
  const navigate = useNavigate();
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
          onClick={() => navigate("/buscador/buscarCancion")}
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
      <div className="contenedorCard">
        <CancionCard></CancionCard>
        <CancionCard></CancionCard>
        <CancionCard></CancionCard>
        <CancionCard></CancionCard>
        <CancionCard></CancionCard>
        <CancionCard></CancionCard>
        <CancionCard></CancionCard>
      </div>
    </div>
  );
}

export default Buscador;
