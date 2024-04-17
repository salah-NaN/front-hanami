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

import { PrevArrow, NextArrow } from "../flecha";
import { Link, useNavigate } from "react-router-dom";

const SliderItems = ({
  url,
  setActividadOrPuntoInteres,
  actividadOrPuntoInteres,
}) => {
  const swiperRef = useRef(null);
  const [nextSlideState, setNextSlideState] = useState(true);
  const [selectedButton, setSelectedButton] = useState({
    puntos_interes: true,
    actividades: false,
  });

  const [isMobile, setIsMobile] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   setIsMobile(window.innerWidth < 768 ? true : false);
  // }, [window]);

  const nextSlide = () => {
    swiperRef.current.swiper.slidePrev();
    setNextSlideState(false);
  };

  const swipeActividades = () => {
    setSelectedButton({
      puntos_interes: false,
      actividades: true,
    });

    fetch(url + `actividades`)
      .then((res) => res.json())
      .then((actividades) =>
        setActividadOrPuntoInteres(
          actividades?.map((e) => {
            return { ...e, queEs: "actividades" };
          })
        )
      )
      .catch((error) => console.log(error));
  };

  const swipePuntosInteres = () => {
    setSelectedButton({
      puntos_interes: true,
      actividades: false,
    });

    fetch(url + `puntos_interes`)
      .then((res) => res.json())
      .then((puntos_interes) =>
        setActividadOrPuntoInteres(
          puntos_interes?.map((e) => {
            return { ...e, queEs: "puntosInteres" };
          })
        )
      )
      .catch((error) => console.log(error));
  };

  const onNavigateItem = (item, id) => {
    navigate(`${item}/${id}`);
  };

  return (
    <div className="w-[96%] mx-auto">
      <h1 className="text-3xl pb-4">Donde quieres ir hoy?</h1>
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

      {/*  MOBILE  */}
      {/* {isMobile === true && ( */}
      <div className="flex md:hidden border-none py-10 w-full">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          direction={"vertical"}
        >
          <div className="">
            {actividadOrPuntoInteres?.map((puntoInteresActividad) => (
              <div key={puntoInteresActividad?.id}>
                <div className="bg-red-500 w-full">
                  <SwiperSlide
                    className="border-none rounded-lg bg-sky-400"
                    key={puntoInteresActividad.id}
                    onClick={() =>
                      onNavigateItem(
                        puntoInteresActividad.queEs,
                        puntoInteresActividad.id
                      )
                    }
                  >
                    <div className="">{puntoInteresActividad.nombre}</div>
                  </SwiperSlide>
                </div>
              </div>
            ))}
          </div>
        </Swiper>
      </div>
      {/* )} */}

      {/* PC */}
      <div
        className="hidden md:block pt-5 bg-green-200 h-72 w-full border-none rounded-md"
        key={"pc"}
      >
        <Swiper
          className="mySwiper h-full"
          spaceBetween={50}
          slidesPerView={5}
          ref={swiperRef}
          modules={[Navigation]}
          breakpoints={{
            // Configuración para tamaños de pantalla más pequeños (móviles)
            640: {
              slidesPerView: 4, // Cambia a 2 slides por vista en pantallas de 640px o menos
              spaceBetween: 10, // Espacio entre slides
            },
          }}
        >
          {actividadOrPuntoInteres?.map((puntoInteresActividad) => (
            <div key={puntoInteresActividad?.id}>
              <SwiperSlide
                className=""
                onClick={() =>
                  onNavigateItem(
                    puntoInteresActividad.queEs,
                    puntoInteresActividad.id
                  )
                }
              >
                <div className="h-full border-none rounded-md bg-green-300">
                  <div className="flex flex-col h-full">
                    <div className="bg-sky-300 h-4/5 w-full border-none rounded-md"></div>
                    <div className="flex w-full h-1/4 justify-start items-end p-2 font-semibold">
                      {puntoInteresActividad?.nombre}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>

        <div
          className="custom-prev border-none rounded-full shadow-xl bg-white"
          onClick={nextSlide}
        >
          <PrevArrow />
        </div>
        <div
          className="custom-next border-none rounded-full shadow-xl bg-white"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <NextArrow />
        </div>
      </div>
    </div>
  );
};

export default SliderItems;
