import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../components";
import Swiper from '../components/Imagenes/Swiper';
import GridTwo from '../components/Imagenes/GridTwo';
import GridFive from '../components/Imagenes/GridFive';
import ModalAniadirResenia from "../components/resenias/ModalAniadirResenia";
import estrella from '../assets/estrella.svg'
import mail from '../assets/mail.svg'
import telefono from '../assets/telefono.svg'
import profileChecked from '../assets/user-badge-check.svg'
import leaf from '../assets/leaf.svg'
import plusCircle from '../assets/plus-circle.svg'
import minusCircle from '../assets/minus-circle.svg'
import ModalVerResenias from "../components/resenias/ModalVerResenias";
import { fechas, nombreConvertido, parseNumTelefono, parseFecha, parseTemporada } from "../pages/utils/Hooks"
import CardActividades from '../components/cards/CardActividades'


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
  const [todasResenias, setTodasResenias] = useState([])
  // modal de ver reseñas
  const [modalVerReseniasVisible, setModalVerReseniasVisible] = useState(false)
  // controlar temporadas visibles
  const [seasonVisible, setSeasonVisible] = useState(false)
  // state para almacenar todas las actividades
  const [actividades, setActividades] = useState([])

  useEffect(() => {

    fetch(URL + '/punto_interes_page/' + id)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setPuntoInteres(res)
        setActividades(todasLasActividades(res.temporadas))
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
    setTodasResenias(arrayResenias)
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

  useEffect(() => {
    console.log('asdf')
    console.log(actividades)
  }, [actividades])

  function todasLasActividades(temporadas) {
    const actividades = []

    temporadas?.forEach(t => {
      t.actividades?.forEach(a => {
        actividades?.push(a)
      })
    })

    return actividades

  }

  return (
    <>
      <>
        <div className="mt-28" >
          <h2 className=" text-4xl w-fit font-black mb-1 text-[#222222]
        md:text-5xl bg-gradient-to-r from-[#bbc35d] via-[#6bc35d] to-[#131313] bg-clip-text text-transparent"
          >{puntoInteres.nombre}</h2>
          {/* temporadas */}
          <div className="mb-5
          sm:mb-9">
            {
              puntoInteres?.temporadas?.length > 2 ?
                <div className="flex flex-col cursor-pointer">
                  <div>
                    {
                      puntoInteres?.temporadas?.map((t, index) => (
                        <div className={`flex items-center gap-1 ${seasonVisible ? '' : (index > 1 ? 'hidden' : '')}`}>
                          <img className="hidden size-6
                  md:block"
                            src={leaf} ></img>
                          <h4 className="text-[16px] font-bold  text-[#404040] 
                md:text-[18px]"
                          >
                            {parseTemporada(t?.nombre) + ' · '
                              + parseFecha(new Date(t?.fecha_inicio).toLocaleDateString())
                              + ' - '
                              + parseFecha(new Date(t?.fecha_fin).toLocaleDateString())}
                          </h4>
                        </div>
                      ))
                    }
                  </div>
                  <div onClick={() => setSeasonVisible(!seasonVisible)}
                    className={`ml-0.5 flex items-center `}>
                    <img src={seasonVisible ? minusCircle : plusCircle} ></img>
                    <button className=" ml-1.5 mt-0.5 text-[15px] w-fit  rounded-lg underline underline-offset-1 transition-all duration-300  text-[#404040]   "
                    >{seasonVisible ? 'Ver menos' : 'Ver más'}</button>
                  </div>
                </div>
                :
                puntoInteres?.temporadas?.map(t => (
                  <div className="flex items-center gap-1">
                    <img className="hidden size-6
                  md:block"
                      src={leaf} ></img>
                    <h4 className="text-[16px] font-bold  text-[#404040]
                md:text-[18px]"
                    >
                      {parseTemporada(t?.nombre) + ' · '
                        + parseFecha(new Date(t?.fecha_inicio).toLocaleDateString())
                        + ' - '
                        + parseFecha(new Date(t?.fecha_fin).toLocaleDateString())}
                    </h4>
                  </div>
                ))
            }
          </div>

          {/* imagenes */}
          {componentToRender}

          {/* contenedor contenido y contacto */}
          <div className="flex flex-col mt-3
      md:flex-row md:justify-between ">
            <div className="w-full
        md:w-7/12" >
              {/* direccion y ubicacion */}
              <p className="text-[17px] font-semibold mt-3 "
              >{puntoInteres.ubicacion + ' · ' + puntoInteres.poblacion}</p>

              {/* valoraciones */}
              <div onClick={() => setModalVerReseniasVisible(true)}
                className="flex justify-center mt-4 mb-7 py-3 px-5 bg-[#fafafa] shadow-lg rounded-lg border border-[#8d8d8d] cursor-pointer hover:bg-[#f5f5f5] transition-all duration-300
            md:mt-4 ">
                <div className=" w-1/2 flex flex-row justify-center items-center border-r ">
                  <p className=" text-[24px] font-medium pt-1 mr-2.5 sm:pr-3">{(datosResenia.media.toFixed(2).replace('.', ','))}</p>
                  <img className="size-6"
                    src={estrella} ></img>
                </div>
                <div className=" w-1/2 flex flex-col  items-center  ">
                  <p className=" text-[19px] font-semibold ">{datosResenia.numResenias}</p>
                  <p className=" text-[15px] font-semibold underline underline-offset-1">evaluaciones</p>
                </div>
              </div>
              <hr></hr>

              {/* descripcion */}
              <p className="text-[16px] text-[#4a4a4a] mt-4 text-pretty leading-6 mb-4
            md:mt-5"
              >{puntoInteres.descripcion + ' lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis tenetur iusto quis. Ducimus reprehenderit aliquam sunt adipisci repellat? Unde, nobis modi. Eaque '}</p>
            </div>

            <hr></hr>

            {/* contacto */}
            <div className="flex flex-col w-full mt-7 py-3 px-5 bg-[#fafafa] shadow-sm rounded-lg border border-[#8d8d8d]
          xp:w-fit xp:mx-auto xp:px-12
          sm:w-fit sm:px-20
          md:w-[36%] md:sticky md:items-center md:px-5 md:h-fit md:mx-0 
          lg:w-4/12
          xl:w-[28%]">
              {/* nombre propietario? */}
              <div className="flex justify-start items-center mb-3">
                <img className="size-7 " src={profileChecked} ></img>
                <h5 className="ml-1.5 pt-1 text-xl font-bold bg-gradient-to-r from-black to-black bg-clip-text text-transparent"
                >{puntoInteres.propietario?.nombre + ' ' + puntoInteres.propietario?.apellidos}</h5>
              </div>

              {/* email */}
              <div className="flex justify-start items-center">
                <img className="size-6" src={mail} ></img>
                <p className="ml-2 pt-0.5 "
                >{puntoInteres.propietario?.email}</p>
              </div>

              {/* telefono */}
              <div className="flex justify-start items-center mt-1 mb-1">
                <img className="size-6" src={telefono} ></img>
                <p className="ml-2 pt-0.5 "
                >{parseNumTelefono(puntoInteres.propietario?.telefono)}</p>
              </div>
            </div>
          </div>

          {/* <h3 className="text-3xl mx-auto font-semibold mt-10">Actividades</h3> */}
          {
            actividades.length !== 0
              ?
              <h3 className="mt-10 text-4xl w-fit mx-auto font-black mb-1  bg-gradient-to-r from-[#131313] to-[#bb7d4a] bg-clip-text text-transparent
        md:text-5xl">Actividades</h3>
              :
              null
          }

          {/* actividades */}
          <div className="mt-10 grid grid-cols-1 mx-auto gap-y-9 
            sm:grid-cols-2 sm:gap-x-9
            lg:grid-cols-3" >
            {
              actividades && actividades.map(a => (

                <CardActividades key={a.id} actividad={a} />
              ))
            }
          </div>
        </div>

        <ModalVerResenias resenias={todasResenias} modalVerReseniasVisible={modalVerReseniasVisible} setModalVerReseniasVisible={setModalVerReseniasVisible} />
        {/* <Resenia resenia={resenia}/> */}
      </>
    </>

  )
}

export default PuntoInteres;

