import "./MusicaContexto.css";
import { Link, useNavigate } from "react-router-dom";
import PopUpContextual from "../popUps/popUp-contextual/popUpContextual";
import { useState } from "react";

import { Generos } from "./generos/generos";
import { InputSeleccionar } from "./input/inputSeleccionar";

function MusicaContexto() {
  const [showPopup, setShowPopup] = useState(true);
  const navigate = useNavigate();

  const closePopup = () => {
    setShowPopup(false);
  };
  const goBack = () => {
    navigate(-1);
  };

  return (
    <main className="mainMusicaContexto">
      {showPopup && <PopUpContextual onClose={closePopup} />}
      {showPopup && <div className="overlay"></div>}
      <div className="top">
        <button onClick={goBack} className="top_Flecha">
          <img
            className="top_Flecha_ImgFlecha"
            src="\iconos\positionLeft-1.svg"
            alt="icono de flecha"
          />
        </button>

        <p className="top_Titulo">Música Contextual</p>
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
