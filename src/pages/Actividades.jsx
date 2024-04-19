import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { CardContent } from "@mui/material"
import Swiper from '../components/Imagenes/Swiper';
import GridTwo from '../components/Imagenes/GridTwo';
import GridFive from '../components/Imagenes/GridFive';

// constantes
const URL = 'http://localhost:3000/api'

const provisionalImageNames = ['camposLavandaMaxFloracion.jpeg', 'camposMaxFloracionLavandaSol.jpeg', 'casa_campo_olivos.jpeg', 'camposMaxFloracionLavandaSol2.webp']

export const Actividades = () => {
  // la info de la actividad
  const [actividad, setActividad] = useState({})
  // id de la actividad
  const { id } = useParams();
  // donde se almacena el tamaño de la ventana
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // detectar que tamaño de pantalla hay y settear el componente que toca 
  //según el tamaño de pantalla

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let componentToRender;

  if (windowWidth <= 640) {
    componentToRender = <Swiper images={actividad.imagenes}/>;
  } else if (windowWidth <= 1024) {
    componentToRender = <GridTwo images={actividad.imagenes}/>;
  } else {
    componentToRender = <GridFive images={actividad.imagenes}/>;
  }



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
    <div className="mt-4" >
      <CardContent></CardContent>
      <h2 className="text-3xl mb-1"
      >{actividad.nombre}</h2>
      <h4 className="text-[16px] font-medium mb-8"
      >
        {actividad.temporada?.nombre + ' '
          + new Date(actividad.temporada?.fecha_inicio).toLocaleDateString()
          + ' - '
          + new Date(actividad.temporada?.fecha_fin).toLocaleDateString()}
      </h4>
      <h5 className="text-[24px]  mb-2.5"
      >{actividad.temporada?.puntos_intere?.nombre}</h5>
      {/* imagenes */}
      {componentToRender}

      
      {/* <div className="w-full grid grid-cols-2 h-52 bg-slate-900">
        {
          provisionalImageNames.map(image => (
            <img className="overflow-hidden " src={`http://localhost:3000/img/${image}`} ></img>
          ))
        }
      </div> */}

      

      {/* <div className="w-full  h-52
      md:grid md:grid-cols-2 md:gap-2 md:h-60 ">
        <img className="w-full h-52
        md:h-60 "
         src="http://localhost:3000/img/camposLavandaMaxFloracion.jpeg" ></img>
        <div className="w-full h-52
         md:h-60 
         z-30  backdrop-filter backdrop-blur-lg bg-opacity-90" >
          <img className="w-full h-52
          md:h-60 "
           src="http://localhost:3000/img/camposMaxFloracionLavandaSol.jpeg" ></img>
        </div>
      </div> */}
      <p className="text-[16px] mt-2 mb-4 font-medium text-[#3a3a3a] "
      >{actividad.temporada?.puntos_intere?.ubicacion + ', ' + actividad.temporada?.puntos_intere?.poblacion}<a  > - link maps</a></p>
      {/* descripcion */}
      <p className="
      md:text-[17px] text-pretty"
      >{actividad.temporada?.puntos_intere?.descripcion + ' lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis tenetur iusto quis. Ducimus reprehenderit aliquam sunt adipisci repellat? Unde, nobis modi. Eaque '}</p>

    </div>
  )
}

export default Actividades









