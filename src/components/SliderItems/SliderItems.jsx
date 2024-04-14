// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./style.css";

import NextArrow from "../flecha/NextArrow";

const SliderItems = ({ hotTrends }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className=""
    >
      {hotTrends?.map((hotTrend) => (
        <>
          <SwiperSlide>
            <div className="h-52 border-none rounded-md p-3">
              <div className="flex flex-col h-full">
                <div className="bg-red-300 h-4/5 w-full border-none rounded-md">
                  {/* Image */}d
                </div>
                <div className="flex w-full h-1/4 justify-start items-end p-2 font-semibold">
                  {hotTrend.nombre}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="prev-button">
            <NextArrow />
          </div>
        </>
      ))}
    </Swiper>
  );
};

export default SliderItems;
