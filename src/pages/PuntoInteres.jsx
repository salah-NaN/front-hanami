import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../components";
// constantes
const URL = "http://localhost:3000/api";
export const PuntoInteres = () => {
  const [puntoInteres, setPuntoInteres] =useState({})
  const {id} = useParams()
  
  
  useEffect(() => {

          fetch(URL + '/punto_interes_page/' + id)
            .then(res => res.json())
            .then(res => {
               setPuntoInteres(res)
              })
              .catch(err => console.log(err))
    }, [])

    
    useEffect(()=>{

      console.log('asdfasdf',puntoInteres)

    },[puntoInteres])

    // el fetch contiene la info del Pdi 
    // contiene la info de que flores tiene
    // contiene el propietaraio asociado
    // contiene las imágenes asociadas
    // contiene las temporadas asociadas
    // contiene las actividades asociadas a las temporadas

    return(
<div className="w-11/12 mx-auto mt-20" >
 
   <div>
    <h2 className="text-3xl mb-1"
      >{puntoInteres.nombre}</h2></div> 
      
      
{        puntoInteres?.temporadas?.map(t=> (
          <h4 className="text-[15px] mb-8">     
                {t.nombre+ ' '+
                  new Date(t?.fecha_inicio).toLocaleDateString()
                  + ' - '
                  + new Date(t?.fecha_fin).toLocaleDateString()}
          </h4>  
        ))}
      <div className="w-full h-52 bg-slate-900"></div>
      <p className="text-[16px] mt-1 mb-4"
      >{puntoInteres.ubicacion + ', ' + puntoInteres.poblacion}</p>
      <p className=""
      >{puntoInteres.descripcion + ' lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis tenetur iusto quis. Ducimus reprehenderit aliquam sunt adipisci repellat? Unde, nobis modi. Eaque '}</p>
  
    </div>
    )
}

export default PuntoInteres;

