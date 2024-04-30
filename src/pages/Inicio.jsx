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
        <div className="md:w-[90%] mx-auto">
          <div className="py-32 w-10/12 mx-auto">
            <h1 className="text-6xl w-fit mx-auto text-center mb-2 bg-gradient-to-r from-[#32b74b] to-[#929292] bg-clip-text text-transparent
            lg:mb-2
            xl:mb-16">Busca por el mapa</h1>
            <div className="flex flex-col gap-10
            xl:flex-row xl:gap-20" >
              <div className=" mb-10 mt-[4rem]
              xl:w-5/12 xl:mt-0">
                <h4 className="text-[32px] mb-5 w-fit mx-auto text-[#909391]
                xl:mb-4" >Temporadas</h4>
                <div className=" w-full  grid grid-cols-2 gap-3 bg-[#fafafa] shadow-lg border border-[##53cd68] rounded-xl  p-4
                xl:h-[500px]">
                  <div className="border-2 border-[#f8b2c2] bg-[#ffe3ea] rounded-lg">
                    {
                      nombreConvertido.map((etapa) => {
                        console.log(etapa)
                        if (etapa.nombre.startsWith('Cerezo')) {
                          return <div className=" rounded-lg px-3 py-1 flex  justify-between items-center gap-1">
                            <p>{etapa.convertido}</p>
                            <img className="size-7" src={`http://localhost:3000/img/${etapa.nombre}.png`} alt={etapa} key={etapa} />
                          </div>
                        }
                      })
                    }
                  </div>
                  <div className="border-2 border-[#b4b46a] bg-[#e6e6cc] rounded-lg">
                    {
                      nombreConvertido.map((etapa) => {
                        console.log(etapa)
                        if (etapa.nombre.startsWith('Olivo')) {
                          return <div className=" rounded-lg px-3 py-1 flex  justify-between items-center gap-1">
                            <p>{etapa.convertido}</p>
                            <img className="size-7" src={`http://localhost:3000/img/${etapa.nombre}.png`} alt={etapa} key={etapa} />
                          </div>
                        }
                      })
                    }
                  </div>
                  <div className="border-2 border-[#4e1318] bg-[#f1cfee] rounded-lg">
                    {
                      nombreConvertido.map((etapa) => {
                        console.log(etapa)
                        if (etapa.nombre.startsWith('Viña')) {
                          return <div className=" rounded-lg px-3 py-1 flex  justify-between items-center gap-1">
                            <p>{etapa.convertido}</p>
                            <img className="size-7" src={`http://localhost:3000/img/${etapa.nombre}.png`} alt={etapa} key={etapa} />
                          </div>
                        }
                      })
                    }
                  </div>
                  <div className="border-2 border-[#b07ad6] bg-[#f3e1ff] rounded-lg">
                    {
                      nombreConvertido.map((etapa) => {
                        if (etapa.nombre.startsWith('Lavanda')) {
                          return <div className=" rounded-lg px-3 py-1 flex  justify-between items-center gap-1">
                            <p>{etapa.convertido}</p>
                            <img className="size-7" src={`http://localhost:3000/img/${etapa.nombre}.png`} alt={etapa} key={etapa} />
                          </div>
                        }
                      })
                    }
                  </div>
                </div>
              </div>
              <div className="w-full
              xl:w-7/12">

                <Mapa />
              </div>
            </div>
          </div>
          <div className="w-10/12 mx-auto">
            <CardBox hotTrends={hotTrends} />
          </div>
          <div className="pt-32">
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
