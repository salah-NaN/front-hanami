import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./style.css";

export const SliderMobile = ({puntosInteresActividades}) => {
  return (
    <div className="flex md:hidden border-none py-10 w-full">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        direction={"vertical"}
      >
        <div className="">
          {puntosInteresActividades.map((e) => e.nombre)}
          {puntosInteresActividades?.map((puntoInteresActividad) => (
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
  );
};

export default SliderMobile;
