import React from "react";
import "./MusicaContexto.css";
import { InputSeleccionar } from "./inputSeleccionar";
import { Generos } from "./generos";
import { Link, useNavigate } from "react-router-dom";

function MusicaContexto() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <main className="mainMusicaContexto">
      <div className="top">
        <button onClick={goBack} className="top_Flecha">
          <img
            className="top_Flecha_ImgFlecha"
            src="/iconos/position=left-1.svg"
            alt="icono de flecha"
          />
        </button>

        <p1 className="top_Titulo">Música Contextual</p1>
      </div>

      <InputSeleccionar
        titulo="¿Cuál es la ocación?"
        opcion1="Actividad"
        opcion2="Ejercicio Físico"
        opcion3="Limpieza"
        opcion4="Celebración"
        opcion5="Dormir"
        opcion6="Meditar"
        opcion7="Social"
        opcion8="Estudiar"
        opcion9="Relajación"
        opcion10="Viajando"
      />
      <InputSeleccionar titulo="¿Cómo te sientes?" opcion1="Estado de ánimo" />
      <InputSeleccionar titulo="¿Cómo esta el clima?" opcion1="Clima" />
      <Generos />
      <button type="submit" className="crearPlaylist_Boton">
        <p>Crear Playlist</p>
      </button>
    </main>
  );
}
export default MusicaContexto;
