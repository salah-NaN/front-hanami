import { useEffect, useRef, useState } from "react";
import {
  CardHotTrendItem,
  Banner,
  SliderItems,
  CardBox,
  SearchBar,
  Mapa,
  Footer,
  NavBar,
} from "../components";
import { motion, useInView, useAnimation } from "framer-motion";
import { nombreConvertido } from './utils/Hooks'


export const Inicio = () => {
  let url = "http://localhost:3000/api/";
  //Seteamos el valor por defecto que sea null de useRef
  const isSearchBarComponent = useRef(null);
  const [hotTrends, setHotTrends] = useState([]);
  const [actividadOrPuntoInteres, setActividadOrPuntoInteres] = useState([]);

  const scrollBuscadorRef = useRef(false);

  // contexto para ver si está logueado un cliente o no

  useEffect(() => {
    fetch(url + `puntos_interes/;/;/;`)
      .then((res) => res.json())
      .then((hotTrends) => setHotTrends(hotTrends))
      .catch((error) => console.log(error));

    fetch(url + `/actividades_or_puntointeres`)
      .then((res) => res.json())
      .then((puntosInteres) => setActividadOrPuntoInteres(puntosInteres))
      .catch((error) => console.log(error));

  }, []);



  return (
    <div className="bg-white">
      <div className="" id="banner">
        <NavBar />
        <Banner />
      </div>
      <div className="bg-[#FFFFFF]  mx-auto" ref={scrollBuscadorRef}>
        <div className="w-[90%] mx-auto">
          <div className="py-32 w-10/12 mx-auto">
            <h1 className="text-6xl text-center mb-12">Busca por el mapa</h1>
            <div className="flex gap-20" >
              {/* <div></div> */}
              {/* <h4>Leyenda</h4> */}
              <div className="w-1/2 border-2 grid grid-cols-2 gap-7 bg-[#f7fff8] border-[#7fe48f] rounded-lg mt-10 mb-10 p-7">
                <div className="border-2 border-[#ed5fb2] rounded-lg">
                  {
                    nombreConvertido.map((etapa) => {
                      console.log(etapa)
                      if (etapa.nombre.startsWith('Cerezo')) {
                        <div className="flex gap-2">
                          <p>{etapa.convertido}</p>
                          <img className="size-7" src={`http://localhost:3000/img/${etapa.nombre}.png`} alt={etapa} key={etapa} />
                        </div>
                      }
                    })
                  }
                </div>
                <div className="border-2 border-[#ed5fb2] rounded-lg"> </div>
                <div className="border-2 border-[#ed5fb2] rounded-lg"> </div>
                <div className="border-2 border-[#ed5fb2] rounded-lg"> </div>
              </div>
              <div className="w-1/2">

                <Mapa />
              </div>
            </div>
          </div>
          <div className="w-10/12 mx-auto">
            <CardBox hotTrends={hotTrends} />
          </div>
          <div className="py-32">
            <div className="w-10/12 mx-auto md:w-[90%] md:mx-auto lg:w-[87%] lg:mx-auto xl:w-[87%] 2xl:w-[85%] relative">
              <SliderItems
                actividadOrPuntoInteres={actividadOrPuntoInteres}
                setActividadOrPuntoInteres={setActividadOrPuntoInteres}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Inicio;
