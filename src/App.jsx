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
  MisResenias
} from "./pages";
import { NavBar } from "./components";
import { useState } from "react";
import ClienteContext from "./context/ClienteContext";


export const App = () => {

  const [log, setLog] = useState({ cliente_id: -1, cliente_nombre: '' })


  return (
    <ClienteContext.Provider value={{ log, setLog }}>
      {/* <LayoutHanami /> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/register"
            element={
              <Register />
            }
          ></Route>
          <Route
            path="/login"
            element={

              <Login />
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
    </ClienteContext.Provider>

  );
};

export default App;


/* 
  <BrowserRouter>
     <Routes>


         </Routes>



*/