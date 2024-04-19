import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import DescripcionBanner from "./description/DescripcionBanner";
import { NavBar, SearchBar } from "../components";

export const Paralax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const descY = useTransform(scrollYProgress, [0, 1], ["0%", "800%"]);

  return (
    <div
      className="w-full h-screen overflow-hidden relative grid place-items-center"
      ref={ref}
    >
      <NavBar />
      <div className="absolute">
        <div className="mt-12 mx:w-80 md:w-96 lg:w-11/12 lg:mx-auto px-1 z-30">
          {/* <div className="absolute inset-0 border-none rounded-xl backdrop-blur-sm bg-[#ececec19]"></div> */}
          <div
            className="relative border-none
                  rounded-xl
                  py-2 bg-transparent md:px-6 lg:w-fit"
          >
            <h1
              style={{ y: textY }}
              className="text-semibold text-8xl relative z-30 w-full text-center text-bold bg-gradient-to-br from-white to-slate-200
                    bg-clip-text xs:text-[2.30rem] xs:tracking-wide xs:text-pretty
                    p-2
                    xm:text-5xl
                    leading-tight 
                    text-transparent 
                    2xl:max-w-screen-2xl
                    2xl:mx-auto
                    md:text-7xl md:tracking-wide text-shadow-lg lg:text-7xl xl:text-8xl 2xl:text-[7rem]"
            >
              Toda la belleza de Cataluña en un solo clic
            </h1>
          </div>
        </div>
        <div className="flex w-full justify-center z-30">
          <SearchBar />
        </div>
      </div>
      <div className="absolute inset-0 z-0 grid grid-cols-6 md:grid-cols-4">
       <div className="absolute inset-0 backdrop-blur-sm"></div> 
        <div
          className=""
          style={{
            backgroundImage: `url(/lavanda.jpg)`,
            backgroundSize: `cover`,
          }}
        ></div>
        <div
          className=""
          style={{
            backgroundImage: `url(/olivo.jpg)`,
            backgroundSize: `cover`,
          }}
        ></div>
        <div
          className=""
          style={{
            backgroundImage: `url(/cerezo.jpg)`,
            backgroundSize: `cover`,
          }}
        ></div>
        <div
          className=""
          style={{
            backgroundImage: `url(/viñaaaa.jpg)`,
            backgroundSize: `cover`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Paralax;
