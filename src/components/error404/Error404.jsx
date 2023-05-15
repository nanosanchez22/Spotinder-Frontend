import React from "react";
import "./Error404.css";
import { Link } from "react-router-dom";

function Error404({cambiarBotonActivo}) {
    const handleClick = () => {
        cambiarBotonActivo("inicio");
      };
  return (
    <div className="paginaError">
      <h1 className="oops">Oops!</h1>
      <p className="error">Error 404</p>
      <h2 className="descripcion-error">
        Esta página no se ha podido encontrar
      </h2>
      <p>Parece que no tienes amigos... </p>
      <Link to="/home" className="link-error" onClick={handleClick}>
        <button className="botonError">Volver a Inicio</button>
      </Link>
    </div>
  );
}

export default Error404;
