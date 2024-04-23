import { useEffect, useRef, useState } from "react";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCards } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./style.css";

import { useNavigate } from "react-router-dom";
import { SliderPc, SliderMobile } from "./";

export const SliderItems = ({
  setActividadOrPuntoInteres,
  actividadOrPuntoInteres,
}) => {
  // const isMobile = window.innerWidth <= 768;
  const [selectedButton, setSelectedButton] = useState({
    puntos_interes: true,
    actividades: false,
  });

  const [puntosInteresActividades, setPuntosInteresActividades] = useState([]);

  useEffect(() => {
    setPuntosInteresActividades(
      actividadOrPuntoInteres.map((item) => {
        return {
          ...item.puntos_intere,
          queEs: "puntosInteres",
        };
      })
    );
  }, [actividadOrPuntoInteres]);

  useEffect(() => {
    if (selectedButton.actividades) {
      setPuntosInteresActividades(
        actividadOrPuntoInteres.map((item) => {
          return { ...item.actividades[0], queEs: "actividades" };
        })
      );
    } else {
      setPuntosInteresActividades(
        actividadOrPuntoInteres.map((item) => {
          return { ...item.puntos_intere, queEs: "puntosInteres" };
        })
      );
    }
  }, [selectedButton.actividades]);

  const navigate = useNavigate();

  const swipeActividades = () => {
    setSelectedButton({
      puntos_interes: false,
      actividades: true,
    });
  };

  const swipePuntosInteres = () => {
    setSelectedButton({
      puntos_interes: true,
      actividades: false,
    });
  };

  const onNavigateItem = (item, id) => {
    navigate(`${item}/${id}`);
  };

  return (
    <div
      className="md:w-[94%] md:mx-auto lg:w-[96%] lg:mx-auto xl:w-[96%] 
     2xl:w-[98%] 2xl:mx-auto w-full mx-auto"
    >
      <div className="w-full mx-auto">
        <h1 className="text-4xl pb-4">Donde quieres ir hoy?</h1>
        <div className="flex gap-5">
          <button
            className={`bg-white px-3 py-2 rounded-md  ${
              selectedButton.puntos_interes === true
                ? `border text-[#7EB479] border-[#7EB479] bg-[#ebf7eb]`
                : `text-black`
            }`}
            onClick={swipePuntosInteres}
          >
            Puntos de interes
          </button>
          <button
            className={`bg-white px-3 py-2 rounded-md  ${
              selectedButton.actividades === true
                ? `border text-[#7EB479] border-[#7EB479] bg-[#ebf7eb]`
                : `text-black`
            }`}
            onClick={swipeActividades}
          >
            Actividades
          </button>
        </div>
      </div>
      <SliderMobile puntosInteresActividades={puntosInteresActividades} />

      <SliderPc puntosInteresActividades={puntosInteresActividades} />
    </div>
  );
};

export default SliderItems;
