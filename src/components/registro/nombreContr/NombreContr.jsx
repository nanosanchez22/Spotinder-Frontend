import React, { useState } from "react";
import "./NombreContr.css";
import EyeClosed from "/iconos/stateClosed.svg";
import EyeOpen from "/iconos/stateOpen.svg";
import Checkbox from "/iconos/checkbox.svg";
import CheckboxChecked from "/iconos/checkbox-checked.svg";

function NombreContr() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
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

  return (
    <>
      <h1 className="pregunta">Ingresa un nombre de usuario y contraseña.</h1>
      <form action="" className="formNombreContr">
        <label htmlFor="name" className="labelsNC">
          Nombre de usuario:
        </label>
        <input type="text" name="name" className="inputsNC" />

        <label
          htmlFor="password"
          className={`labelsNC contr ${password.length > 0 ? (isPasswordValid ? "" : "invalid") : ""}`}
        >
          Contraseña:
        </label>
        <div className="contrContenedor">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePassword}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            name="password"
            className={`inputsNC ${!passwordFocused && !isPasswordValid && password.length > 0 ? "invalid" : ""}`}
            minLength={8}
          />
          <img
            src={showPassword ? EyeOpen : EyeClosed}
            alt="Ver contraseña"
            onClick={handleTogglePassword}
            className="ojo"
          />
        </div>
        <p className={`mensajeC ${isPasswordValid === null ? "" : isPasswordValid ? "valid" : "invalid"}`}>
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
      </form>
    </>
  );
}

export default NombreContr;
