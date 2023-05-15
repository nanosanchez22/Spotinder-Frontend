import React, { useState } from "react";
import "./BuscadorCanciones.css";
import FlechaAtras from "/iconos/positionLeft-1.svg";
import Lupa from "/iconos/styleOutline_stateInactive-1.svg";
import IconoBorrar from "/iconos/styleDefault_positionDiagonal.svg";
import CancionCard from "../cancionCard/CancionCard";
import { useNavigate } from "react-router";

function Buscador() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearClick = () => {
    setSearchValue("");
  };

  /*   var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://localhost:8000/api/canciones", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error)); */

  return (
    <div className="centrarB">
      <div className="buscadorPageB">
        <header className="enLineaB">
          <input
            type="search"
            name=""
            id=""
            placeholder="¿Qué deseas escuchar?"
            className="busquedaBarB"
            value={searchValue}
            onChange={handleInputChange}
          />
          <img
            src={FlechaAtras}
            onClick={goBack}
            alt="Buscar"
            className="iconoLupaB"
          />
          {searchValue && (
            <img
              src={IconoBorrar}
              alt="Borrar"
              onClick={handleClearClick}
              className="iconoBorrarB"
            />
          )}
        </header>
        <div className="corteB">
          <p className="top20B">Resultado Sugerido</p>
          <hr />
        </div>
      </div>
      <div className="contenedorCardB">
        <CancionCard></CancionCard>
      </div>
    </div>
  );
}

export default Buscador;
