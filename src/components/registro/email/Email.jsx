import React, { useState } from "react";
import "./Email.css";
import { Link, useNavigate } from "react-router-dom";

function Email() {
  const [mail, setMail] = useState("");
  const navigate = useNavigate();

  /*  const validarEmail = async ()=>{
    const resultado = await knex.select("email").from("usuarios")
    if (// mail not in resultado){

    }

  } */

  const nav = () => {
    localStorage.setItem("mail", mail);
    navigate("/registro/usuario");
  };

  return (
    <>
      <h1 className="pregunta">¿Cuál es tu correo electrónico?</h1>
      <form action="" className="formEmail">
        <label htmlFor="email" className="labelEmail">
          Correo electrónico:
        </label>
        <input
          onChange={(event) => {
            setMail(event.target.value);
          }}
          value={mail}
          type="email"
          className="inputEmail"
        />
        <p className="mensajeEmail">Deberás poder confirmarlo luego.</p>

        <button onClick={nav} className="continuar">
          Continuar{" "}
        </button>
      </form>
    </>
  );
}

export default Email;
