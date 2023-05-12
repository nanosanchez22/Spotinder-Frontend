import "./Perfil.css";
import { Playlist } from "./Playlist";

function Perfil() {
  return (
    <>
      <div className="fotoPerfil"></div>
      <button className="config">
        <img
          className="configSVG"
          src="./iconos/style=outline, state=Default.svg"
          alt=""
        />
      </button>

      <p className="nombre">Cristiano Ronaldo</p>
      <p className="usuario">@CR7</p>

      <div className="divider">
        <p className="dividerText">Mis Playlists</p>
        <p className="dividerSVG"></p>
        <button className="dividerBoton">
          <p>Crear Playlist</p>
        </button>
      </div>
      <div className="divPlaylists">
        <Playlist nombrePlaylist="Me fui de gira Mabel" usuario="@CR7" />
      </div>
    </>
  );
}
export default Perfil;
