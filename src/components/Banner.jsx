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

export const Banner = ({ paginacionScrollHome }) => {
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
       bg-gray-950 px-2 py-24 text-gray-200"
    >
      <div className="z-10 flex flex-col items-center w-full h-full relative">
        <h1
          className="w-full text-center bg-gradient-to-br from-black to-slate-300
            bg-clip-text text-5xl
            font-medium leading-tight 
            text-transparent 
            lg:w-11/12 2xl:max-w-screen-2xl 
            sm:text-5xl sm:leading-tight 
            md:text-6xl lg:text-6xl 
            md:leading-tight xl:text-8xl 2xl:text-[7rem]"
        >
          Toda la belleza de Cataluña en un solo clic
        </h1>
        <DescripcionBanner />

        <div className="h-screen absolute bottom-20 lg:absolute lg:bottom-20 xl:absolute xl:bottom-29 2xl:absolute 2xl:bottom-80">
          <Flecha paginacionScrollHome={paginacionScrollHome} />
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
