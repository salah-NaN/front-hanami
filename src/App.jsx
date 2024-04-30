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
  MiPerfil,
  MisResenias,
} from "./pages";
import { NavBar } from "./components";
import { useState } from "react";
import ClienteContext from "./context/ClienteContext";
import BusquedaPrueba from "./pages/BusquedaPrueba";

export const App = () => {
  const [log, setLog] = useState({ cliente_id: -1, cliente_nombre: "" });
  const [popUpFilter, setPopUpFilter] = useState(false);

  const togglePopUpFilter = (value) => {
    
    setPopUpFilter(!popUpFilter);
  };

  return (
    <ClienteContext.Provider
      value={{ log, setLog, togglePopUpFilter, popUpFilter }}
    >
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
            path="/misResenias/:clienteId"
            element={
              <LayoutHanami>
                <MisResenias />
              </LayoutHanami>
            }
          ></Route>
          <Route
            path="/busqueda/:quehacer/:localizacion/:fecha/:flor"
            element={
              <LayoutHanami>
                <BusquedaPrueba />
                {/* <Busqueda /> */}
              </LayoutHanami>
            }
          ></Route>
          <Route path="/" element={<Inicio />}></Route>

          <Route
            path="/actividades/:quehacer/:localizacion/:fecha/:flor"
            element={
              <LayoutHanami>
                <BusquedaActividad />
              </LayoutHanami>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </ClienteContext.Provider>
  );
};

export default App;

/* 
  <BrowserRouter>
     <Routes>


         </Routes>



*/
