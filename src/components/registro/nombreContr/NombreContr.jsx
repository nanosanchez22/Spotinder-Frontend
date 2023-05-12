import React, { useState } from "react";
import "./NombreContr.css";
import EyeClosed from "/iconos/stateClosed.svg";
import EyeOpen from "/iconos/stateOpen.svg";
import Checkbox from "/iconos/checkbox.svg";
import CheckboxChecked from "/iconos/checkbox-checked.svg";
import { Link, useNavigate } from "react-router-dom";

function NombreContr() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
    localStorage.getItem;
  };

  const handlePassword = (e) => {
    const inputValue = e.target.value;
    setPassword(inputValue);
    setIsPasswordValid(inputValue.length >= 8);
  };

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const handlePasswordBlur = () => {
    setPasswordFocused(false);
  };

  const registrar = async (event) => {
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      nombre: name,
      usuario: name,
      email: localStorage.getItem("mail"),
      contraseña: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:8000/api/registrar",
        requestOptions
      );
      if (response.ok) {
        const respuesta = await response.json();
        alert("El usuario ha sido registrado.");
        navigate("/inicio");
      } else {
        const respuesta = await response.json();
        alert(respuesta.error);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <h1 className="pregunta">Ingresa un nombre de usuario y contraseña.</h1>
      <form action="" className="formNombreContr">
        <label htmlFor="name" className="labelsNC">
          Nombre de usuario:
        </label>
        <input
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          type="text"
          name="name"
          className="inputsNC"
        />

        <label
          htmlFor="password"
          className={`labelsNC contr ${
            password.length > 0 ? (isPasswordValid ? "" : "invalid") : ""
          }`}
        >
          Contraseña:
        </label>
        <div className="contrContenedor">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              handlePassword;
            }}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            name="password"
            className={`inputsNC ${
              !passwordFocused && !isPasswordValid && password.length > 0
                ? "invalid"
                : ""
            }`}
            minLength={8}
          />
          <img
            src={showPassword ? EyeOpen : EyeClosed}
            alt="Ver contraseña"
            onClick={handleTogglePassword}
            className="ojo"
          />
        </div>
        <p
          className={`mensajeC ${
            isPasswordValid === null
              ? ""
              : isPasswordValid
              ? "valid"
              : "invalid"
          }`}
        >
          Deberá contener al menos 8 caracteres.
        </p>

        <div>
          <input
            type="checkbox"
            name="checkbox"
            checked={isChecked}
            onChange={handleChange}
            id="checkbox"
            className="checkbox"
          />
          <img
            src={isChecked ? CheckboxChecked : Checkbox}
            alt="Checkbox"
            className="nuevoCheckbox"
          />
          <label htmlFor="checkbox" className="leido-acepto">
            He leído y acepto los{" "}
            <a href="" className="TyC">
              Términos
            </a>{" "}
            y{" "}
            <a href="" className="TyC">
              Condiciones
            </a>
          </label>
        </div>

        <button onClick={registrar} className="continuar">
          Continuar{" "}
        </button>
      </form>
    </>
  );
}

export default NombreContr;
