import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/home/Home.jsx";
import Perfil from "../components/perfil/Perfil.jsx";
import BarraNavegacion from "../components/barraNavegacion/BarraNavegacion.jsx";

// importar componentes de busqueda, perfil
// y un error de 404 para la pagina de amigos

function ContenidoPrincipal() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      {/* <Route path="/buscador" component={Busqueda} /> */}
      <Route exact path="/perfil">
        <Perfil />
      </Route>
      {/* <Route path="/amigos" component={error} /> */}
    </Switch>
  );
}

export default ContenidoPrincipal;


