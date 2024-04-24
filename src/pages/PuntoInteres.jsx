import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../components";
import Swiper from '../components/Imagenes/Swiper';
import GridTwo from '../components/Imagenes/GridTwo';
import GridFive from '../components/Imagenes/GridFive';
import profileChecked from '../assets/user-badge-check.svg'
// constantes
const URL = "http://localhost:3000/api";
const diccionarioFechas = {
  1: 'ene',
}
export const PuntoInteres = () => {
  const [puntoInteres, setPuntoInteres] = useState({})
  const { id } = useParams()


  useEffect(() => {

    fetch(URL + '/punto_interes_page/' + id)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setPuntoInteres(res)
      })
      .catch(err => console.log(err))
  }, [])


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
          <p className="text-[17px] font-semibold mt-2 mb-3"
          >{puntoInteres.ubicacion + ', ' + puntoInteres.poblacion}</p>
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

