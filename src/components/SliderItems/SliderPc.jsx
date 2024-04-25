import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCards } from "swiper/modules";
import { useEffect, useRef, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./style.css";

import { PrevArrow, NextArrow } from "../flecha";

export const SliderPc = ({ puntosInteresActividades }) => {
  const swiperRef = useRef(null);

  const prevSlide = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const nextSlide = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <div
      className="hidden md:block pt-5 h-64 w-full border-none rounded-md"
      key={"pc"}
    >
      <Swiper
        className="mySwiper h-full"
        spaceBetween={50}
        slidesPerView={5}
        ref={swiperRef}
        modules={[Navigation, EffectCards]}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          769: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {puntosInteresActividades.map((puntosInteresAct) => (
          <div key={puntosInteresAct.id + 8000}>
            <SwiperSlide
              className=""
              onClick={() =>
                onNavigateItem(puntosInteresAct.queEs, puntosInteresAct.id)
              }
            >
              <div className="h-full border-none rounded-md bg-green-300">
                <div className="flex flex-col h-full">
                  <div className="bg-sky-300 h-4/5 w-full border-none rounded-md"><img src={puntosInteresAct.imagenes.nombre} alt="" /></div>
                  <div className="flex w-full h-1/4 justify-start items-end p-2 font-semibold">
                    {puntosInteresAct?.nombre}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>

      <div className="absolute flex justify-between w-full bottom-28  right-0">
        <div
          className="custom-prev border-none rounded-full shadow-xl bg-white"
          onClick={prevSlide}
        >
          <PrevArrow />
        </div>
        <div
          className="custom-next border-none rounded-full shadow-xl bg-white"
          onClick={nextSlide}
        >
          <NextArrow />
        </div>
      </div>
    </div>
  );
};

export default SliderPc;
