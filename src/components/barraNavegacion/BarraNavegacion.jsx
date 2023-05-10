import React from 'react';
import './BarraNavegacion.css';
import HomeActivo from '/iconos/styleFill_stateActive.svg';
import BusquedaInactivo from '/iconos/styleOutline_stateInactive-1.svg';
import PerfilInactivo from '/iconos/styleOutline_stateInactive_add-friendFalse.svg';
import AmigosInactivo from '/iconos/styleOutline_stateInactive-2.svg';

function BarraNavegacion() {
  return (
    <>
    <nav className='nav-bar'>
        <button className='botonNavBar'><img src={HomeActivo} alt="Botón Home " /><p className='pNavegacion'>Inicio</p></button>
        <button className='botonNavBar'><img src={BusquedaInactivo} alt="Botón de Búsqueda" /><p className='pNavegacion'>Buscador</p></button>
        <button className='botonNavBar'><img src={PerfilInactivo} alt="Botón de Perfil" /><p className='pNavegacion'>Perfil</p></button>
        <button className='botonNavBar'><img src={AmigosInactivo} alt="Botón de Amigos" /><p className='pNavegacion'>Amigos</p></button>
      </nav>
    </>
  )
}

export default BarraNavegacion