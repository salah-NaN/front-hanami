import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
} from "framer-motion";
import { useEffect } from "react";
import { SearchBar } from './SearchBar'

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Banner = () => {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #FFFFFF 50%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 12,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <>
      <motion.div
        style={{ backgroundImage }}
        className="relative grid min-h-screen place-items-center overflow-hidden
       bg-gray-950 px-4 py-24 text-gray-200"
      >
        <div className="relative z-10 flex flex-col items-center w-full h-full">
          <h1
            className="max-w-5xl bg-gradient-to-br from-black to-gray-400 bg-clip-text text-center text-3xl 
            font-medium leading-tight text-transparent sm:text-3xl sm:leading-tight md:text-8xl md:leading-tight"
          >
            Toda la velleza de Cataluña a un solo clic
          </h1>
         <SearchBar />
        </div>
      </motion.div>
    </>
  );
};

export default Banner;
