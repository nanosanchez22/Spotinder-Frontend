import { useNavigate } from "react-router";
import "./Configuracion.css";
import FlechaAtras from "/iconos/positionLeft-1.svg";
const Configuracion = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="configuracion">
      <header className="headerCrearCuenta">
        <img
          onClick={goBack}
          src={FlechaAtras}
          alt="Ir hacia atras"
          className="atras"
        />
        <p className="pHeader">Configuración</p>
      </header>
      <button className="botonEditarA">
        <p className="pEditarA">Editar Apariencia</p>
      </button>
      <button className="botonEditarP">
        <p className="pEditarP">Editar Perfil</p>
      </button>

      <p className="pVersion">Version V1.15.03</p>
      <button className="botonCerrarSesion">Cerrar Sesión</button>
    </div>
  );
};
export default Configuracion;
