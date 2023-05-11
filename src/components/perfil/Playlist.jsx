import React from "react";
import "./Playlist.css";

export const Playlist = ({ nombrePlaylist, usuario }) => {
  return (
    <div className="divPlaylist">
      <div
        className="imgPlaylist"
        style={{
          background: 'url("../../../public/imagenes/brand_eyewear.jpg")',
          backgroundSize: "cover",
        }}
      ></div>
      <section className="textPlaylist">
        <p className="pPlaylist1">{nombrePlaylist}</p>
        <p className="pPlaylist2">{usuario}</p>
      </section>
    </div>
  );
};
