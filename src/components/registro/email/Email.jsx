import React from "react";
import "./Email.css"

function Email() {
  return (
    <>
      <h1 className="pregunta">¿Cuál es tu correo electrónico?</h1>
      <form action="" className="formEmail">
        <label htmlFor="email" className="labelEmail">
          Correo electrónico:
        </label>
        <input type="email" className="inputEmail" />
        <p className="mensajeEmail">Deberás poder confirmarlo luego.</p>
      </form>
    </>
  );
}

export default Email;
