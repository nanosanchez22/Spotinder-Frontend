import React from "react";
import "./MusicaContexto.css";
import { InputSeleccionar } from "./inputSeleccionar";
import { Generos } from "./generos";
function MusicaContexto() {
  return (
    <main className="mainContenedor">
      <div className="top">
        <button className="flecha">
          <img src="/public/iconos/position=left-1.svg" alt="" />
        </button>
        <p1 className="tituloTop">Música Contextual</p1>
      </div>

      <InputSeleccionar
        className="divSelector"
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
      <InputSeleccionar
        className="divSelector"
        titulo="¿Cómo te sientes?"
        opcion1="Estado de ánimo"
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
      <InputSeleccionar
        className="divSelector"
        titulo="¿Cómo esta el clima?"
        opcion1="Clima"
      />
      <Generos />
      <button type="submit" className="crearPlaylist">
        <p>Crear Playlist</p>
      </button>
    </main>
  );
}
export default MusicaContexto;
