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

const SliderItems = ({ actividadOrPuntoInteres }) => {
  const swiperRef = useRef(null);
  const [nextSlideState, setNextSlideState] = useState(true);

  const nextSlide = () => {
    swiperRef.current.swiper.slidePrev();
    setNextSlideState(false);
  };

  return (
    <>
      <div className="flex justify-start w-60 px-5 md:hidden">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-60 h-52 overflow-visible"
        >
          {actividadOrPuntoInteres?.map((puntoInteresActividad) => (
            <>
              <SwiperSlide className="">
                <div className="h-30 border-none">{puntoInteresActividad.nombre}</div>
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
              slidesPerView: 2, // Cambia a 2 slides por vista en pantallas de 640px o menos
              spaceBetween: 20, // Espacio entre slides
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
    </>
  );
};

export default SliderItems;
