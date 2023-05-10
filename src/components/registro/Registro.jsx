import React from "react";
import "./Registro.css";
import FlechaAtras from "/iconos/positionLeft-1.svg";
import Email from "./email/Email";
import NombreContr from "./nombreContr/NombreContr";

function Registro() {
  return (
    <div className="centrar">
      <div className="registro">
        <header className="headerCrearCuenta">
          <img src={FlechaAtras} alt="Ir hacia atras" className="atras" />
          <p className="pHeader">Crear Cuenta</p>
        </header>
        {/* <Email/> */}
        <NombreContr/>
        <button className="continuar">Continuar</button>
      </div>
    </div>
  );
}

export default Registro;
