import { useScroll, useTransform, motion } from "framer-motion";

export const Flecha = ({paginacionScrollHome}) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.1, 1], [1.2, 3]);

  return (
    <motion.div style={{ scale }} className="h-full border-none rounded-full p-2 cursor-pointer" 
    onClick={paginacionScrollHome}>
      <div className="flex justify-center items-end h-full">
        <svg
          viewBox="0 0 24 24"
          strokeWidth="1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#000000"
          className="w-10 animate-bounce"
        >
          <path
            d="M12 3L12 21M12 21L20.5 12.5M12 21L3.5 12.5"
            stroke="#000000"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </motion.div>
  );
};

export default Flecha;
