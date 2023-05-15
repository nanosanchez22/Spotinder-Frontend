import React, { useState } from "react";
import "./CupidoMusical.css";
import Cruz from "/iconos/cruzSi.svg";
import Corazon from "/iconos/corazon.svg";
import Matches from "/iconos/matches.svg";
import { useNavigate } from "react-router";
import PopUpCupido from "../popUps/popUp-cupido/popUpCupido";


function CupidoMusical() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <main className="cupidoContenedor">
    {showPopup && <PopUpCupido onClose={closePopup}/>}
    {showPopup && <div className="overlay"></div>}
      <div className="cupidoMusicalTop">
        <section className="cupidoMusicalSection">
          <p className="cupidoMusicalTexto">Cupido Musical</p>
        </section>
        <section className="cupidoMusicalFlecha">
          <img
            onClick={goBack}
            className="img_cupidoMusicalFlecha"
            src="./iconos/positionLeft-1.svg"
            alt="flecha atras"
          />
        </section>
      </div>
      <div className="cardCupido">
        <div className="cardCupido_ImagenDerecha"></div>
        <div className="cardCupido_ImagenIzquierda"></div>
        <div className="cardCupido_ImagenFrente"></div>
        <div className="cardCupido_Imagen2"></div>
        <div className="cardCupido_Imagen3"></div>

        <div className="cardCupido_DivCorazon">
          <img className="cardCupido_Corazon" src={Corazon} alt="" />
        </div>
        <div className="cardCupido_DivCruz">
          <img className="cardCupido_Cruz" src={Cruz} alt="" />
        </div>
        <p className="cardCupido_NombreSi">Musica</p>
        <p className="cardCupido_Nombre">Musica que se muestra</p>
        <p className="cardCupido_NombreNo"></p>
      </div>
      <p className="pMatches">Marches actuales:</p>
      <section className="sectionMatches">
        <img className="imgMatches" src={Matches} alt="" />
      </section>
      <img
        className="imgArtista"
        src="public\imagenes\brand_eyewear.jpg"
        alt=""
      />

      <button
        onClick={() => navigate("/cupidoMusical/crearPlaylist")}
        className="cardCupido_boton"
      >
        <p className="cardCupido_botonTexto">Crear Playlist</p>
      </button>
    </main>
  );
};
export default CupidoMusical;
