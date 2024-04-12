import { useRef, useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import { motion, useInView, useAnimation } from "framer-motion";

export const CardItemMap = ({ puntos_interes }) => {
  const [value, setValue] = useState(2);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControladores = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControladores.start("visible");
    }
  }, [isInView]);

  //Pensar si esto deberia ser así, de hecho yo diria que no, las imagenes deberian estar en el back
  const obtenerPngTipo = (tipo) => {
    if (tipo === "Olivo") return "./images/olivos.png";
    if (tipo === "Lavanda") return "./images/lavanda.png";
    if (tipo === "Viña") return "./images/uva.png";
    if (tipo === "Cerezo") return "./images/cerezas.png";
  };

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
      <div className="">
        <motion.div
          className="bg-red-red
      w-full ml:flex ml:flex-col mx:flex mx:flex-col
       md:flex md:flex-row border-none shadow-md"
        >
          <div className="flex justify-start px-2 bg-red-300 border-none rounded-md">
            <div className={`w-full h-full px-1 py-1`}>
              {
                <img
                  src={obtenerPngTipo(puntos_interes.tipo)}
                  alt={puntos_interes.tipo}
                  className=""
                />
              }
            </div>
          </div>

          {/* Items card mapa */}
          <div className="px-2 bg-white w-3/4">
            <h1 className="text-xl text-semibold pt-1 text-green-600">
              {puntos_interes.nombre}
            </h1>
            <Rating value={value} name="disabled" readOnly emptyIcon />
            <div className="border w-fit px-1 rounded-md">{puntos_interes.tipo}</div>
          </div>
          <div className="w-1/4 flex justify-end items-end bg-white px-1 py-1">
            <button className="border-none bg-green-200 h-fit py-1 px-2 rounded-md">Contactar</button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CardItemMap;
