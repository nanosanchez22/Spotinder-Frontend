import React from "react";
import "./Inicio.css";
import audnLogo from "/iconos/audn-logo.svg";
import GoogleLogo from "/iconos/google-logo.svg";
import AppleLogo from "/iconos/apple-logo.svg";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <>
      <main className="centrar">
        <div className="contenedorLogo">
          <img src={audnLogo} alt="Audn Logo" className="audnLogo" />
          <h1 className="slogan">Música a medida.</h1>
        </div>
        <div className="botones">
          <Link to="/registro/email">
            <button className="boton registrarse">Registrarse Gratis</button>
          </Link>
          <button className="boton contGoogle">
            <img src={GoogleLogo} alt="Google Logo" /> Continuar con Google
          </button>
          <button className="boton contApple">
            <img src={AppleLogo} alt="Apple Logo" /> Continuar con Apple
          </button>
          <Link to="/login">
            <button className="boton iniciarSesion">Iniciar Sesión</button>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Inicio;
