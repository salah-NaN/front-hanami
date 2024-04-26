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

export const Inicio = () => {
  let url = "http://localhost:3000/api/";
  //Seteamos el valor por defecto que sea null de useRef
  const isSearchBarComponent = useRef(null);
  const [hotTrends, setHotTrends] = useState([]);
  const [actividadOrPuntoInteres, setActividadOrPuntoInteres] = useState([]);

  const scrollBuscadorRef = useRef(false);

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
      <div className="bg-[#FFFFFF] w-10/12 mx-auto" ref={scrollBuscadorRef}>
        <div className="w-[90%] mx-auto">
          <div className="py-12 w-10/12 mx-auto">
            <h1 className="text-5xl text-center pb-2">Busca por el mapa</h1>
            <Mapa />
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
