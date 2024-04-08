import { ref, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const CardItem = ({ puntos_interes }) => {
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
      className="border-none rounded-md w-full h-full"
      style={{
        backgroundImage: `url(${puntos_interes.imagen})`,
        backgroundSize: `cover`,
      }}
    >
      <div className="flex items-start w-full h-full relative">
        <div
          className="sm:flex w-full py-1 px-2 flex-col absolute 
          bottom-0 rounded-b-md bg-gradient-to-t from-green-800"
        >
          <h1 className="text-md font-bold text-white">
            {puntos_interes.nombre}
          </h1>
          <h1 className="text-white text-sm font-light">
            {puntos_interes.comarca}
          </h1>
        </div>
        <div className="flex w-full justify-end absolute bottom-2 items-center px-2">
          <div className={`border-none px-1 py-1 rounded-md`}>
            {
              <img
                src={obtenerPngTipo(puntos_interes.tipo)}
                alt={puntos_interes.tipo}
                className="w-7 h-full"
              />
            }
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardItem;
