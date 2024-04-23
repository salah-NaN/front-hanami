import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardItemMap, NavBar } from "../components";
import MapaSinSlider from "../components/mapa/MapaSinSlider";
import { motion } from "framer-motion";
import GrowShrinkMap from "../components/GrowShrinkMap";
import Filter from "../components/filtros/Filter";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import arrow from '../assets/nav-arrow-left2.svg'
import arrowRight from '../assets/nav-arrow-right.svg'


export const Busqueda = () => {
  const { quehacer, localizacion, fecha, flor } = useParams();
  // los puntos de interes filtrados
  const [filterData, setFilterData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [checkedFilters, setCheckedFilters] = useState([])
  const [cambio, setCambio] = useState(false)
  const [mapSizeFull, setMapSizeFull] = useState(false)



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

    // <div className="mt-20" >
    //   {/* <Filter setFilters={setFilters} filterData={filterData} /> */}

    //   <div className="flex flex-col rounded-md
    //     md:flex-row-reverse">


    //     {/* mapa */}
    //     <div className="relative w-full">
    //       <div className="fixed w-10/12 left-1/2 -translate-x-1/2 h-96 z-10 right-0">
    //         {filterData && (
    //           <MapaSinSlider
    //             puntosInteres={checkedFilters.length === 0 ? filterData : filterData.filter(pi => pi.temporadas.find(t => checkedFilters.includes(t.nombre)))}
    //             setPuntosInteres={setFilterData}
    //           />
    //         )}
    //       </div>
    //     </div>



    //     {/* cards */}
    //     <div className="absolute z-20 top-1/2  flex flex-col bg-red-500 rounded-lg w-full ">
    //       {
    //         checkedFilters.length === 0
    //           ?
    //           filterData && filterData?.map((puntos_interes) => (
    //             <CardItemMap puntos_interes={puntos_interes} quehacer={quehacer} />
    //           ))
    //           :
    //           filterData && filterData?.filter(pi => pi.temporadas.find(t => checkedFilters.includes(t.nombre))).map(puntoInteres => (
    //             <CardItemMap puntos_interes={puntoInteres} quehacer={quehacer} />
    //           ))
    //       }

    //     </div>



    //   </div>


    // </div>
    <>

      <NavBar />
      {/* <Filter setFilters={setFilters} filterData={filterData} /> */}
      <div className=" mt-[66px] flex flex-col rounded-md
        lg:flex-row-reverse">


        {/* mapa */}
        <div className={`xm:h-[550px]
        xp:h-[630px]
        sm:h-[750px]
        fixed w-full
          lg:${mapSizeFull ? 'w-full' : 'w-5/12'} lg:fixed lg:top-[75px] lg:h-dvh lg:z-20
          xl:${mapSizeFull ? 'w-full' : 'w-1/3'}`}>
          {filterData && (
            <MapaSinSlider
              puntosInteres={checkedFilters.length === 0 ? filterData : filterData.filter(pi => pi.temporadas.find(t => checkedFilters.includes(t.nombre)))}
              setPuntosInteres={setFilterData}
            />
          )}
          {/* boton expandir mapa */}
          <img className="hidden 
              lg:bg-[#fafafa] lg:z-[1000] lg:py-1 lg:px-1 lg:left-3 lg:block lg:rounded-full lg:shadow-lg lg:hover:bg-[#ededed] lg:absolute lg:top-[9px] lg:cursor-pointer"
            src={mapSizeFull ? arrowRight : arrow}
            onClick={() => setMapSizeFull(!mapSizeFull)}
          ></img>
        </div>




        {/* cards */}
        <div className={`pt-10 absolute z-10 top-1/2 w-full grid grid-cols-1 gap-y-9 bg-[#fafafa] rounded-lg
          md:grid-cols-2 md:gap-x-3
          lg:${mapSizeFull ? 'hidden' : 'absolute'} lg:w-7/12 lg:left-0 lg:top-[76px] lg:grid-cols-2 lg:pt-0
          xl:w-2/3 xl:grid-cols-3
          2xl:grid-cols-4`}>
          {
            checkedFilters.length === 0
              ?
              filterData && filterData?.map((puntos_interes) => (
                <CardItemMap puntos_interes={puntos_interes} quehacer={quehacer} />
              ))
              :
              filterData && filterData?.filter(pi => pi.temporadas.find(t => checkedFilters.includes(t.nombre))).map(puntoInteres => (
                <CardItemMap puntos_interes={puntoInteres} quehacer={quehacer} />
              ))
          }

        </div>



      </div>


    </>

  );
};



export default Busqueda;