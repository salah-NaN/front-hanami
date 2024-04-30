import {useNavigate, useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {CardContent} from "@mui/material";
import Swiper from "../components/Imagenes/Swiper";
import GridTwo from "../components/Imagenes/GridTwo";
import GridFive from "../components/Imagenes/GridFive";
import ModalAniadirResenia from "../components/resenias/ModalAniadirResenia";
import estrella from "../assets/estrella.svg";
import mail from "../assets/mail.svg";
import telefono from "../assets/telefono.svg";
import profileChecked from "../assets/user-badge-check.svg";
import flower from "../assets/flower.svg";
import leaf from "../assets/leaf.svg";
import ModalVerResenias from "../components/resenias/ModalVerResenias";
import {
  fechas,
  nombreConvertido,
  parseNumTelefono,
  parseFecha,
  parseTemporada,
} from "../pages/utils/Hooks";
import plusCircle from "../assets/plus-circle.svg";

// constantes
const URL = "/api";

export const Actividades = () => {
  // la info de la actividad
  const [actividad, setActividad] = useState({});
  // id de la actividad
  const {id} = useParams();
  // donde se almacena el tamaño de la ventana
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // modal de añadir reseña
  const [modalVisible, setModalVisible] = useState(false);
  // modal de ver reseñas
  const [modalVerReseniasVisible, setModalVerReseniasVisible] = useState(false);
  // state para estadísticas de reseña
  const [datosResenia, setDatosResenia] = useState({
    media: -1,
    numResenias: -1,
  });
  // navegar a otras paginas
  const redirect = useNavigate();

  // detectar que tamaño de pantalla hay y settear el componente que toca
  //según el tamaño de pantalla

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
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
    fetch(URL + "/actividad_page/" + id)
      .then((res) => res.json())
      .then((res) => {
        setActividad(res);
        const numResenias = res.resenias.length;
        let sumaPuntuacion = 0;
        const media = res.resenias.forEach((r) => {
          sumaPuntuacion += r.puntuacion;
        });
        setDatosResenia({media: sumaPuntuacion / numResenias, numResenias});
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="mt-12">
        <h2
          className=" text-4xl w-fit font-black mb-1  bg-gradient-to-r from-[#131313] to-[#bb7d4a] bg-clip-text text-transparent
        md:text-5xl "
        >
          {actividad.nombre}
        </h2>
        {/* temporada */}
        {/* <h4 className=" text-[16px] font-bold mb-4 text-[#404040]
        md:text-[19px]"
        >
          {parseTemporada(actividad.temporada?.nombre) + ' · '
            + parseFecha(new Date(actividad.temporada?.fecha_inicio).toLocaleDateString())
            + ' - '
            + parseFecha(new Date(actividad.temporada?.fecha_fin).toLocaleDateString())}
        </h4> */}
        <div
          className="flex items-center gap-1 mb-3 
        md:mb-5"
        >
          <img
            className="hidden size-6
                  md:block "
            src={leaf}
          ></img>
          <h4
            className="text-[16px] font-bold  text-[#404040]
                md:text-[18px] "
          >
            {parseTemporada(actividad.temporada?.nombre) +
              " · " +
              parseFecha(
                new Date(actividad.temporada?.fecha_inicio).toLocaleDateString()
              ) +
              " - " +
              parseFecha(
                new Date(actividad.temporada?.fecha_fin).toLocaleDateString()
              )}
          </h4>
        </div>
        {/* punto de interés */}
        <div
          className=" flex  justify-start items-center cursor-pointer w-fit mb-1 
        sm:mb-0
        md:mb-4"
        >
          <img
            className=" size-8
        sm:size-10"
            src={flower}
          ></img>
          <h5
            onClick={() =>
              redirect(
                `/puntosInteres/${actividad.temporada?.puntos_intere?.id}`
              )
            }
            className="text-[25px] font-black text-[#121212] hover:underline mb-2.5 mt-4 ml-3 
        md:text-[32px]"
          >
            {actividad.temporada?.puntos_intere?.nombre}
          </h5>
        </div>

        {/* imagenes */}
        {componentToRender}

        {/* contenedor contenido y contacto */}
        <div
          className="flex flex-col mt-3
      md:flex-row md:justify-between "
        >
          <div
            className="w-full
        md:w-7/12"
          >
            {/* direccion y ubicacion */}
            <p className="text-[17px] font-semibold mt-3 ">
              {actividad.temporada?.puntos_intere?.ubicacion +
                " · " +
                actividad.temporada?.puntos_intere?.poblacion}
            </p>

            {/* valoraciones */}
            <div
              onClick={() => setModalVerReseniasVisible(true)}
              className="flex justify-center mt-4 mb-5 py-3 px-5 bg-[#fafafa] shadow-lg rounded-lg border border-[#8d8d8d] cursor-pointer hover:bg-[#f5f5f5] transition-all duration-300
            md:mt-4 "
            >
              <div className=" w-1/2 flex flex-row justify-center items-center border-r ">
                <p className=" text-[24px] font-medium pt-1 mr-2.5 sm:pr-3">
                  {datosResenia.media.toFixed(2).replace(".", ",")}
                </p>
                <img className="size-6" src={estrella}></img>
              </div>
              <div className=" w-1/2 flex flex-col  items-center  ">
                <p className=" text-[19px] font-semibold ">
                  {datosResenia.numResenias}
                </p>
                <p className=" text-[15px] font-semibold underline underline-offset-1">
                  evaluaciones
                </p>
              </div>
            </div>

            {document.cookie.includes("token") ? (
              <div
                className="w-fit mx-auto flex justify-center items-center mb-4 cursor-pointer"
                onClick={() => setModalVisible(true)}
              >
                <img
                  className="size-8 self-center ml-15 mr-3 cursor-pointer "
                  src={plusCircle}
                ></img>

                <p className="text-[#404040]">Añadir reseña</p>
              </div>
            ) : null}
            <hr></hr>

            {/* descripcion */}
            <p
              className="text-[16px] text-[#4a4a4a] mt-4 text-pretty leading-6 mb-4
            md:mt-5"
            >
              {actividad.temporada?.puntos_intere?.descripcion +
                " lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis tenetur iusto quis. Ducimus reprehenderit aliquam sunt adipisci repellat? Unde, nobis modi. Eaque "}
            </p>
          </div>

          <hr></hr>

          {/* contacto */}
          <div
            className="flex flex-col w-full mt-7 py-3 px-5 bg-[#fafafa] shadow-sm rounded-lg border border-[#8d8d8d]
          xp:w-fit xp:mx-auto xp:px-12
          sm:w-fit sm:px-20
          md:w-[36%] md:sticky md:items-center md:px-5 md:h-fit md:mx-0 
          lg:w-4/12
          xl:w-[28%]"
          >
            {/* nombre propietario? */}
            <div className="flex justify-start items-center mb-3">
              <img className="size-7 " src={profileChecked}></img>
              <h5 className="ml-1.5 pt-1 text-xl font-bold bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
                {actividad?.temporada?.puntos_intere?.propietario?.nombre +
                  " " +
                  actividad?.temporada?.puntos_intere?.propietario?.apellidos}
              </h5>
            </div>

            {/* email */}
            <div className="flex justify-start items-center">
              <img className="size-6" src={mail}></img>
              <p
                className="ml-2 pt-0.5 "
                onClick={() =>
                  window.open(
                    `mailto:${actividad?.temporada?.puntos_intere?.propietario?.email}`
                  )
                }
              >
                {actividad?.temporada?.puntos_intere?.propietario?.email}
              </p>
            </div>

            {/* telefono */}
            <div className="flex justify-start items-center mt-1 mb-1">
              <img className="size-6" src={telefono}></img>
              <p className="ml-2 pt-0.5 ">
                {parseNumTelefono(
                  actividad?.temporada?.puntos_intere?.propietario?.telefono
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <ModalAniadirResenia
        actividad={actividad}
        setActividad={setActividad}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        id={id}
      />
      <ModalVerResenias
        resenias={actividad.resenias}
        modalVerReseniasVisible={modalVerReseniasVisible}
        setModalVerReseniasVisible={setModalVerReseniasVisible}
      />
      {/* <Resenia resenia={resenia}/> */}
    </>
  );
};

export default Actividades;
