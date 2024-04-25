import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../components";
import Swiper from '../components/Imagenes/Swiper';
import GridTwo from '../components/Imagenes/GridTwo';
import GridFive from '../components/Imagenes/GridFive';
import profileChecked from '../assets/user-badge-check.svg'
import estrella from '../assets/estrella.svg'
// constantes
const URL = "http://localhost:3000/api";
const diccionarioFechas = {
  1: 'ene',
}
export const PuntoInteres = () => {
  const [puntoInteres, setPuntoInteres] = useState({})
  const { id } = useParams()
  const [datosResenia, setDatosResenia] = useState({ media: -1, numResenias: -1 })
  const [todasActividades, setTodasActividades] = useState([])



  useEffect(() => {

    fetch(URL + '/punto_interes_page/' + id)
      .then(res => res.json())
      .then(res => {
        console.log(res)

        setPuntoInteres(res)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {

    console.log('test')
    const arrayActivities = []
    puntoInteres.temporadas?.forEach(t => {
      t.actividades?.forEach(a => {
        arrayActivities.push(a)
      })
    })

    setTodasActividades(arrayActivities)
  }, [puntoInteres])

  useEffect(() => {
    const arrayResenias = []
    todasActividades.forEach(a => {
      a.resenias?.forEach(r => {
        arrayResenias.push(r)
      })
    })

    const numResenias = arrayResenias.length
    let sumaPuntuacion = 0
    const media = arrayResenias.forEach(r => {
      sumaPuntuacion += r.puntuacion
    })
    const mediaPuntuacion = sumaPuntuacion / numResenias
    console.log(sumaPuntuacion)
    console.log({ media: mediaPuntuacion, numResenias: numResenias })
    setDatosResenia({ media: mediaPuntuacion, numResenias: numResenias })

  }, [todasActividades])

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
    componentToRender = <Swiper images={puntoInteres.imagenes} />;
  } else if (windowWidth <= 900) {
    componentToRender = <GridTwo images={puntoInteres.imagenes} />;
  } else {
    componentToRender = <GridFive images={puntoInteres.imagenes} />;
  }

  return (
    <div className="mt-20">

      {/* titulo */}
      <div>
        <h2 className="text-3xl font-medium mb-6"
        >{puntoInteres.nombre}</h2></div>
      {/* imagenes */}
      {componentToRender}
      {/* contenedor contenido y contacto */}
      <div className="flex flex-col mt-3
      sm:flex-row sm:justify-between ">
        <div className="w-full
        sm:w-7/12" >
          {/* direccion y ubicacion */}
          <p className="text-[17px] font-semibold mt-3 "
          >{puntoInteres.ubicacion + ' · ' + puntoInteres.poblacion}</p>
          {/* valoraciones */}
          <div className="flex items-center mt-1.5 mb-3" >
            <img className="size-6"
              src={estrella} ></img>
            <p className="pt-0.5 text-[17px] font-semibold" >{datosResenia && (datosResenia.media + ' · ' + datosResenia.numResenias + ' ')}</p>
            <a className="pt-0.5 text-[17px] font-semibold underline underline-offset-1 ml-1.5 cursor-pointer">evaluaciones</a>
          </div>

          <hr></hr>
          {/* temporadas */}
          <div className="mt-4 mb-3.5" >
            {puntoInteres?.temporadas?.map(t => (
              <h4 className=" font-medium text-[16px]  text-[#4a4a4a]">
                {t.nombre + ' ' +
                  new Date(t?.fecha_inicio).toLocaleDateString()
                  + ' - '
                  + new Date(t?.fecha_fin).toLocaleDateString()}
              </h4>
            ))}
          </div>
          <hr></hr>
          {/* descripcion */}
          <p className="text-[16px] text-[#4a4a4a] mt-4 text-pretty leading-6"
          >{puntoInteres.descripcion + ' lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis tenetur iusto quis. Ducimus reprehenderit aliquam sunt adipisci repellat? Unde, nobis modi. Eaque '}</p>
        </div>
        {/* contacto */}
        <div className="flex flex-col w-full mt-5 py-3 px-5 bg-[#86e094]/20 shadow-md rounded-lg
        sm:w-3/12 sm:sticky">
          {/* nombre propietario? */}
          <div className="flex justify-start items-center">
            <img className="size-7 " src={profileChecked} ></img>
            <h5 className="ml-1.5 pt-1 ptext-lg font-semibold"
            >{puntoInteres.propietario?.nombre + ' ' + puntoInteres.propietario?.apellidos}</h5>
          </div>
          {/* email */}
          <p>{puntoInteres.propietario?.email}</p>
          {/* telefono */}
          <p>{puntoInteres.propietario?.telefono}</p>
        </div>
      </div>

    </div>
  )
}

export default PuntoInteres;

