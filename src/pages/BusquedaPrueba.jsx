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
import { poblaciones } from "./utils/Hooks";

export const BusquedaPrueba = () => {
  let { quehacer, localizacion, fecha, flor } = useParams();
  // los puntos de interes filtrados
  const [filterData, setFilterData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [checkedFilters, setCheckedFilters] = useState([]);
  const [cambio, setCambio] = useState(false);
  const [mapSizeFull, setMapSizeFull] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [posicionScroll, setPosicionScroll] = useState(window.scrollY);
  const redirect = useNavigate();

  // recojo la poblacion y sus coordenadas
  const poblacion = poblaciones.find(
    (p) => p.nombre === localizacion.split(":")[1]
  );

  // setteo las coordenadas en base a la ciudad que llegue por parametro
  const [coordenadas, setCoordenadas] = useState(
    poblacion
      ? [poblacion.latitud, poblacion.longitud, 12]
      : [41.6092, 2.1477, 9]
  );

  // useEffect(() => {
  //   window.addEventListener("onscroll", () => {
  //     setPosicionScroll(window.scrollY);
  //   });

  //   return () => {
  //     window.addEventListener("onscroll", () => {
  //       console.log(event)
  //       setPosicionScroll(window.scrollY);
  //     });
  //   };
  // }, []);

  const handleShowMap = () => {
    setShowMap(!showMap);
  };

  // constantes
  useEffect(() => {
    const url = "http://localhost:3000/api/";
    if (fecha !== ";") {
      fecha = format(parse(fecha, "dd-MM-yyyy", new Date()), "yyyy-MM-dd");
    }

    fetch(url + `puntos_interes/${localizacion}/${fecha}/${flor}`)
      .then((res) => res.json())
      .then((filterData) => {
        setFilterData(filterData);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const url = "http://localhost:3000/api/";
    console.log(localizacion, fecha, flor);

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
  }, [quehacer, localizacion, fecha, flor]);

  useEffect(() => {
    setCambio(!cambio);
  }, [filters]);

  useEffect(() => {
    setCheckedFilters(
      filters?.filter((f) => f.seteado == true).map((f) => f.temporada)
    );
  }, [cambio]);

  return (
    <div className="md:mt-24">
      {/* <div
        className="lg:w-full lg:fixed lg:z-[9999] lg:left-[59rem] lg:top-[26px] 
        md:w-full md:fixed md:z-[9999] md:left-[59rem] md:top-[26px]"
      > */}
      <Filter setFilters={setFilters} filterData={filterData} />
      {/* </div> */}
      <div className="">
        <div
          // className={`md:grid md:grid-cols-2 md: md:mt-2 flex flex-col ${
          //   showMap ? `mt-20` : `mt-[22rem]`
          // }`}
          className={`md:flex md:mt-2 flex flex-col ${
            showMap ? `mt-20` : `mt-[22rem] xm:mt-[16rem]`
          }`}
        >
          {/* cards */}
          {!showMap ? (
            <div
              className={`md:w-7/12 grid grid-cols-1 md:grid md:grid-cols-2 md:gap-3
            xl:grid xl:grid-cols-3 xl:gap-3 2xl:grid 
            2xl:grid-cols-3 2xl:gap-3 z-10 bg-[#FAFAFA] pt-5 md:pt-0`}
            >
              {/* <h1 className="text-3xl text-center py-7">Puntos de interes</h1> */}
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
                      pi.temporadas.find((t) =>
                        checkedFilters.includes(t.nombre)
                      )
                    )
                    .map((puntoInteres) => (
                      <CardItemMap
                        puntos_interes={puntoInteres}
                        quehacer={quehacer}
                      />
                    ))}

              <a
                href="#"
                onClick={handleShowMap}
                className={`border rounded-full flex justify-between items-center px-3 py-2.5 fixed z-50 bottom-12 left-1/2 -translate-x-1/2 
                md:hidden lg:hidden bg-green-400 font-bold `}
              >
                {showMap ? (
                  <p className="text-md text-white pr-2">Cards</p>
                ) : (
                  <p className="text-md text-white pr-2">Mapa</p>
                )}
                <svg
                  width="25px"
                  height="25px"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#FFFFFF"
                >
                  <path
                    d="M9 19L3.78974 20.7368C3.40122 20.8663 3 20.5771 3 20.1675L3 5.43246C3 5.1742 3.16526 4.94491 3.41026 4.86325L9 3M9 19L15 21M9 19L9 3M15 21L20.5897 19.1368C20.8347 19.0551 21 18.8258 21 18.5675L21 3.83246C21 3.42292 20.5988 3.13374 20.2103 3.26325L15 5M15 21L15 5M15 5L9 3"
                    stroke="#FFFFFF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                {/* <img className="size-9 pl-3" src={arrowRight}></img> */}
              </a>
            </div>
          ) : (
            // null
            <div className="border fixed rounded-md bg-white bottom-0 flex items-end justify-center w-full h-full"></div>
          )}

          {/* revisar esto */}
          <div
            className={`${
              mapSizeFull
                ? "md:w-full md:z-10 fixed"
                : "md:h-full md:w-5/12 w-full h-1/2 fixed top-0 md:right-0 md:z-10"
            }
        ${showMap ? `h-5/6 w-full` : `md:h-full fixed w-full h-2/5`}`}
          >
            {/* boton expandir mapa en tamaño lg en adelante*/}
            <img
              className={`
          md:bg-[#fafafa] md:z-[9999] md:py-1 md:px-1 md:left-0 md:block 
              md:rounded-[5px] md:shadow-md md:hover:bg-[#ededed]
              
              md:absolute md:bottom-[50rem] md:cursor-pointer
              lg:bg-[#fafafa] lg:z-[9999] lg:py-1 lg:px-1 lg:left-0 lg:block 
              lg:rounded-[5px] lg:shadow-lg lg:hover:bg-[#ededed] 
              lg:absolute lg:top-0 lg:cursor-pointer xl:z-[9999]`}
              src={mapSizeFull ? arrow : arrowRight}
              onClick={() => setMapSizeFull(!mapSizeFull)}
            ></img>
            <a
              href="#"
              onClick={handleShowMap}
              className={`border rounded-full flex justify-between items-center px-5 py-2.5 fixed z-50 bottom-12 left-1/2 -translate-x-1/2 
                md:hidden lg:hidden bg-green-400 font-bold`}
            >
              {showMap ? (
                <p className="text-xl text-white">Cards</p>
              ) : (
                <p className="text-xl text-white pr-2">Mapa</p>
              )}
              {/* <img className="size-5" src={arrowRight}></img> */}
            </a>
            {/* boton ir al mapa en tamaño sm hasta md*/}
            {/* ${posicionScroll > 200 ? 'block' : 'hidden'} */}

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
                latlonzoom={coordenadas}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusquedaPrueba;
