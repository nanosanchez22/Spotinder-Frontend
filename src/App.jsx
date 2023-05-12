import "./App.css";
import BarraNavegacion from "./components/barraNavegacion/BarraNavegacion";
<<<<<<< HEAD
import { BrowserRouter as Router } from "react-router-dom";
import ContenidoPrincipal from "./routes/ContenidoPrincipal";

function App() {
  return (
    <Router>
      <ContenidoPrincipal></ContenidoPrincipal>
      <BarraNavegacion />
    </Router>
=======
import Home from "./components/home/Home";
import Inicio from "./components/inicio/Inicio";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
      <BarraNavegacion></BarraNavegacion>
    </>
>>>>>>> 3683eeb8d16ee68a6d68e8aba7036870394426d4
  );
}

export default App;
