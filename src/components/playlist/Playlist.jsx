import React, { useState } from "react";
import "./Playlist.css";
import FlechaAtras from "/iconos/positionLeft-1.svg";
import TresPuntos from "/iconos/positionVertical.svg";
import History from "/iconos/stateActive.svg";
import Copia from "/iconos/styleOutline_stateActive-6.svg";
import Verificado from "/iconos/verified.svg";
import LogoChico from "/iconos/logo-small.svg";
import Compartir from "/iconos/compartir.svg";
import Mezclar from "/iconos/shuffle.svg";
import BotonPlay from "/iconos/play-btn.svg";
import ImagenPrueba from "/imagenes/brand_eyewear.jpg";
import { useNavigate } from "react-router";
import MiniCard from "../miniCard/MiniCard";

function Playlist() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const [cancion, setCancion] = useState([]);

  const mostrarCanciones = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:8000/api/canciones",
        requestOptions
      );
      if (response.ok) {
        const respuesta = await response.json();
        setCancion(respuesta.canciones);
      } else {
        const respuesta = await response.json();
        alert(respuesta.error);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <header className="playlist-cupido">
        <img onClick={goBack} src={FlechaAtras} alt="" />
        <div className="contenedor-texto">
          <p className="generada">Generada del Cupido Musical</p>
          <h2 className="playlist-generada">Playlist Generada</h2>
        </div>
        <img src={TresPuntos} alt="" className="tresPuntos" />
      </header>
      <div className="playlist-cover">
        <img src={ImagenPrueba} alt="" className="cover1" />
        <img src={ImagenPrueba} alt="" className="cover2" />
        <img src={ImagenPrueba} alt="" className="cover3" />
        <img src={ImagenPrueba} alt="" className="cover4" />
      </div>
      <div className="logo-compartir-duracion">
        <img src={LogoChico} alt="" />
        <img src={Verificado} alt="" className="verificado" />
        <img src={Compartir} alt="" />
        <p className="tiempo">1h 19m</p>
        <img src={History} alt="" className="historial-icono" />
      </div>
      <div className="play-copia">
        <img src={Copia} alt="" />
        <h2 className="crearCopia">Crear Copia</h2>
        <img src={Mezclar} alt="" className="mezclar-btn" />
        <img src={BotonPlay} alt="" />
      </div>
      <main className="playlist">
        <div className="contenedor-miniCards" {...mostrarCanciones()}>
          {cancion.map((cancion) => {
            return <MiniCard canciones={cancion}></MiniCard>;
          })}
        </div>
      </main>
    </div>
  );
}

export default Playlist;
