import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardItemMap } from "../components";
import MapaSinSlider from "../components/mapa/MapaSinSlider";
import { motion } from "framer-motion";
import GrowShrinkMap from "../components/GrowShrinkMap";
import Filter from "../components/filtros/Filter";
import { div } from "three/examples/jsm/nodes/Nodes.js";

export const Busqueda = () => {
  const { quehacer, localizacion, fecha, flor } = useParams();
  // los puntos de interes filtrados
  const [filterData, setFilterData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [checkedFilters, setCheckedFilters] = useState([])
  const [cambio, setCambio] = useState(false)



  useEffect(() => {
    const url = "http://localhost:3000/api/";
    fetch(url + `puntos_interes/${localizacion}/${fecha}/${flor}`)
      .then((res) => res.json())
      .then((filterData) => {
        console.log(filterData)
        setFilterData(filterData);
      })
      .catch((error) => console.log(error));
  }, []);

  /*     if(filterData.map(fd => fd.temporadas.map(t => t.nombre)) == filters?.filter(f=>f.seteado == true).map(f => f.temporada)){
        console.log("hola");
      } */
  useEffect(() => {
    setCambio(!cambio)
  }, [filters])

  useEffect(() => {
    setCheckedFilters(filters?.filter(f => f.seteado == true).map(f => f.temporada))
  }, [cambio])

  /* 
  pi => pi.temporadas.map(t=>t.nombre)
  
  */

  useEffect(() => {
    // testeo para ver si el filtro funciona
    // if (checkedFilters.length > 0) {
    //   checkedFilters.map(cf => cf)
    //   const test = filterData.filter(pi => pi.temporadas.find(t => checkedFilters.includes(t.nombre)))
    // }
  }, [checkedFilters])
  
  return (

    <div className="mt-20" >

      <div className="w-11/12 mx-auto border-none">
        <Filter setFilters={setFilters} filterData={filterData} />
        <div className="grid grid-cols-2 border-none rounded-md">
          <div className="">
            <div className="grid grid-cols-1 max-auto overflow-y-auto h-[600px]">
              {
                checkedFilters.length === 0 
                ?
                filterData && filterData?.map((puntos_interes) => (
                  <div className="w-full h-full overscroll-contain">
                    <CardItemMap puntos_interes={puntos_interes} quehacer={quehacer} />
                  </div>
                ))
                :
                filterData && filterData?.filter(pi => pi.temporadas.find(t => checkedFilters.includes(t.nombre))).map(puntoInteres => (
                  <div>
                    <div className="w-full h-full overscroll-contain">
                      <CardItemMap puntos_interes={puntoInteres} quehacer={quehacer} />
                    </div>
                  </div>
                ))
              }

            </div>
          </div>


          {filterData && (
            <MapaSinSlider
              puntosInteres={checkedFilters.length === 0 ? filterData : filterData.filter(pi => pi.temporadas.find(t => checkedFilters.includes(t.nombre)))}
              setPuntosInteres={setFilterData}
            />
          )}


        </div>


      </div>
    </div>



  );
};



export default Busqueda;