import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BarraNavegacion.css";
import HomeActivo from "/iconos/styleFill_stateActive.svg";
import HomeInactivo from "/iconos/styleOutline_stateInactive.svg";
import BusquedaActivo from "/iconos/styleFill_stateActive-1.svg";
import BusquedaInactivo from "/iconos/styleOutline_stateInactive-1.svg";
import PerfilActivo from "/iconos/styleFill_stateActive_add-friendFalse.svg";
import PerfilInactivo from "/iconos/styleOutline_stateInactive_add-friendFalse.svg";
import AmigosActivo from "/iconos/styleFill_stateActive-2.svg";
import AmigosInactivo from "/iconos/styleOutline_stateInactive-2.svg";

function BarraNavegacion() {
  const [botonActivo, setBotonActivo] = useState("inicio");

  const cambiarBotonActivo = (boton) => {
    setBotonActivo(boton);
  };

  return (
    <>
      <nav className="nav-bar">
        <Link
          className={`botonNavBar ${botonActivo === "inicio" ? "activo" : ""}`}
          to="/home"
          onClick={() => cambiarBotonActivo("inicio")}
        >
          <img
            src={botonActivo === "inicio" ? HomeActivo : HomeInactivo}
            alt="Botón Home"
          />
          <p className="pNavegacion">Inicio</p>
        </Link>
        {/* <Link
            className={`botonNavBar ${
              botonActivo === "buscador" ? "activo" : ""
            }`}
            onClick={() => cambiarBotonActivo("buscador")}
          >
            <img
              src={
                botonActivo === "buscador" ? BusquedaActivo : BusquedaInactivo
              }
              alt="Botón de Búsqueda"
            />
            <p className="pNavegacion">Buscador</p>
          </Link> */}
        <Link
          className={`botonNavBar ${botonActivo === "perfil" ? "activo" : ""}`}
          to="/perfil"
          onClick={() => cambiarBotonActivo("perfil")}
        >
          <img
            src={botonActivo === "perfil" ? PerfilActivo : PerfilInactivo}
            alt="Botón de Perfil"
          />
          <p className="pNavegacion">Perfil</p>
        </Link>
        {/* <Link
            className={`botonNavBar ${
              botonActivo === "amigos" ? "activo" : ""
            }`}
            onClick={() => cambiarBotonActivo("amigos")}
          >
            <img
              src={botonActivo === "amigos" ? AmigosActivo : AmigosInactivo}
              alt="Botón de Amigos"
            />
            <p className="pNavegacion">Amigos</p>
          </Link> */}
      </nav>
    </>
  );
}

export default BarraNavegacion;
