import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { DATA } from "../../utils/DATA";
import CardItem from "../cardItem/CardItem";

export const CardsBox = () => {
  return (
    <div className="w-full mx-auto py-28">
      <div className="">
        <div className="py-2 pb-5">
          <h1 className="text-4xl pb-2">Puntos de interes de moda</h1>
          <h4 className="text-md">
            Opciones más populares entre la comunidad viajera de Cataluña
          </h4>
        </div>
        <div className="grid grid-cols-2 sm:grid sm:grid-cols-2 md:grid md:grid-cols-6 lg:grid lg:grid-cols-8 xl:grid xl:grid-cols-8 gap-5">
          {DATA.slice(0, 2).map((puntos_interes) => (
            <div className="border-none w-full col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-4 h-64">
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
  );
};

export default CardsBox;
