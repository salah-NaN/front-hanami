import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { DATA } from "../../utils/DATA";

export const CardsBox = () => {
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
    <div className="w-full mx-auto py-28">
      <div className="">
        <div className="py-2 pb-5">
          <h1 className="text-4xl pb-2">Puntos de interes de moda</h1>
          <h4 className="text-md">
            Opciones más populares entre la comunidad viajera de Cataluña
          </h4>
        </div>
        <div className="grid grid-cols-2 sm:grid sm:grid-cols-2 md:grid md:grid-cols-6 lg:grid lg:grid-cols-4 gap-5">
          {DATA.slice(0, 2).map((puntos_interes) => (
            <div className="border-none pb-5 col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2 cursor-pointer">
              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.25 }}
                className={`h-64 border-none rounded-md px-2 shadow-xl`}
                style={{
                  backgroundImage: `url(${puntos_interes.imagen}`,
                  backgroundSize: `cover`,
                }}
              ></motion.div>
              <div className="flex justify-normal pt-2">
                <div className="flex w-full items-center gap-2">
                  <h1>{puntos_interes.nombre}</h1>
                  <div className={`border-none rounded-md`}>
                    {
                      <img
                        src={obtenerPngTipo(puntos_interes.tipo)}
                        alt={puntos_interes.tipo}
                        className="w-6 h-full"
                      />
                    }
                  </div>
                </div>
                <div className="flex justify-end w-full items-center">
                  <h1>{puntos_interes.comarca}</h1>
                </div>
              </div>
            </div>
          ))}
          {DATA.slice(2, 6).map((puntos_interes) => (
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControladores}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="border-none w-full col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-1 h-64"
            >
              <div
                className="border rounded-md w-full h-full"
                style={{
                  backgroundImage: `url(${puntos_interes.imagen})`,
                  backgroundSize: `cover`,
                }}
              >
                <div className="flex items-start w-full h-full relative">
                  <div className="flex bg-white w-full">
                    <h1
                      className="text-xl font-bold text-black"
                      // style={{ textShadow: "12px 2px 4px rgba(0, 0, 0, 0.5)" }}
                    >
                      {puntos_interes.nombre}
                    </h1>
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsBox;
