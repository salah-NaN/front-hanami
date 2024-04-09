import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
  useViewportScroll,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";
import { SearchBar } from "./SearchBar";
import Flecha from "./flecha/Flecha";

const COLORS = ["#008000", "#00FF00", "#87E196", "#98FB98"];

export const Banner = () => {
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
      <div className="relative z-10 flex flex-col items-center w-full h-full">
        <h1
          className="max-w-5xl bg-gradient-to-br from-black to-gray-400 bg-clip-text text-center text-5xl 
            font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-6xl lg:text-8xl md:leading-tight"
        >
          Toda la belleza de Cataluña en un solo clic
        </h1>
        <div className="relative mt-12">
          <div className="absolute inset-0 bg-green-300 rounded-full blur-sm"></div>
          <div className="relative border-none bg-white rounded-full py-2 bg-transparent md:px-6 lg:w-fit">
            <article className="text-wrap lg:text-nowrap lg:text-center text-black text-sm md:text-md lg:text-xl sm:w-80 md:fit lg:w-fit px-5">
              <p className="text-center">
                Explora, aprende y conecta con la esencia natural de Cataluña.
              </p>
              <p className="text-center">Cual sera tu proximo destino?</p>
            </article>
          </div>
        </div>
        
        {/* <SearchBar /> */}
        <div className="absolute bottom-5">
          <Flecha />
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
