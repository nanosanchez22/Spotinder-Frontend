import React, { useEffect, useState } from "react";
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
  };
  const [showPopup, setShowPopup] = useState(true);
  const [cancion, setCancion] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(-1);
  let listaPlaylist = [];

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    mostrarCanciones();
  }, []);
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
        setCurrentIndex(0);
      } else {
        const respuesta = await response.json();
        alert(respuesta.error);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const Carousel = () => {
    return (
      <div>
        <img src={images[currentIndex]} alt="Carousel Image" />
        <button onClick={handleNext}>Next</button>
      </div>
    );
  };

  return (
    <main className="cupidoContenedor">
      {showPopup && <PopUpCupido onClose={closePopup} />}
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
        <div className="cardCupido_ImagenFrente">
          <img
            src={cancion[currentIndex]?.img}
            style={{ maxHeight: "272px", maxWidth: "272px" }}
            alt=""
          />
        </div>
        <div className="contenedorBotonesCard">
          <div className="cardCupido_DivCorazon">
            <img
              className="cardCupido_Corazon"
              onClick={() => {
                setCurrentIndex(currentIndex + 1);
                listaPlaylist.push(cancion[currentIndex].id);
              }}
              src={Corazon}
              alt=""
            />
          </div>
          <div className="cardCupido_DivCruz">
            <img
              className="cardCupido_Cruz"
              onClick={() => {
                setCurrentIndex(currentIndex + 1);
              }}
              src={Cruz}
              alt=""
            />
          </div>
        </div>
        <p className="cardCupido_Nombre">{cancion[currentIndex]?.nombre}</p>
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
}
export default CupidoMusical;
