import React, { useState } from "react";
import "./Login.css";
import FlechaAtras from "/iconos/positionLeft-1.svg";
import EyeClosed from "/iconos/stateClosed.svg";
import EyeOpen from "/iconos/stateOpen.svg";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const iniciarSesion = async (event) => {
    event.preventDefault();
    const body = { usuario: user, contraseña: pass };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(body);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:8000/api/login",
        requestOptions
      );
      if (response.ok) {
        const respuesta = await response.json();
        localStorage.setItem("token", respuesta.token);
        /*  alert(respuesta.message); */
        navigate("/home");
      } else {
        const respuesta = await response.json();
        alert(respuesta.error);
      }
    } catch (error) {
      alert(error.message);
    }

    /* fetch("http://localhost:8000/api/login", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        
      })

      .catch((error) => console.log("error", error)); */
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
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
          <p className="pHeader">Iniciar Sesión</p>
        </header>
        <form action="" className="formIniciar">
          <label htmlFor="name" className="labelsNC">
            Nombre de usuario o Email:
          </label>
          <input
            onChange={(e) => {
              setUser(e.target.value);
            }}
            value={user}
            type="text"
            name="name"
            id="name"
            className="inputsNC"
          />

          <label htmlFor="password" className="labelsNC contr ">
            Contraseña:
          </label>
          <div className="contrContenedor">
            <input
              onChange={(e) => {
                setPass(e.target.value);
              }}
              value={pass}
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

        <button onClick={iniciarSesion} className="iniciar">
          Iniciar Sesión
        </button>

        <Link to="../recuperar">
          <a href="" className="olvidaste">
            ¿Olvidaste tu contraseña?
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Login;
