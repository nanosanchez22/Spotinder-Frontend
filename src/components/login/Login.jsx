import React, { useState } from "react";
import "./Login.css";
import FlechaAtras from "/iconos/positionLeft-1.svg";
import EyeClosed from "/iconos/stateClosed.svg";
import EyeOpen from "/iconos/stateOpen.svg";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="centrar">
      <div className="registro">
        <header className="headerCrearCuenta">
          <img src={FlechaAtras} alt="Ir hacia atras" className="atras" />
          <p className="pHeader">Iniciar Sesión</p>
        </header>
        <form action="" className="formIniciar">
          <label htmlFor="name" className="labelsNC">
            Nombre de usuario o Email:
          </label>
          <input type="text" name="name" id="name" className="inputsNC" />

          <label htmlFor="password" className="labelsNC contr ">
            Contraseña:
          </label>
          <div className="contrContenedor">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              className="inputsNC "
            />
            <img
              src={showPassword ? EyeOpen : EyeClosed}
              alt="Ver contraseña"
              onClick={handleTogglePassword}
              className="ojo"
            />
          </div>
        </form>
        <button className="iniciar">Iniciar Sesión</button>
        <a href="" className="olvidaste">
          ¿Olvidaste tu contraseña?
        </a>
      </div>
    </div>
  );
}

export default Login;
