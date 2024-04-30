import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {CardItemMap, NavBar} from "../components";
import MapaSinSlider from "../components/mapa/MapaSinSlider";
import {motion} from "framer-motion";
import GrowShrinkMap from "../components/GrowShrinkMap";
import Filter from "../components/filtros/Filter";
import {format, parse} from "date-fns";
import {convertFieldResponseIntoMuiTextFieldProps} from "@mui/x-date-pickers/internals";
import {div} from "three/examples/jsm/nodes/Nodes.js";
import arrow from "../assets/nav-arrow-left.svg";
import arrowRight from "../assets/nav-arrow-right.svg";

export const Busqueda = () => {
  let {quehacer, localizacion, fecha, flor} = useParams();
  // los puntos de interes filtrados
  const [filterData, setFilterData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [checkedFilters, setCheckedFilters] = useState([]);
  const [cambio, setCambio] = useState(false);
  const [mapSizeFull, setMapSizeFull] = useState(false);
  const [posicionScroll, setPosicionScroll] = useState(window.scrollY);
  const redirect = useNavigate();

  useEffect(() => {
    window.addEventListener("onscroll", () => {
      setPosicionScroll(window.scrollY);
    });

    return () => {
      window.addEventListener("onscroll", () => {
        setPosicionScroll(window.scrollY);
      });
    };
  }, []);

  // constantes

  useEffect(() => {
    const url = "/api/";
    if (fecha !== ";") {
      fecha = format(parse(fecha, "dd-MM-yyyy", new Date()), "yyyy-MM-dd");
    }

    fetch(url + `puntos_interes/${localizacion}/${fecha}/${flor}`)
      .then((res) => res.json())
      .then((filterData) => {
        console.log(filterData);
        setFilterData(filterData);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setCambio(!cambio);
  }, [filters]);

  useEffect(() => {
    setCheckedFilters(
      filters?.filter((f) => f.seteado == true).map((f) => f.temporada)
    );
  }, [cambio]);

  return (
    <>
      <div
        className=" mt-[66px] flex flex-col rounded-md
        lg:flex-row-reverse bg-red-400"
      >
        {/* mapa */}
        <div
          className={`fixed w-full h-[300px]
        xm:h-[450px]
        xp:h-[630px]
        sm:h-[500px]
        md:h-[700px]
        ${
          mapSizeFull ? "lg:w-full" : "lg:w-5/12"
        } lg:w-5/12 lg:fixed lg:top-[75px] lg:h-dvh lg:z-20
        ${mapSizeFull ? "lg:w-full" : "xl:w-1/3"}`}
        >
          {filterData && (
            <MapaSinSlider
              puntosInteres={
                checkedFilters.length === 0
                  ? filterData
                  : filterData.filter((pi) =>
                      pi.temporadas.find((t) =>
                        checkedFilters.includes(t.nombre)
                      )
                    )
              }
              setPuntosInteres={setFilterData}
            />
          )}

          {/* boton expandir mapa en tamaño lg en adelante*/}
          <img
            className="hidden
              lg:bg-[#fafafa] lg:z-[1000] lg:py-1 lg:px-1 lg:left-3 lg:block lg:rounded-[5px] lg:shadow-lg lg:hover:bg-[#ededed] lg:absolute lg:top-[9px] lg:cursor-pointer"
            src={mapSizeFull ? arrowRight : arrow}
            onClick={() => setMapSizeFull(!mapSizeFull)}
          ></img>
        </div>

        {/* boton ir al mapa en tamaño sm hasta md*/}
        {/* ${posicionScroll > 200 ? 'block' : 'hidden'} */}
        <a
          href="#"
          className={` flex justify-between items-center px-2.5 py-1.5 fixed z-30 bottom-12 left-1/2 -translate-x-1/2 bg-red-700 
          lg:hidden`}
        >
          <p>Mostrar mapa</p>
          <img className="size-5" src={arrowRight}></img>
        </a>

        {/* cards */}
        <div
          className={`pt-10 absolute z-10 top-1/2 w-full grid grid-cols-1 gap-y-9 bg-[#fafafa] rounded-lg
          md:grid-cols-2 md:gap-x-3
          lg:${
            mapSizeFull ? "hidden" : "absolute"
          } lg:w-7/12 lg:left-0 lg:top-[76px] lg:grid-cols-2 lg:pt-0
          xl:w-2/3 xl:grid-cols-3
          2xl:grid-cols-4`}
        >
          {checkedFilters.length === 0
            ? filterData &&
              filterData?.map((puntos_interes) => (
                <CardItemMap
                  puntos_interes={puntos_interes}
                  quehacer={quehacer}
                />
              ))
            : filterData &&
              filterData
                ?.filter((pi) =>
                  pi.temporadas.find((t) => checkedFilters.includes(t.nombre))
                )
                .map((puntoInteres) => (
                  <CardItemMap
                    puntos_interes={puntoInteres}
                    quehacer={quehacer}
                  />
                ))}
        </div>
      </div>
    </>
  );
};
export default Busqueda;
