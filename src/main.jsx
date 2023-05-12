import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Registro from "./components/registro/Registro.jsx";
import Perfil from "./components/perfil/Perfil.jsx";
import Home from "./components/home/Home.jsx";
import Email from "./components/registro/email/Email.jsx";
import NombreContr from "./components/registro/nombreContr/NombreContr.jsx";
import Inicio from "./components/inicio/Inicio.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, path: "/home", element: <Home /> },
      { path: "/perfil", element: <Perfil /> },
    ],
  },
  /*   { path: "/registro", element: <Registro /> },
  { path: "/usuario-contraseña", element: <NombreContr /> }, */
  {
    path: "/registro",
    element: <Registro />,
    children: [
      { index: true, path: "email", element: <Email /> },
      { path: "usuario", element: <NombreContr /> },
    ],
  },
  { path: "inicio", element: <Inicio /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
