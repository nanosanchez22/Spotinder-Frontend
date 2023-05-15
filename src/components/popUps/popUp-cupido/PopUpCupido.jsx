import React, { useEffect, useState } from 'react'
import "./PopUpCupido.css"
import Swipe1 from '/popUps/cupido-1.svg';
import Swipe2 from '/popUps/cupido-2.svg';
import Swipe3 from '/popUps/cupido-3.svg';
import Swipe4 from '/popUps/cupido-4.svg';
import Swipe5 from '/popUps/cupido-5.svg';
import Swipe6 from '/popUps/cupido-6.svg';

function PopUpCupido({ onClose }) {
  const [currentImage, setCurrentImage] = useState(0);
  const swipeImage = [Swipe1, Swipe2, Swipe3, Swipe4, Swipe5, Swipe6];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % swipeImage.length);
    }, 1000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='popUpCupido'>
        <h2 className='popUpCupido-titulo'>Cupido Musical</h2>
        <div>
          <img src={swipeImage[currentImage]} alt="swipe" />
        </div>
        <p className='popUpCupido-p'>Luego de al menos 2 me gusta, confirma tu selección y crearemos una playlist rápida con los artistas que fueron un match.</p>
        <button className='popUpCupido-entendido' onClick={onClose}>Entendido</button>
        <p className='popUpCupido-noMostrar' onClick={onClose}>No volver a mostrar</p>
        </div>
  )
}

export default PopUpCupido