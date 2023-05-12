import React, { useEffect } from "react";
import "./Registro.css";
import FlechaAtras from "/iconos/positionLeft-1.svg";
import Email from "./email/Email";
import NombreContr from "./nombreContr/NombreContr";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Registro() {
  /*   const navigate = useNavigate();

  const email = () => {
    navigate("/email");
  };

  const usuario = () => {
    navigate("/usuario-contraseña");
  }; */

  return (
    <div className="centrar">
      <div className="registro">
        <header className="headerCrearCuenta">
          <Link to="../">
            {" "}
            <img
              src={FlechaAtras}
              alt="Ir hacia atras"
              className="atras"
            />{" "}
          </Link>
          <p className="pHeader">Crear Cuenta</p>
        </header>
        <Outlet />
        {/* <Email /> */}

        {/* <Email/>
        <NombreContr/> */}
      </div>
    </div>
  );
}

export default Registro;
