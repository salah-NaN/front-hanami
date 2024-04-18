import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Actividades,
  Inicio,
  Login,
  PuntoInteres,
  Busqueda,
  Register,
} from "./pages";

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<App />}>
  //       {/* el inicio */}
  //       <Route index element={<Inicio />}></Route>
  //       {/* el register y el login */}
  //       <Route path="/login" element={<Login />}></Route>

  //       <Route path="/register" element={<Register />}></Route>
  //       {/* las rutas de cada tabla */}
  //       <Route path="/puntosInteres/:id" element={<PuntoInteres />}></Route>
  //       {/* aqui se puede crar la ruta de las temporadas si se requiere */}
  //       <Route path="/actividades/:id" element={<Actividades />}></Route>

  //       <Route
  //         path="/busqueda/:quehacer/:localizacion/:fecha/:flor"
  //         element={<Busqueda />}
  //       ></Route>
  //       {/* <Route path='/puntos_interes/mapa/:localidad/:fecha/:flor' element={<Mapa />} ></Route>
  //        <Route path='/actividades/mapa/:localidad/:fecha/:flor' element={<Mapa />} ></Route> */}
  //     </Route>
  //   </Routes>
  // </BrowserRouter>
);
