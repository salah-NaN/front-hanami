import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardItemMap } from "../components";
import MapaSinSlider from "../components/mapa/MapaSinSlider";
import { motion } from "framer-motion";
import GrowShrinkMap from "../components/GrowShrinkMap";
import Filter from "../components/Filter";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Busqueda = () => {
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
        setFilterData(filterData);
      })
      .catch((error) => console.log(error));
  }, []);

  /*     if(filterData.map(fd => fd.temporadas.map(t => t.nombre)) == filters?.filter(f=>f.seteado == true).map(f => f.temporada)){
        console.log("hola");
      } */
  useEffect(() => {
    setCambio(!cambio)
    console.log("coso", filters);
  }, [filters])

  useEffect(() => {
    setCheckedFilters(filters?.filter(f => f.seteado == true).map(f => f.temporada))
  }, [cambio])

  /* 
  pi => pi.temporadas.map(t=>t.nombre)
  
  */

  useEffect(() => {
    if (checkedFilters.length > 0) {
      checkedFilters.map(cf => cf)
      const test = filterData.filter(pi => pi.temporadas.find(t => checkedFilters.includes(t.nombre)))
    }
    console.log("dentro de checkedFilters", checkedFilters);
  }, [checkedFilters])
  /*   
  console.log('filtros desde buscador',filterData?.map( (pi) => pi.temporadas?.map(t=>  t.nombre == checkedFilters.map(f => f.temporada))))
  console.log('asdfasdfasdf',filterData[0]?.temporadas[0]?.nombre == filters.filter(f=>f.seteado == true).map(f => f.temporada))
 */
  return (
    <>
      <div>

        <div className="w-11/12 mx-auto border-none">
          <Filter setFilters={setFilters} filterData={filterData} />

          {
            checkedFilters.length == 0 ?
              <div className="grid grid-cols-2 border-none rounded-md">
                <div className="">
                  <div className="grid grid-cols-1 max-auto overflow-y-auto h-[600px]">
                    {filterData?.map((puntos_interes) => (
                      <div className="w-full h-full overscroll-contain">
                        <CardItemMap puntos_interes={puntos_interes} quehacer={quehacer} />
                      </div>
                    ))}

                  </div>
                </div>

                <motion.div
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
                </motion.div>

              </div> :
              <div>{
                filterData.filter(pi => pi.temporadas.find(t => checkedFilters.includes(t.nombre))).map(puntoInteres => (
                  <div>
                    <div className="w-full h-full overscroll-contain">
                      <CardItemMap puntos_interes={puntoInteres} quehacer={quehacer} />

                    </div>

                  </div>
                ))

              }
                
{/*                 <motion.div
                        className="relative flex justify-end w-full origin-left"
                        initial={{ width: "300px" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1 }}
                      >

                        <MapaSinSlider
                          puntosInteres={filterData.filter(pi => pi.temporadas.find(t => checkedFilters.includes(t.nombre)))}
                          setPuntosInteres={setFilterData}
                        />

                      </motion.div> */}
               

              </div>

          }

        </div>
      </div>


    </>
  );
};

export default Busqueda;
/* 
            {
              checkedFilters.length == 0 ? <div className="flex flex-col">{filterData?.map((puntos_interes) => (
                <div className="w-full h-full overscroll-contain">
                  <CardItemMap puntos_interes={puntos_interes} quehacer={quehacer} />
                </div>
              ))}</div> :
              filterData.filter(pi => pi.temporadas.find(t=> checkedFilters.includes(t.nombre) )).map(puntoInteres => (
                <div>
                  <div className="w-full h-full overscroll-contain">
                      <CardItemMap puntos_interes={puntoInteres} quehacer={quehacer} />
                  
                  </div>

                              <motion.div
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
            </motion.div>
                </div>
              ))
            

                } 


*/