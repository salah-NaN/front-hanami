import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
} from "framer-motion";
import { useEffect } from "react";
import { SearchBar } from "./SearchBar";
import Flecha from "./flecha/Flecha";

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
      <div className="relative z-10 flex flex-col items-center w-full h-full">
        <h1
          className="max-w-5xl 2xl:max-w-screen-2xl bg-gradient-to-br from-black to-gray-400 bg-clip-text text-center text-5xl 
            font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-6xl lg:text-7xl md:leading-tight xl:text-8xl 2xl:text-[12rem]"
        >
          Toda la belleza de Cataluña en un solo clic
        </h1>
        <div className="relative mt-12">
          <div className="absolute inset-0 bg-green-300 rounded-full blur-sm"></div>
          <div className="relative border-none bg-white rounded-full py-2 bg-transparent md:px-6 lg:w-fit">
            <article className="text-wrap lg:text-nowrap text-black text-sm md:text-md lg:text-md xl:text-md 2xl:text-3xl lg:w-fit px-3">
              <p className="text-center">
                Explora, aprende y conecta con la esencia natural de Cataluña.
              </p>
              <p className="text-center">Cual sera tu proximo destino?</p>
            </article>
            {/* <article className="text-wrap lg:text-nowrap text-black text-sm md:text-md lg:text-md ms:w-60 mm:w-80 md:w-96 xl:text-md 2xl:text-3xl lg:w-fit px-3">
              <p className="text-center">
                Explora, aprende y conecta con la esencia natural de Cataluña.
              </p>
              <p className="text-center">Cual sera tu proximo destino?</p>
            </article> */}
          </div>
        </div>

        {/* <SearchBar /> */}
        <div className="h-screen absolute bottom-40">
          <Flecha paginacionScrollHome={paginacionScrollHome} />
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
