import LayoutHanami from "./layout/LayoutHanami";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import {
  Actividades,
  Inicio,
  Login,
  PuntoInteres,
  BusquedaActividad,
  Busqueda,
  Register,
} from "./pages";
import { NavBar } from "./components";

export const App = () => {
  return (
    <>
      {/* <LayoutHanami /> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/puntosInteres/:id"
            element={
              <LayoutHanami>
                <PuntoInteres />
              </LayoutHanami>
            }
          ></Route>
          <Route
            path="/actividades/:id"
            element={
              <LayoutHanami>
                <Actividades />
              </LayoutHanami>
            }
          ></Route>
          <Route
            path="/busqueda/:quehacer/:localizacion/:fecha/:flor"
            element={
                <Busqueda />}
          ></Route>
          <Route path="/" element={<Inicio />}></Route>

        <Route path='/actividades/:quehacer/:localizacion/:fecha/:flor' element={              
              <LayoutHanami>
                <BusquedaActividad />
              </LayoutHanami>}
        ></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;


/* 
  <BrowserRouter>
     <Routes>


         </Routes>



*/