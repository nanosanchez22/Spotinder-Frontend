import "./App.css";
import BarraNavegacion from "./components/barraNavegacion/BarraNavegacion";
import Home from "./components/home/Home";
import Registro from "./components/registro/Registro";
import Inicio from "./components/inicio/Inicio";
import MusicaContexto from "./components/musicaContextual/MusicaContexto";
import Perfil from "./components/perfil/Perfil";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContenidoPrincipal from "./routes/ContenidoPrincipal";


function App() {
  return (
    <Router>
      <ContenidoPrincipal></ContenidoPrincipal>
        <BarraNavegacion />
    </Router>

  );
};

export default App;
