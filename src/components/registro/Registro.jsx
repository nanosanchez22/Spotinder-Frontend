import React, { useEffect } from "react";
import "./Registro.css";
import FlechaAtras from "/iconos/positionLeft-1.svg";
import Email from "./email/Email";
import NombreContr from "./nombreContr/NombreContr";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Registro() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="centrar">
      <div className="registro">
        <header className="headerCrearCuenta">
          <img
            onClick={goBack}
            src={FlechaAtras}
            alt="Ir hacia atras"
            className="atras"
          />
          <p className="pHeader">Crear Cuenta</p>
        </header>
        <Outlet />
      </div>
    </div>
  );
}

export default Registro;
