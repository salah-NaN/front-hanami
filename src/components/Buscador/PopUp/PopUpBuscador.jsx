import { MotionConfig, motion } from "framer-motion";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ButtonSearch from "../ButtonSearch";
import { useState } from "react";
import { styled } from "@mui/material/styles";

export const PopUpBuscador = ({ toggleMobileNav }) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const useStyles = styled((theme) => ({
    AccordionStyle: {
      border: 'none',
      boxShadow: 'none'
    }
  }));
  
  const classes = useStyles();

  return (
    <MotionConfig
      transition={{
        type: "spring",
        bounce: 0.099,
      }}
      x
    >
      <motion.div
        className="bg-white"
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
            {/* <Logo /> */}
            <button onClick={() => toggleMobileNav()}>Cerrar</button>
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
          <motion.div>
            <Accordion defaultExpanded className={classes.accordion}>
              {/* <div className="bg-red-300">
              </div> */}
              <AccordionDetails
                className="border-none rounded-t-xl shadow-md"
                style={{ boxShadow: ` 0px 0px 14px grey` }}
              >
                <h1 className="text-bold text-2xl py-5">¿Donde quieres ir?</h1>
                <div className="">
                  <div className="flex items-center border rounded-xl text-[17px]">
                    <ButtonSearch
                      stylesButton={{
                        backGround: `bg-white`,
                        svgColor: `stroke-black`,
                        hover: `hover:bg-white`
                      }}
                    />
                    Introduce tu destino
                  </div>

                  <div className="">
                    
                  </div>
                </div>
                {/* <input
                  type="text"
                  placeholder="Introduce tu destino"
                  className="
                  flex w-full items-center h-full border 
                  rounded-md placeholder:px-2 placeholder:text-[17px] border-black py-2"
                /> */}
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              className="border-none rounded-xl"
            >
              <AccordionSummary
                // expandIcon={}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                className="border border-black rounded-xl"
              ></AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                // expandIcon={}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                className="border border-black "
              ></AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                // expandIcon={}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                className="border border-black "
              ></AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
};

export default PopUpBuscador;
