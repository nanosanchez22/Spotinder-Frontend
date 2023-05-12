import "./App.css";
import BarraNavegacion from "./components/barraNavegacion/BarraNavegacion";
import Home from "./components/home/Home";
import Inicio from "./components/inicio/Inicio";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
      <BarraNavegacion></BarraNavegacion>
    </>
  );
}

export default App;
