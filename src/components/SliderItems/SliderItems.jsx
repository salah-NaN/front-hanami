import { useRef, useState } from "react";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCards } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./style.css";

import { PrevArrow, NextArrow } from "../flecha";

const SliderItems = ({ url, setActividadOrPuntoInteres, actividadOrPuntoInteres }) => {
  const swiperRef = useRef(null);
  const [nextSlideState, setNextSlideState] = useState(true);

  const nextSlide = () => {
    swiperRef.current.swiper.slidePrev();
    setNextSlideState(false);
  };

  const swipeActividades = () => {
    fetch(url + `actividades`)
      .then((res) => res.json())
      .then((actividades) => setActividadOrPuntoInteres(actividades))
      .catch((error) => console.log(error));
  };

  const swipePuntosInteres = () => {
    fetch(url + `puntos_interes`)
      .then((res) => res.json())
      .then((puntos_interes) => setActividadOrPuntoInteres(puntos_interes))
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
      <h1 className="text-3xl pb-4">Donde quieres ir hoy?</h1>
      <div className="flex gap-5">
        <button
          className="bg-white border border-[#7EB479] px-3 py-2 rounded-md text-[#7EB479]"
          onClick={swipePuntosInteres}
        >
          Puntos de interes
        </button>
        <button
          className="bg-white border border-[#7EB479] px-3 py-2 rounded-md text-[#7EB479]"
          onClick={swipeActividades}
        >
          Actividades
        </button>
      </div>
      <div className="flex justify-start w-60 px-2 md:hidden border-none py-5">
        <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]}>
          {actividadOrPuntoInteres?.map((puntoInteresActividad) => (
            <>
              <SwiperSlide className="border-none rounded-lg" key={puntoInteresActividad.id}>
                <div className="">{puntoInteresActividad.nombre}</div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
      <div className="hidden md:block">
        <Swiper
          className="mySwiper"
          spaceBetween={50}
          slidesPerView={5}
          navigation
          ref={swiperRef}
          modules={[Navigation]}
          breakpoints={{
            // Configuración para tamaños de pantalla más pequeños (móviles)
            640: {
              slidesPerView: 4, // Cambia a 2 slides por vista en pantallas de 640px o menos
              spaceBetween: 10, // Espacio entre slides
            },
            // Puedes agregar más configuraciones para otros tamaños de pantalla si es necesario
          }}
        >
          {actividadOrPuntoInteres?.map((puntoInteresActividad) => (
            <>
              <SwiperSlide>
                <div className="h-52 border-none rounded-md p-3">
                  <div className="flex flex-col h-full">
                    <div className="bg-red-300 h-4/5 w-full border-none rounded-md">
                      {/* Image */}d
                    </div>
                    <div className="flex w-full h-1/4 justify-start items-end p-2 font-semibold">
                      {puntoInteresActividad.nombre}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
          {/* <div className="custom-prev border-none rounded-full shadow-xl bg-white" onClick={nextSlide}>
        <PrevArrow />
      </div>

      <div className="custom-next border-none rounded-full shadow-xl bg-white" onClick={() => swiperRef.current.swiper.slideNext()}>
        <NextArrow />
      </div> */}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderItems;
