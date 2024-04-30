import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useCycle } from "framer-motion";
import { NavBar, SearchBar } from ".";
import { PopUpBuscador } from "./Buscador/PopUp";
import { AnimatePresence, motion } from "framer-motion";

export const Banner = () => {
  const [puntosDeInteres, setPuntosDeInteres] = useState([]);
  useEffect(() => {
    const url = "http://localhost:3000/api";
    fetch(url + "/puntos_interes")
      .then((res) => res.json())
      .then((puntos_interes) => setPuntosDeInteres(puntos_interes))
      .catch((error) => console.log(error));
  }, []);

  const ref = useRef(null);
  const [mobileNav, toggleMobileNav] = useCycle(false, true);
  const [buscadorNavMobile, toggleBuscadorNavMobile] = useCycle(false, true);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const descY = useTransform(scrollYProgress, [0, 1], ["0%", "800%"]);

  const openPopUpBuscador = () => {
    toggleBuscadorNavMobile();
  };

  //Impedir que se pueda hacer scroll cuando salte el popUp de buscar
  useEffect(() => {
    if (buscadorNavMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [buscadorNavMobile]);

  return (
    <div
      className="w-full h-screen overflow-hidden relative grid place-items-center"
      ref={ref}
    >
      {buscadorNavMobile === true ? (
        <div className="relative md:hidden">
          <AnimatePresence>
            <motion.div className="fixed z-50 top-0 left-0 right-0 bottom-0 w-full h-full overflow-hidden">
              <PopUpBuscador
                toggleBuscadorNavMobile={toggleBuscadorNavMobile}
                puntosDeInteres={puntosDeInteres}
                setPuntosDeInteres={setPuntosDeInteres}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      ) : null}
      <div className="md:absolute md:bottom-80 flex flex-col justify-start items-center">
        <div className="mx:w-80 md:w-full lg:w-11/12 lg:mx-auto px-1 z-30">
          <div className="py-2 bg-transparent md:px-6 lg:w-fit">
            <h1
              style={{ y: textY }}
              className="text-semibold text-8xl relative z-20 w-full text-center
              text-bold bg-gradient-to-br from-white to-green-100
                    bg-clip-text xs:text-[2.30rem] xs:tracking-wide xs:text-pretty p-2
                    xm:text-5xl
                    leading-tight 
                    text-transparent 
                    2xl:max-w-screen-2xl 2xl:mx-auto
                    md:text-7xl md:tracking-wide lg:text-7xl xl:text-8xl 2xl:text-[7rem]"
            >
              Toda la belleza de Cataluña en un solo clic
            </h1>
          </div>
        </div>
        <div className="flex w-full justify-center items-center md:pt-16">
          <SearchBar
            openPopUpBuscador={openPopUpBuscador}
            puntosDeInteres={puntosDeInteres}
            setPuntosDeInteres={setPuntosDeInteres}
          />
        </div>
      </div>
      <div className="absolute inset-0 z-0 grid grid-row md:grid md:grid-cols-4">
        <div
          className="md:block hidden hover:backdrop-blur-0"
          style={{
            backgroundImage: `url(/lavandaFoto.png)`,
            backgroundSize: `cover`,
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              transition: "backdrop-filter 0.3s ease",
              zIndex: 0,
            }}
            className="hover:backdrop-blur-0 backdrop-blur-sm w-full h-full absolute top-0 left-0 right-0 cursor-pointer"
          ></div>
        </div>
        <div
          className="md:block hidden"
          style={{
            backgroundImage: `url(/olivo.jpg)`,
            backgroundSize: `cover`,
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              transition: "backdrop-filter 0.3s ease",
              zIndex: 0,
            }}
            className="hover:backdrop-blur-0 backdrop-blur-sm w-full h-full absolute top-0 left-0 right-0 cursor-pointer"
          ></div>
        </div>
        <div
          className="md:block hidden"
          style={{
            backgroundImage: `url(/cerezoflor2.jpg)`,
            backgroundSize: `cover`,
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              transition: "backdrop-filter 0.3s ease",
              zIndex: 0,
            }}
            className="hover:backdrop-blur-0 backdrop-blur-sm w-full h-full absolute top-0 left-0 right-0 cursor-pointer"
          ></div>
        </div>
        <div
          className="md:block hidden"
          style={{
            backgroundImage: `url(/viñaaaa.jpg)`,
            backgroundSize: `cover`,
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              transition: "backdrop-filter 0.3s ease",
              zIndex: 0,
            }}
            className="hover:backdrop-blur-0 backdrop-blur-sm w-full h-full absolute top-0 left-0 right-0 cursor-pointer"
          ></div>
        </div>
        <div
          className="md:hidden block"
          style={{
            backgroundImage: `url(/lavanda.jpg)`,
            backgroundSize: `cover`,
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              transition: "backdrop-filter 0.3s ease",
              zIndex: 0,
            }}
            className="hover:backdrop-blur-0 backdrop-blur-sm w-full h-full absolute top-0 left-0 right-0 cursor-pointer"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
