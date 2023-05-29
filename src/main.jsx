import React from "react";
import ReactDOM from "react-dom/client";
import "./index.sass";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//Componentes de paginação
import App from "./App.jsx";
import Erro from "./pages/Error/Erro";
import CriarDespesa from "./pages/CriarDespesa/CriarDespesa";
import ConsultarDespesas from "./pages/ConsultarDespesas/ConsultarDespesas";
//pagina de rotas (routerDOM)
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Erro />,
    children: [
      {
        path: "/",
        element: <CriarDespesa />,
      },
      {
        path: "/Consulta",
        element: <ConsultarDespesas />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
