import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { motion, useInView, useAnimation } from "framer-motion";

export const CardItemMap = ({ puntos_interes, quehacer }) => {
  const [value, setValue] = useState(2);
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControladores = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControladores.start("visible");
    }
  }, [isInView]);

  function redirectQueHacer() {
    event.preventDefault();

    if (quehacer === "Punto_de_Interes") {
      navigate(
        `/puntosInteres/${puntos_interes.id}`
      );
    }
    if (quehacer === "Actividades") {
      navigate(
        `/actividades/${puntos_interes.id}`
      );
    }
  }
  // useEffect(() => {
  //   const url = "http://localhost:3000";
  //   fetch(url + "/public/")
  //     .then((res) => res)
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  // }, [puntos_interes]);
  // if (tipo === "Olivo") return "./images/olivos.png";
  // if (tipo === "Lavanda") return "./images/lavanda.png";
  // if (tipo === "Viña") return "./images/uva.png";
  // if (tipo === "Cerezo") return "./images/cerezas.png";

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
        backgroundImage: `url(${puntos_interes.imagen})`,
        backgroundSize: `cover`,
      }}
    >

      <div className="flex flex-col px-5">
        <div className={`w-full h-full`}>
          <img src={`http://localhost:3000/img/${puntos_interes?.imagenes[0]?.nombre}${puntos_interes?.imagenes[0]?.tipo}`}
            className="rounded-lg size-full" />
        </div>
        <h4 className="text-[17px] mb-1 mt-3 font-semibold">
          {puntos_interes.nombre}
        </h4>

        <p className="text-[16px] py-0 text-[#808080] leading-[22px] truncate">
          {puntos_interes.poblacion + ' · ' + puntos_interes.comarca}
          <br></br>
          {puntos_interes.descripcion}
          <br></br>
          {
            puntos_interes?.temporadas?.length > 1
              ?
              puntos_interes?.temporadas[0]?.nombre + ` y ${puntos_interes?.temporadas?.length - 1} más`
              :
              puntos_interes?.temporadas[0]?.nombre
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

export default CardItemMap;

{/* <div className="">

<div className="flex justify-start px-2 bg-amber-300 border-none rounded-md">
  <div className={`w-full h-full px-1 py-1`}>
    {<img src={image} className="" />}
  </div>
</div>


<div className="px-2 w-3/4">
  <h1 className="text-xl text-semibold pt-1 text-green-600">
    {puntos_interes.nombre}
  </h1>
  <Rating value={value} name="disabled"  readOnly emptyIcon />
  <div className="border w-fit px-1 rounded-md">
    {puntos_interes.tipo}
  </div>
</div>
<div className="w-1/4 flex justify-end items-end px-1 py-1">
  <button className="border-none bg-green-200 h-fit py-1 px-2 rounded-md" onClick={()=>redirectQueHacer()}>
    Contactar
  </button>
</div>
</div> */}