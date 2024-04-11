import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Inicio from './pages/Inicio.jsx'
import PuntoInteres from './pages/PuntoInteres.jsx'
import Actividades from './pages/Actividades.jsx'
import LayoutHanami from './layout/LayoutHanami.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>
      {/* login y register tienen que estar fuera de el layout porque
      el navbar el footer no ha de estar presente, si no solo el navBar*/}
      <Route path='/login' element={<Login />} ></Route>
      <Route path='/register' element={<Register />} ></Route>
      <Route path='/' element={<App />}>
        {/* el inicio */}
        <Route index element={<Inicio />} ></Route>

        {/* abajo están las rutas de cada tabla */}
        <Route path='/puntosInteres/:id' element={<PuntoInteres />} ></Route>
        {/* aqui se puede crar la ruta de las temporadas si se requiere */}
        {/* tambien se puede añadir la ruta de los propietarios, segun lo consesemos */}
        <Route path='/actividades/:id' element={<Actividades />} ></Route>

      </Route>
    </Routes>
  </BrowserRouter>
)
