import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

// constantes
const URL = 'http://localhost:3000/api'

export const Actividades = () => {
  const [actividad, setActividad] = useState({})
  const { id } = useParams();
  
   // fetch para sacar la información de la actividad específica
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
    fetch(URL + '/actividad_page/' + id, options)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setActividad(res)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="w-11/12 mx-auto" >
      <h2 className="text-3xl mb-1"
      >{actividad.nombre}</h2>
      <h4 className="text-[15px] mb-8"
      >
        {actividad.temporada?.nombre + ' ' 
        + new Date(actividad.temporada?.fecha_inicio).toLocaleDateString()
        + ' - '
        + new Date(actividad.temporada?.fecha_fin).toLocaleDateString()}
      </h4>
      <h5 className="text-[24px] mb-2"
      >{actividad.temporada?.puntos_intere?.nombre}</h5>
      <div className="w-full h-52 bg-slate-900"></div>
      <p className="text-[16px] mt-1 mb-4"
      >{actividad.temporada?.puntos_intere?.ubicacion + ', ' + actividad.temporada?.puntos_intere?.poblacion}</p>
      <p className=""
      >{actividad.temporada?.puntos_intere?.descripcion + ' lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis tenetur iusto quis. Ducimus reprehenderit aliquam sunt adipisci repellat? Unde, nobis modi. Eaque '}</p>

    </div>
  ) 
}

export default Actividades
