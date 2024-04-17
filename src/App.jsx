import LayoutHanami from "./layout/LayoutHanami";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import {
  Actividades,
  Inicio,
  Login,
  PuntoInteres,
  Busqueda,
  Register,
} from "./pages";
import { Switch } from "@mui/material";

export const App = () => {
  return (
    <>
      {/* <LayoutHanami /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/puntosInteres/:id" element={<LayoutHanami><PuntoInteres /></LayoutHanami>}></Route>
          <Route path="/actividades/:id" element={<Actividades />}></Route>

          <Route
            path="/busqueda/:quehacer/:localizacion/:fecha/:flor"
            element={<Busqueda />}
          ></Route>
          <Route path="/" element={<Inicio />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
