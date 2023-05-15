import React, { useEffect, useState } from "react";
import "./Home.css";
import Historial from "/iconos/stateActive.svg";
import CampanaNotificaciones from "/iconos/styleOutline_stateActive_notificationTrue.svg";
import Cupido1 from "/cupido/cupido-1.svg";
import Cupido2 from "/cupido/cupido-2.svg";
import Cupido3 from "/cupido/cupido-3.svg";
import Cupido4 from "/cupido/cupido-4.svg";
import Cupido5 from "/cupido/cupido-5.svg";
import Cupido6 from "/cupido/cupido-6.svg";
import MusicaContextual1 from "/musicaContextual/musicaContextual-1.svg";
import MusicaContextual2 from "/musicaContextual/musicaContextual-2.svg";
import MusicaContextual3 from "/musicaContextual/musicaContextual-3.svg";
import MusicaContextual4 from "/musicaContextual/musicaContextual-4.svg";
import MusicaContextual5 from "/musicaContextual/musicaContextual-5.svg";
import MusicaContextual6 from "/musicaContextual/musicaContextual-6.svg";
import { Link } from "react-router-dom";

function Home() {
  const [currentImageC, setCurrentImageC] = useState(0);
  const [currentImageM, setCurrentImageM] = useState(0);
  const cupidoImages = [Cupido1, Cupido2, Cupido3, Cupido4, Cupido5, Cupido6];
  const imagenesContextuales = [
    MusicaContextual1,
    MusicaContextual2,
    MusicaContextual3,
    MusicaContextual4,
    MusicaContextual5,
    MusicaContextual6,
  ];

   useEffect(() => {
    const cupidoInterval = setInterval(() => {
      setCurrentImageC((prevImage) =>
        prevImage === cupidoImages.length - 1 ? 0 : prevImage + 1
      );
    }, 500);

    const musicaContextualInterval = setInterval(() => {
      setCurrentImageM((prevImage) =>
        prevImage === imagenesContextuales.length - 1 ? 0 : prevImage + 1
      );
    }, 500);

    return () => {
      clearInterval(cupidoInterval);
      clearInterval(musicaContextualInterval);
    };
  }, []);

  return (
    <div className="centrar">
      <div className="homePage">
        <header className="enLinea">
          <h1 className="musicaYa">Música ya</h1>
          <div className="botonesHeader">
            <button className="botonHeader">
              <img src={Historial} alt="Historial" />
            </button>
            <button className="botonHeader">
              <img
                src={CampanaNotificaciones}
                alt="Campana de notificaciones"
              />
            </button>
          </div>
        </header>
        <main className="contenedorBotones">

<Link to="/cupidoMusical" className="link">
          <button className="botonMusicaYa">
            <img
              className="cupidoimg"
              src={cupidoImages[currentImageC]}
              alt="Cupido"
            />
            <div className="textoMusicaYa">
              <h2 className="cupidohl">Cupido Musical</h2>
              <p className="pMusic">
                Tus artistas favoritos nunca van a dejarte con el corazón roto.
              </p>
            </div>
          </button>
  </Link>
<Link to="/musicaContextual" className="link">
          <button className="botonMusicaYa">
            <img className="contextualimg" src={imagenesContextuales[currentImageM]} />
            <div className="textoMusicaYa">
              <h2 className="contextohl">Música Contextual</h2>
              <p className="pMusic">
                Creamos la playlist perfecta para cualquier situación.
              </p>
            </div>
          </button>
</Link>

        </main>
      </div>
    </div>
  );
}

export default Home;
