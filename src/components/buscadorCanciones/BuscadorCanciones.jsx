import React, { useState } from "react";
import "./BuscadorCanciones.css";
import FlechaAtras from "/iconos/positionLeft-1.svg";
import Lupa from "/iconos/styleOutline_stateInactive-1.svg";
import IconoBorrar from "/iconos/cruzNegra.svg";
import CancionCard from "../cancionCard/CancionCard";
import { useNavigate } from "react-router";
import MiniCard from "../miniCard/MiniCard";

function Buscador() {
  const [cancion, setCancion] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const filtrarCancion = cancion.filter(
    (cancion) =>
      cancion.nombre.toLowerCase().includes(searchValue.toLowerCase()) ||
      cancion.artista.toLowerCase().includes(searchValue.toLowerCase()) ||
      cancion.genero.toLowerCase().includes(searchValue.toLowerCase())
  );

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const handleClearClick = () => {
    setSearchValue("");
  };

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

        /*  alert(respuesta.message); */
      } else {
        const respuesta = await response.json();
        alert(respuesta.error);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  /*   fetch("http://localhost:8000/api/canciones", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
 */
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
            onChange={(e) => setSearchValue(e.target.value)}
            onClick={mostrarCanciones}
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
        {filtrarCancion.map((cancion) => {
          return <MiniCard canciones={cancion}></MiniCard>;
        })}
      </div>
    </div>
  );
}

export default Buscador;
