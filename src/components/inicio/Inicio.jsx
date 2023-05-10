import React from "react";
import "./Inicio.css";
import audnLogo from "/iconos/audn-logo.svg";
import GoogleLogo from "/iconos/google-logo.svg";
import AppleLogo from "/iconos/apple-logo.svg";

function Inicio() {
  return (
    <>
      <main className="centrar">
        <div className="contenedorLogo">
        <img src={audnLogo} alt="Audn Logo" className="audnLogo" />
        <h1 className="slogan">Música a medida.</h1></div>
        <div className="botones">
          <button className="boton registrarse">Registrarse Gratis</button>
          <button className="boton contGoogle">
            <img src={GoogleLogo} alt="Google Logo" /> Continuar con Google
          </button>
          <button className="boton contApple">
            <img src={AppleLogo} alt="Apple Logo" /> Continuar con Apple
          </button>
          <button className="boton iniciarSesion">Iniciar Sesión</button>
        </div>
      </main>
    </>
  );
}

export default Inicio;
