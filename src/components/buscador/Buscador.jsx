import React, { useState } from "react";
import "./Buscador.css";
import FlechaAtras from "/iconos/positionLeft-1.svg";
import Lupa from "/iconos/styleOutline_stateInactive-1.svg";
import IconoBorrar from "/iconos/cruzNegra.svg";
import CancionCard from "../cancionCard/CancionCard";
import { Link, useNavigate } from "react-router-dom";

function Buscador() {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");
  const [cancion, setCancion] = useState([]);

  const mostrarCanciones = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:8000/api/canciones",
        requestOptions
      );
      if (response.ok) {
        const respuesta = await response.json();
        setCancion(respuesta.canciones);
      } else {
        const respuesta = await response.json();
        alert(respuesta.error);
      }
    } catch (error) {
      alert(error.message);
    }
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
          onClick={() => navigate("/buscador/buscarCancion")}
        />
        <img src={Lupa} alt="Buscar" className="iconoLupa" />
        {searchValue && (
          <img src={IconoBorrar} alt="Borrar" className="iconoBorrar" />
        )}
        <div className="corte">
          <p className="top20">Top 20s</p>
          <hr />
        </div>
      </div>
      <div className="contenedorCard" {...mostrarCanciones()}>
        {cancion.map((cancion) => {
          return <CancionCard canciones={cancion}></CancionCard>;
        })}
      </div>
    </div>
  );
}

export default Buscador;
