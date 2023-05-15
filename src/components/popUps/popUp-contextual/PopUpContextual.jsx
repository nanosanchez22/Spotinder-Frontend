import React, { useEffect, useState } from 'react';
import "./PopUpContextual.css"
import Contextual1 from '/popUps/contextual-1.svg';
import Contextual2 from '/popUps/contextual-2.svg';
import Contextual3 from '/popUps/contextual-3.svg';
import Contextual4 from '/popUps/contextual-4.svg';
import Contextual5 from '/popUps/contextual-5.svg';
import Contextual6 from '/popUps/contextual-6.svg';
import Contextual7 from '/popUps/contextual-7.svg';
import Contextual8 from '/popUps/contextual-8.svg';
import Contextual9 from '/popUps/contextual-9.svg';


function PopUpContextual({onClose}) {
  const [currentImage, setCurrentImage] = useState(0);
  const contextualImage = [Contextual1, Contextual2, Contextual3, Contextual4, Contextual5, Contextual6, Contextual7, Contextual8, Contextual9];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % contextualImage.length);
    }, 1000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='popUpContextual'>
        <h2 className='popUpContextual-titulo'>Música Contextual</h2>
        <div>
          <img src={contextualImage[currentImage]} alt="swipe" />
        </div>
        <p className='popUpContextual-p'>LLena cuantos campos quieras y crearemos una playlist en base a tus respuestas.</p>
        <button className='popUpContextual-entendido' onClick={onClose}>Entendido</button>
        <p className='popUpContextual-noMostrar' onClick={onClose}>No volver a mostrar</p>
        </div>
  )
}

export default PopUpContextual