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
  MiPerfil
} from "./pages";
import { NavBar } from "./components";

export const App = () => {
  return (
    <>
      {/* <LayoutHanami /> */}
      <BrowserRouter>
        <Routes>
        <Route
            path="/register"
            element={
              <div>
                <NavBar/>
                <Register />
              </div>

            }
          ></Route>
          <Route
            path="/login"
            element={
              <div>
                <NavBar/>
                <Login />
              </div>
            }
          ></Route>
          <Route
            path="/miperfil"
            element={
              <LayoutHanami>
                <MiPerfil />
              </LayoutHanami>
            }
          ></Route>
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