import React from "react";
import "./Home.css";
import Historial from "/iconos/stateActive.svg";
import CampanaNotificaciones from "/iconos/styleOutline_stateActive_notificationTrue.svg";
import Cupido1 from "/cupido/cupido-1.svg";
import MusicaContextual1 from "/musicaContextual/musicaContextual-1.svg";

function Home() {
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
            <img src={CampanaNotificaciones} alt="Campana de notificaciones" />
          </button>
        </div>
      </header>
      <main className="contenedorBotones">
        <button className="botonMusicaYa">
          <img className="cupidoimg" src={Cupido1} />
          <div className="textoMusicaYa">
            <h2 className="cupidohl">Cupido Musical</h2>
            <p className="pMusic">
              Tus artistas favoritos nunca van a dejarte con el corazón roto.
            </p>
          </div>
        </button>
        <button className="botonMusicaYa">
          <img className="contextualimg" src={MusicaContextual1} />
          <div className="textoMusicaYa">
            <h2 className="contextohl">Música Contextual</h2>
            <p className="pMusic">
              Creamos la playlist perfecta para cualquier situación.
            </p>
          </div>
        </button>
      </main>
    </div></div>
  );
}

export default Home;
