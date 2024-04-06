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
        <Route path='/actividades/:id' element={<Actividades />} ></Route>
        
      </Route>
    </Routes>
  </BrowserRouter>
)
