import { motion } from "framer-motion";

export const PopUpQueHacer = () => {
  return (
    <motion.div
      className="w-full"
      initial={{ scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30,
      }}
    >
      <div className="">
        <div
          className="cursor-pointer hover:bg-[#EBEBEB] hover:border-none
         hover:rounded-lg px-4 py-2 hover:font-bold flex gap-2 items-center"
        >
          <h1>Punto de interes</h1>
          <img src="./campos.png" alt="" className="w-7" />
        </div>
        <div
          className="cursor-pointer hover:bg-[#EBEBEB] hover:border-none
         hover:rounded-lg px-4 py-2 hover:font-bold flex items-center gap-2"
        >
          <h1>Activiades</h1>
          <img src="./cometa.png" alt="" className="w-7" />
        </div>
      </div>
    </motion.div>
  );
};

export default PopUpQueHacer;
