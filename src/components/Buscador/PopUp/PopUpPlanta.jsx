import { motion, AnimatePresence } from "framer-motion";

export const PopUpPlanta = ({
  setSearchForm,
  searchForm,
  onChangeForm,
  setFloresPopUp,
  setExpanded
}) => {
  const handleFunction = (value) => {
    if (onChangeForm) {
      onChangeForm({ ...value });
      setExpanded(false);
    } else {
      setSearchForm({ ...searchForm, ...value });
      setFloresPopUp(false);
    }
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 30,
        }}
        className="grid grid-cols-2 gap-3 h-full"
      >
        <div
          className="md:h-fit w-11/12 mx-auto border-2 rounded-xl px-3 py-1 bg-slate-50 cursor-pointer hover:bg-purple-100 hover:ease-in hover:duration-200"
          onClick={() => handleFunction({ flor: `Lavanda` })}
        >
          <img
            src={`/api/img/LavandaMaxFloracion.png`}
            className="md:h-20"
          />
          <h1 className="text-sm text-right flex justify-end hover:">
            Lavanda
          </h1>
        </div>
        <div
          className="md:h-fit w-11/12 mx-auto bg-slate-50 border-2 rounded-xl px-3 py-2 cursor-pointer hover:bg-red-100 hover:ease-in hover:duration-200"
          onClick={() => handleFunction({ flor: `Cerezo` })}
        >
          <img
            src={`/api/img/cerezas.png`}
            className="h-fit md:h-20"
          />
          <h1 className="text-sm text-right">Cerezo</h1>
        </div>
        <div
          className="md:h-fit w-11/12 mx-auto bg-slate-50 border-2 rounded-xl px-3 py-2 cursor-pointer hover:bg-purple-300 hover:ease-in hover:duration-200"
          onClick={() => handleFunction({ flor: `Viña` })}
        >
          <img
            src={`/api/img/viñaUvaGrande.png`}
            className="md:h-20"
          />
          <h1 className="text-sm text-right">Viña</h1>
        </div>
        <div
          className="md:h-fit w-11/12 mx-auto bg-slate-50 border-2 rounded-xl px-3 py-2 cursor-pointer hover:bg-green-100 hover:ease-in hover:duration-200"
          onClick={() => handleFunction({ flor: `Olivo` })}
        >
          <img
            src={`/api/img/olivos.png`}
            className="md:h-20"
          />
          <h1 className="text-sm text-right">Olivo</h1>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PopUpPlanta;
