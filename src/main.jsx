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
// import LayoutHanami from './layout/LayoutHanami.jsx'
import Mapa from './components/mapa/Mapa.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        {/* el inicio */}
        <Route index element={ <Inicio/> } ></Route>
        {/* el register y el login */}
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/register' element={<Register />} ></Route>
        {/* las rutas de cada tabla */}
        <Route path='/puntosInteres/:id' element={<PuntoInteres />} ></Route>
        {/* aqui se puede crar la ruta de las temporadas si se requiere */}
        <Route path='/actividades/:id' element={<Actividades />} ></Route>

        <Route path='/mapa/:quehacer/:localidad/:fecha/:flor' element={<Mapa />} ></Route>
        {/* <Route path='/puntos_interes/mapa/:localidad/:fecha/:flor' element={<Mapa />} ></Route>
        <Route path='/actividades/mapa/:localidad/:fecha/:flor' element={<Mapa />} ></Route> */}
      </Route>
    </Routes>
  </BrowserRouter>
)
