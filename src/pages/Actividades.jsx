import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { CardContent } from "@mui/material"
import Swiper from '../components/Imagenes/Swiper';
import GridTwo from '../components/Imagenes/GridTwo';
import GridFive from '../components/Imagenes/GridFive';
import ModalAniadirResenia from "../components/resenias/ModalAniadirResenia";
import Resenia from "../components/resenias/Resenia"
import estrella from '../assets/estrella.svg'
import profileChecked from '../assets/user-badge-check.svg'



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
  // modal de añadir reseña
  const [modalVisible, setModalVisible] = useState(false)
  // state para estadísticas de reseña 
  const [datosResenia, setDatosResenia] = useState({ media: -1, numResenias: -1 })

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
    componentToRender = <Swiper images={actividad.imagenes} />;
  } else if (windowWidth <= 900) {
    componentToRender = <GridTwo images={actividad.imagenes} />;
  } else {
    componentToRender = <GridFive images={actividad.imagenes} />;
  }



  // fetch para sacar la información de la actividad específica
  useEffect(() => {

    fetch(URL + '/actividad_page/' + id)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setActividad(res)
        const numResenias = res.resenias.length
        let sumaPuntuacion = 0
        const media = res.resenias.forEach(r => {
          sumaPuntuacion += r.puntuacion
        })
        setDatosResenia({ media: sumaPuntuacion / numResenias, numResenias })
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div className="mt-20" >
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
        {/* contenedor contenido y contacto */}
        <div className="flex flex-col mt-3
      md:flex-row md:justify-between ">
          <div className="w-full
        md:w-7/12" >
            {/* direccion y ubicacion */}
            <p className="text-[17px] font-semibold mt-3 "
            >{actividad.temporada?.puntos_intere?.ubicacion + ' · ' + actividad.temporada?.puntos_intere?.poblacion}</p>
            {/* valoraciones */}
            <div className="flex items-center mt-1.5 mb-3">
              <img className="size-6"
                src={estrella} ></img>
              <p className="pt-0.5 text-[17px] font-semibold" >{datosResenia && (datosResenia.media.toFixed(2).replace('.', ',') + ' · ' + datosResenia.numResenias + ' ')}</p>
              <a className="pt-0.5 text-[17px] font-semibold underline underline-offset-1 ml-1.5 cursor-pointer">evaluaciones</a>
            </div>

            <hr></hr>
            {/* descripcion */}
            <p className="text-[16px] text-[#4a4a4a] mt-4 text-pretty leading-6"
            >{actividad.temporada?.puntos_intere?.descripcion + ' lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis tenetur iusto quis. Ducimus reprehenderit aliquam sunt adipisci repellat? Unde, nobis modi. Eaque '}</p>
          </div>
          {/* contacto */}
          <div className="flex flex-col w-full mt-5 py-3 px-5 bg-[#86e094]/20 shadow-md rounded-lg border border-transparent hover:border-[#86e094] transition-all duration-300 
        md:w-4/12 md:sticky md:items-center md:h-fit
        lg:w-3/12">
            {/* nombre propietario? */}
            <div className="flex justify-start items-center">
              <img className="size-7 " src={profileChecked} ></img>
              <h5 className="ml-1.5 pt-1 ptext-lg font-semibold"
              >{actividad?.temporada?.puntos_intere?.propietario?.nombre + ' ' + actividad?.temporada?.puntos_intere?.propietario?.apellidos}</h5>
            </div>
            {/* email */}
            <p>{actividad?.temporada?.puntos_intere?.propietario?.email}</p>
            {/* telefono */}
            <p>{actividad?.temporada?.puntos_intere?.propietario?.telefono}</p>
          </div>
        </div>
      </div>
      {
        document.cookie.includes('token')
          ?
          <button onClick={() => setModalVisible(true)}>añadir reseña</button>
          :
          null
      }
      <ModalAniadirResenia modalVisible={modalVisible} setModalVisible={setModalVisible} id={id} />
      {/* <Resenia resenia={resenia}/> */}
    </>
  )
}

export default Actividades









