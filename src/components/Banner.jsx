import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
} from "framer-motion";
import { useEffect } from "react";
import Flecha from "./flecha/Flecha";
import DescripcionBanner from "./description/DescripcionBanner";

const COLORS = ["#008000", "#00FF00", "#87E196", "#98FB98"];

export const Banner = ({
  paginacionScrollHome,
  mainControladorFlecha,
  isVisible,
}) => {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(123% 123% at 50% 0%, #FFFFFF 50%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.div
      style={{ backgroundImage }}
      className="relative grid min-h-screen place-items-center overflow-hidden
       bg-gray-950 px-2 py-13 xm:py-24 text-gray-200"
    >
      <div className="z-10 flex flex-col items-center w-10/12 lg:w-11/12 mx-auto h-full relative">
        <div className="flex xp:w-96 md:w-full">
          <h1
            className="w-full text-center bg-gradient-to-br from-black to-slate-300
            bg-clip-text xs:text-[2.30rem] xs:tracking-wide xs:text-pretty
            xm:text-5xl
            leading-tight 
            text-transparent 
            2xl:max-w-screen-2xl
            2xl:mx-auto
            md:text-7xl md:tracking-wide lg:text-7xl xl:text-8xl 2xl:text-[7rem]"
          >
            Toda la belleza de Cataluña en un solo clic
          </h1>
        </div>
        <div className="pt-3 xm:pt-8">
          <DescripcionBanner />
        </div>
        <div className="w-full h-full">
          <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-10">
            <Flecha paginacionScrollHome={paginacionScrollHome} />
          </div>
          {/* <div className="flex w-full h-full justify-center items-end cursor-pointer"> */}
          {/* <Flecha /> */}
          {/* </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
