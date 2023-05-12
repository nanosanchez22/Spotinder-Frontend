import "./App.css";
import BarraNavegacion from "./components/barraNavegacion/BarraNavegacion";
import { BrowserRouter as Router } from "react-router-dom";
import ContenidoPrincipal from "./routes/ContenidoPrincipal";

function App() {
  return (
    <Router>
      <ContenidoPrincipal></ContenidoPrincipal>
      <BarraNavegacion />
    </Router>
  );
}

export default App;
