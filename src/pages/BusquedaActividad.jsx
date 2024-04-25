import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardItemMap } from "../components";
import MapaSinSlider from "../components/mapa/MapaSinSlider";
import { motion } from "framer-motion";
import GrowShrinkMap from "../components/GrowShrinkMap";
import Filter from "../components/filtros/Filter";
import FilterActividades from "../components/filtros/FilterActividades";
import FilterCategoria from "../components/filtros/FilterCategoria";
import CardActividades from "../components/cards/CardActividades"

export const  BusquedaActividad = () => {
  let { quehacer, localizacion, fecha, flor } = useParams();
  // los puntos de interes filtrados
  const [filterData, setFilterData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [filtersType, setFiltersType] = useState([]);



  useEffect(() => {
    const url = "http://localhost:3000/api/";
    if (fecha !== ";") {
      fecha = format(parse(fecha, "dd-MM-yyyy", new Date()), "yyyy-MM-dd");
    }
    fetch(url + `actividades/${localizacion}/${fecha}/${flor}`)
      .then((res) => res.json())
      .then((filterData) => {
          setFilterData(filterData);
        })
        .catch((error) => console.log(error));
    }, []);
    
  // useEffect(() => {
  // }, [filterData])

  useEffect(() => {
    // console.log(filterData)
  }, [filters])

  useEffect(() => {
    console.log(filtersType)
    const b = filterData.filter(a => a.categoria)
    console.log(filterData)
  }, [filtersType])
  

  return (

      <div className="mt-20">
        <div className="w-11/12 mx-auto border-none">
          <FilterActividades setFilters={setFilters} filterData={filterData} />
          <FilterCategoria setFiltersType={setFiltersType} filterData={filterData}/>
          <div className="flex flex-col border-none rounded-md">
            <div className="">
              <div className="grid grid-cols-1 max-auto overflow-y-auto h-[600px]">
                 {/* {filterData?.slice(0, 2).map((puntos_interes) => (
                  <div className="w-full h-full overscroll-contain">
                    <CardItemMap puntos_interes={puntos_interes} quehacer={quehacer} />
                  </div>
                ))} */}
                {
                  filters.length === 0 && filtersType.length === 0
                  ?
                  filterData?.map((puntos_interes) => (
                  <div className="w-full h-full">
                    <CardActividades puntos_interes={puntos_interes} quehacer={quehacer} />
                  </div>
                ))
                : 
                filterData && filterData?.filter(pi => {
                  return filters.length !== 0 ? filters.includes(pi.temporada.nombre) : true
                })
                .filter(pi => {
                  return filtersType.length !== 0 ? filtersType.includes(pi.categoria) : true 
                })
                .map(pi => (
                  <div className="w-full h-full">
                    <CardActividades puntos_interes={pi} quehacer={quehacer} />
                  </div>
                )) 
                } 
              </div>
            </div>

{/*             <motion.div
              className="relative flex justify-end w-full origin-left"
              initial={{ width: "300px" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1 }}
            >
               {filterData && (
                  <MapaSinSlider
                    puntosInteres={filterData}
                    setPuntosInteres={setFilterData}
                  />
                )} 
            </motion.div> */}
          </div>
        </div>
      </div>



  );
};

export default BusquedaActividad;
