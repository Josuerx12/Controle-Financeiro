import { Outlet } from "react-router-dom";

import "./App.sass";
import NavbarMenu from "./components/NavbarMenu/NavbarMenu";

const App = () => {
  return (
    <div className="App">
      <NavbarMenu />
      <h1>Controle Financeiro</h1>
      <Outlet />
    </div>
  );
};

export default App;
