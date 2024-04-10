import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { DATA } from "../../utils/DATA";
import CardItem from "../cardItem/CardItem";

export const CardsBox = ({paginacion}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControladores = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControladores.start("visible");
    }
  }, [isInView]);

  return (
    <div className="relative z-10 flex flex-col items-center w-full h-full px-1" ref={paginacion}>
      <div className="w-full mx-auto py-28">
        <div className="">
          <div className="py-2 pb-5" ref={ref}>
            <motion.h1
              
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControladores}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-5xl md:text-6xl pb-2"
            >
              Puntos de interes de moda
            </motion.h1>

            <motion.h4 
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControladores}
              transition={{ duration: 0.5, delay: 0.25 }} className="text-md">
              Opciones más populares entre la comunidad viajera de Cataluña
            </motion.h4>
          </div>
          <div className="grid grid-cols-2 sm:grid sm:grid-cols-2 md:grid md:grid-cols-6 lg:grid lg:grid-cols-6 xl:grid xl:grid-cols-6 max-auto gap-3">
            {DATA.slice(0, 2).map((puntos_interes) => (
              <div className="border-none w-full col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2 h-64">
                <CardItem puntos_interes={puntos_interes} /> 
              </div>
            ))}
            {DATA.slice(2, 6).map((puntos_interes) => (
              <div className="border-none w-full col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2 h-64">
                <CardItem puntos_interes={puntos_interes} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsBox;
