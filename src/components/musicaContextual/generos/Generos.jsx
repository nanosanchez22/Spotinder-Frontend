import "./Generos.css";
export const Generos = () => {
  return (
    <div className="contenedorGenero">
      <p className="generos_Titulo">Selecciona hasta 3 géneros:</p>
      <div className="generos_Botones">
        <div className="generos_Division uno">
          <button>
            <p>Rock</p>
          </button>
          <button>
            <p>Country</p>
          </button>
          <button>
            <p>Soul</p>
          </button>
          <button>
            <p>Jazz</p>
          </button>
          <button>
            <p>Blues</p>
          </button>
        </div>
        <div className="generos_Division dos">
          <button>
            <p>Hip-Hop</p>
          </button>
          <button>
            <p>Pop</p>
          </button>
          <button>
            <p>Reggae</p>
          </button>
          <button>
            <p>Folk</p>
          </button>
          <button>
            <p>R&B</p>
          </button>
        </div>

        <div className="generos_Division tres">
          <button>
            <p>Clásico</p>
          </button>
          <button>
            <p>Alternativo</p>
          </button>
          <button>
            <p>Ambiente</p>
          </button>
          <button>
            <p>EDM</p>
          </button>
        </div>

        <div className="generos_Division cuatro">
          <button>
            <p>Electrónica</p>
          </button>
          <button>
            <p>Disco</p>
          </button>
          <button>
            <p>New Age</p>
          </button>
          <button>
            <p>Punk</p>
          </button>
        </div>
      </div>
    </div>
  );
};
