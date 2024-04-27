import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CardItemMap, NavBar } from "../components";
import MapaSinSlider from "../components/mapa/MapaSinSlider";
import { motion } from "framer-motion";
import GrowShrinkMap from "../components/GrowShrinkMap";
import Filter from "../components/filtros/Filter";
import { format, parse } from "date-fns";
import arrow from "../assets/nav-arrow-left.svg";
import arrowRight from "../assets/nav-arrow-right.svg";

export const BusquedaPrueba = () => {
  let { quehacer, localizacion, fecha, flor } = useParams();
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
    const url = "http://localhost:3000/api/";
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
    <div className="grid grid-cols-2 relative">

      {/* cards */}
      <div
        className={`grid grid-cols-1 md:grid md:grid-cols-2 md:gap-3
        ${mapSizeFull ? "" : ""}
      xl:grid xl:grid-cols-3 xl:gap-3 2xl:grid 2xlgrid-cols-3 2xl:gap-3 overflow-auto`}
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

      <div className={`w-full z-10 ${mapSizeFull ? "w-10" : "w-10"}`}>
        {/* boton expandir mapa en tamaño lg en adelante*/}
        <img
          className={`hidden
              lg:bg-[#fafafa] lg:z-[1000] lg:py-1 lg:px-1 lg:left-3 lg:block 
              lg:rounded-[5px] lg:shadow-lg lg:hover:bg-[#ededed] 
              lg:absolute lg:top-[9px] lg:cursor-pointer
              `}
          src={mapSizeFull ? arrowRight : arrow}
          onClick={() => setMapSizeFull(!mapSizeFull)}
        ></img>

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
        {filterData && (
          <MapaSinSlider
            puntosInteres={
              checkedFilters.length === 0
                ? filterData
                : filterData.filter((pi) =>
                    pi.temporadas.find((t) => checkedFilters.includes(t.nombre))
                  )
            }
            setPuntosInteres={setFilterData}
          />
        )}
      </div>
    </div>
  );
};

export default BusquedaPrueba;
