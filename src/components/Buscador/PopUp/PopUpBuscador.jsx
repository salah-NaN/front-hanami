import { MotionConfig, motion } from "framer-motion";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ButtonSearch from "../ButtonSearch";
import { useEffect, useState } from "react";
import { IconPLanta, PopUpFecha, PopSearchPlace, PopUpPlanta } from "./";
import { useNavigate } from "react-router-dom";

import IconDondeIr from "./IconDondeIr";
import IconFecha from "./IconFecha";

export const PopUpBuscador = ({ toggleMobileNav }) => {
  const [expanded, setExpanded] = useState(false);
  const [openInput, setOpenInput] = useState(false);
  const navigate = useNavigate();

  const [clickChoice, setClickChoice] = useState({
    punto_interes: true,
    actividades: false,
  });

  const [formData, setFormData] = useState({
    localizacion: null,
    fecha: null,
    flor: null,
    eleccion: "puntoInteres",
  });

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const openInputSearch = () => {
    setOpenInput(true);
  };

  const clickChoicePuntoInteres = () => {
    setClickChoice({
      punto_interes: true,
      actividades: false,
    });
  };

  const clickChoiceActividad = () => {
    setClickChoice({
      punto_interes: false,
      actividades: true,
    });
  };

  useEffect(() => {
    if (clickChoice.actividades) {
      onChangeForm({ eleccion: `Actividades` });
    } else {
      onChangeForm({ eleccion: `Punto_de_Interes` });
    }
  }, [clickChoice]);

  const onChangeForm = (data) => {
    setFormData({ ...formData, ...data });
  };

  const onFormSubmit = () => {
    event.preventDefault();
    //desestructuramos el objeto de searchForm
    const { localizacion, eleccion, flor, fecha } = formData;
    const queHacer = eleccion;

    //miramos si hay datos en el objeto de searchForm, si hay datos pues los metemos en la url
    if (eleccion === "Punto_de_Interes") {
      // si no hay datos pues metemos esto ;
      navigate(
        `/busqueda/${queHacer}/${localizacion || ";"}/${fecha || ";"}/${
          flor || ";"
        }`
      );
    }
    if (queHacer === "Actividades") {
      // si no hay datos pues metemos esto ;
      navigate(
        `/actividades/${queHacer}/${localizacion || ";"}/${fecha || ";"}/${
          flor || ";"
        }`
      );
    }
  };

  return (
    <MotionConfig
      transition={{
        type: "spring",
        bounce: 0.099,
      }}
    >
      <motion.div
        className="bg-slate-100 block"
        key="mobile-search"
        initial={{ scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <form onSubmit={onFormSubmit}>
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
              <div
                className={`flex w-full justify-center items-center gap-5 font-light text-sm 
            `}
              >
                <div
                  className={`${
                    clickChoice.punto_interes === true
                      ? `border-b border-black transition duration-150 ease-out `
                      : ``
                  }`}
                  onClick={clickChoicePuntoInteres}
                >
                  Punto de Interes
                </div>
                <div
                  className={`${
                    clickChoice.actividades === true
                      ? `border-b border-black transition duration-150 ease-out `
                      : ``
                  }`}
                  onClick={clickChoiceActividad}
                >
                  Actividades
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="bg-slate-50 absolute bottom-0 w-full px-5 h-20 flex justify-end items-center">
            <div className="">
              <button
                className="border-none rounded-lg pr-4 text-md bg-green-400 text-white flex items-center"
                type="submit"
              >
                <ButtonSearch
                  stylesButton={{
                    size: `w-10 h-11`,
                    backGround: ``,
                    svgColor: `stroke-white`,
                  }}
                />
                <h1 className="font-bold">Buscar</h1>
              </button>
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
            <motion.div className="h-full">
              <motion.div className="shadow-xl">
                <motion.div className="border-none shadow-md pb-2">
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
                      {formData.localizacion === undefined ? (
                        <div className="">
                          <h1 className="text-bold text-xl py-2">
                            ¿Donde quieres ir?
                          </h1>
                        </div>
                      ) : (
                        <div className="">
                          <h1 className="text-bold text-xl">
                            {formData.localizacion}
                          </h1>
                          <h1 className="text-[15px] py-2">
                            ¿Donde quieres ir?
                          </h1>
                        </div>
                      )}
                    </AccordionSummary>
                    <AccordionDetails className="border-none">
                      <PopSearchPlace
                        openInputSearch={openInputSearch}
                        openInput={openInput}
                        onChangeForm={onChangeForm}
                        searchPc={""}
                      />
                    </AccordionDetails>
                  </Accordion>
                </motion.div>

                <motion.div className="border shadow-md">
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
                      {formData.fecha === null ? (
                        <h1 className="text-[15px] text-bold py-2">
                          ¿Cuando quieres ir?
                        </h1>
                      ) : (
                        <div className="">
                          <h1 className="text-xl font-bold">{formData.fecha}</h1>
                          <h1 className="text-sm py-2">¿Cuando quieres ir?</h1>
                        </div>
                      )}
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="flex justify-center">
                        <PopUpFecha onChangeForm={onChangeForm} />
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </motion.div>
                {clickChoice.punto_interes ? (
                  <motion.div
                    className="border-none pt-2 shadow-md rounded-lg"
                    initial={{ scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                  >
                    <Accordion
                      expanded={expanded === "panel3"}
                      onChange={handleChange("panel3")}
                    >
                      <AccordionSummary
                        expandIcon={<IconPLanta planta={formData.flor} />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        className="border border-black "
                      >
                        {formData.eleccion === undefined ? (
                          <h1 className="text-xl text-bold py-2">
                            ¿Que plantas quieres ver?
                          </h1>
                        ) : (
                          <div className="">
                            <h1 className="text-xl font-bold">
                              {formData.flor}
                            </h1>
                            <h1 className="text-[15px] py-2">
                              ¿Que plantas quieres ver?
                            </h1>
                          </div>
                        )}
                      </AccordionSummary>
                      <AccordionDetails>
                        <PopUpPlanta onChangeForm={onChangeForm} />
                      </AccordionDetails>
                    </Accordion>
                  </motion.div>
                ) : null}
              </motion.div>
            </motion.div>
          </motion.div>
        </form>
      </motion.div>
    </MotionConfig>
  );
};

export default PopUpBuscador;
