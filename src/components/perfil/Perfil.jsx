import "./Perfil.css";
import { Playlist } from "./Playlist";
export const Perfil = () => {
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

      <p1 className="nombre">Cristiano Ronaldo</p1>
      <p3 className="usuario">@CR7</p3>

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
};
