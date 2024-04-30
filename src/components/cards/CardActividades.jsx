import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { motion, useInView, useAnimation } from "framer-motion";
import estrella from '../../assets/estrella.svg'


export const CardActividades = ({ actividad }) => {

  const redirect = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControladores = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControladores.start("visible");
    }
  }, [isInView]);

  const mediaResenia = () => {
    console.log('actividad')
    console.log(actividad)
    const numResenias = actividad?.resenias.length
    let sumaPuntuacion = 0
    actividad?.resenias.forEach(r => {
      sumaPuntuacion += r.puntuacion
    })
    const media = sumaPuntuacion / numResenias
    console.log(media)
    return media
  }

  // return (
  //   <motion.div
  //     ref={ref}
  //     variants={{
  //       hidden: { opacity: 0, y: 75 },
  //       visible: { opacity: 1, y: 0 },
  //     }}
  //     initial="hidden"
  //     animate={mainControladores}
  //     transition={{ duration: 0.5, delay: 0.25 }}
  //     className="border-none rounded-md w-full h-full cursor-pointer"
  //   >
  //     <motion.div
  //       className="bg-red-red
  //     w-full ml:flex ml:flex-col mx:flex mx:flex-col
  //      md:flex md:flex-row border-none shadow-md"
  //     >
  //       <div className="flex justify-start px-2 bg-red-300 border-none rounded-md">
  //         <div className={`w-full h-full px-1 py-1`}>
  //           {<img src={image} alt={actividad.tipo} className="" />}
  //         </div>
  //       </div>

  //       {/* Items card mapa */}
  //       <div className="px-2 bg-white w-3/4">
  //         <h1 className="text-xl text-semibold pt-1 text-green-600">
  //           {actividad.nombre}
  //         </h1>
  //         <div className="border w-fit px-1 rounded-md">
  //           {actividad.tipo}
  //         </div>
  //       </div>
  //       <div className="w-1/4 flex justify-end items-end bg-white px-1 py-1">
  //         <button className="border-none bg-green-200 h-fit py-1 px-2 rounded-md" onClick={() => redirectQueHacer()}>
  //           Contactar
  //         </button>
  //       </div>
  //     </motion.div>

  //   </motion.div>
  // );


  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControladores}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="border-none rounded-md w-full h-full cursor-pointer"
      style={{
        backgroundImage: `url(${actividad?.imagen})`,
        backgroundSize: `cover`,
      }}
      onClick={() => redirect(`/actividades/${actividad?.id}`)}
    >
      {/* había un px-5 en el div de justo abajo */}
      <div className="flex flex-col sm:">
        <div className={`w-full h-full`}>
          <img src={`/api/img/${actividad?.imagenes[0]?.nombre}${actividad?.imagenes[0]?.tipo}`}
            className="rounded-lg h-72 w-full
            sm:h-56
            md:h-[370px]
            lg:h-64" />
        </div>
        <div className="flex  justify-between">
          <h4 className="text-[17px] mb-1 mt-3 font-semibold">
            {actividad?.nombre}
          </h4>
          <div className=" self-start w-1/2 flex flex-row justify-end items-center mt-3">
            <p className=" text-[16px] font-medium pt-1 mr-2.5 sm:pr-3">{(mediaResenia().toFixed(2).replace('.', ','))}</p>
            <img className=" size-4"
              src={estrella} ></img>
          </div>
        </div>

        <p className="text-[16px] py-0 text-[#808080] leading-[22px] truncate">
          {actividad.poblacion + ' · ' + actividad.comarca}
          <br></br>
          {actividad.descripcion}
          <br></br>
          {
            actividad?.temporada?.length > 1
              ?
              actividad?.temporada[0]?.nombre + ` y ${actividad?.temporada?.length - 1} más`
              :
              actividad?.temporada[0]?.nombre
          }
        </p>
        {/* <p className="text-[16px] py-0 text-[#808080] truncate">
          {puntos_interes.descripcion}
        </p>
        <p className="text-[16px] py-0 text-[#808080] truncate">
          {
            puntos_interes?.temporadas?.length > 1
              ?
              puntos_interes?.temporadas[0]?.nombre + ` y ${puntos_interes?.temporadas?.length - 1} más`
              :
              puntos_interes?.temporadas[0]?.nombre
          }
        </p> */}
      </div>
    </motion.div>
  );

};

export default CardActividades;