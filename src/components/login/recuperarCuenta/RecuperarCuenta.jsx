import React from "react";
import "./RecuperarCuenta.css";
import FlechaAtras from "/iconos/positionLeft-1.svg";
import { Link, useNavigate } from "react-router-dom";

function RecuperarCuenta() {
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

          <p className="pHeader">Recuperar Cuenta</p>
        </header>
        <form action="" className="formIniciar">
          <label htmlFor="nombre" className="labelsNC">
            Nombre de usuario o E-mail:
          </label>
          <input type="text" name="name" id="nombre" className="inputsNC" />
          <p className="msjRecuperacion">
            Deberás poder ingresar al e'mail de la cuenta para poder
            recuperarla.
          </p>
        </form>
        <Link to="../inicio">
          <button className="continuarRecuperar">Continuar</button>
        </Link>
      </div>
    </div>
  );
}

export default RecuperarCuenta;
