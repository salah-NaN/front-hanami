import { MotionConfig, motion } from "framer-motion";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ButtonSearch from "../ButtonSearch";
import { useState } from "react";
import { IconPLanta, PopUpFecha } from "./";

import IconDondeIr from "./IconDondeIr";
import IconFecha from "./IconFecha";

export const PopUpBuscador = ({ toggleMobileNav }) => {
  const [expanded, setExpanded] = useState(false);
  const [openInput, setOpenInput] = useState(false);
  const [clickChoice, setClickChoice] = useState({
    punto_interes: true,
    actividades: false
  });
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const openInputSearch = () => {
    setOpenInput(true);
  };

  const clickChoicePuntoInteresActividad = () => {

  }

  return (
    <MotionConfig
      transition={{
        type: "spring",
        bounce: 0.099,
      }}
    >
      <motion.div
        className="bg-slate-100"
        key="mobile-search"
        initial={{ scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <motion.div className="py-5 px-5">
          <div className="w-full flex justify-start">
            <button onClick={() => toggleMobileNav()}>
              <svg
                width="30px"
                height="30px"
                stroke-width="1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
              >
                <path
                  d="M9.17218 14.8284L12.0006 12M14.829 9.17157L12.0006 12M12.0006 12L9.17218 9.17157M12.0006 12L14.829 14.8284"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#000000"
                  stroke-width="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <div className="flex w-full justify-center items-center gap-5 font-light text-sm">
              <div className="">Punto de Interes</div>
              <div className="">Actividades</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="h-screen text-2xl w-11/12 mx-auto"
          variants={{
            open: {
              y: "0%",
              opacity: 1,
            },
            closed: {
              y: "20%",
              opacity: 0,
            },
          }}
        >
          <motion.div className="shadow-xl">
            <Accordion
              defaultExpanded
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              className="border rounded-xl"
            >
              <AccordionSummary
                aria-controls="panel1bh-content"
                expandIcon={<IconDondeIr />}
                id="panel1bh-header"
                className="border border-black"
              >
                <h1 className="text-bold text-xl py-2">¿Donde quieres ir?</h1>
              </AccordionSummary>
              <AccordionDetails className="border-none">
                <div className="">
                  <div
                    className="flex items-center border rounded-xl text-[17px]"
                    onClick={openInputSearch}
                  >
                    <ButtonSearch
                      stylesButton={{
                        backGround: `bg-white`,
                        svgColor: `stroke-black`,
                        hover: `hover:bg-white`,
                        size: `h-12`,
                      }}
                    />
                    {openInput === true ? (
                      <input
                        type="text"
                        placeholder="Introduce tu destino"
                        className="focus:ring-0 focus:outline-none
                          flex w-full items-center h-full border-none
                          rounded-md placeholder:px-1 placeholder:text-[17px] border-black py-2"
                        autoFocus
                      />
                    ) : (
                      <>
                        <p>Introduce tu destino</p>
                      </>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="w-11/12 mx-auto border rounded-xl px-3 py-2 bg-slate-50">
                      <img src="/barcelona_comarca.svg" />
                      <h1 className="text-sm text-right">Barcelona</h1>
                    </div>
                    <div className="w-11/12 mx-auto bg-slate-50 border rounded-xl px-3 py-2">
                      <img src="/girona.svg" />
                      <h1 className="text-sm text-right">Girona</h1>
                    </div>
                    <div className="w-11/12 mx-auto bg-slate-50 border rounded-xl px-3 py-2">
                      <img src="/tarragona.svg" />
                      <h1 className="text-sm text-right">Tarragon</h1>
                    </div>
                    <div className="w-11/12 mx-auto bg-slate-50 border rounded-xl px-3 py-2">
                      <img src="/lleida.svg" />
                      <h1 className="text-sm text-right">Lleida</h1>
                    </div>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              className="border-none rounded-xl"
            >
              <AccordionSummary
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                className="border border-black rounded-xl"
                expandIcon={<IconFecha />}
              >
                <h1 className="text-xl text-bold py-2">¿Cuando quieres ir?</h1>
              </AccordionSummary>
              <AccordionDetails>
                <PopUpFecha />
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<IconPLanta />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                className="border border-black "
              >
                <h1 className="text-xl text-bold py-2">
                  ¿Que plantas quieres ver?
                </h1>
              </AccordionSummary>
              <AccordionDetails>
                <div className="flex justify-between w-full">
                  <div className="border rounded-lg px-3 py-2 gap-2 text-[18px] flex">Olivos<img src={`http://localhost:3000/img/LavandaMaxFloracion.png`} alt="" className="w-7" /></div>
                  <div className="border rounded-lg px-3 text-[18px]"><img src="" alt="" /> Lavanda</div>
                  <div className="border rounded-lg px-3 text-[18px]"><img src="" alt="" /> Cerezos</div>
                </div>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
};

export default PopUpBuscador;
