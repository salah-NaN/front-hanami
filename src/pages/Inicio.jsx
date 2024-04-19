import { useEffect, useRef, useState } from "react";
import {
  CardHotTrendItem,
  Banner,
  SliderItems,
  CardBox,
  SearchBar,
  Mapa,
  Footer,
} from "../components";
import { motion, useInView, useAnimation } from "framer-motion";

export const Inicio = () => {
  let url = "http://localhost:3000/api/";
  //Seteamos el valor por defecto que sea null de useRef
  const moveToSearchBar = useRef(null);
  const isSearchBarComponent = useRef(null);
  const [hotTrends, setHotTrends] = useState([]);
  const [actividadOrPuntoInteres, setActividadOrPuntoInteres] = useState([]);

  const scrollBuscadorRef = useRef(false);
  const isInView = useInView(scrollBuscadorRef);
  const mainControladorFlecha = useAnimation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    fetch(url + `puntos_interes/;/;/;`)
      .then((res) => res.json())
      .then((hotTrends) => setHotTrends(hotTrends))
      .catch((error) => console.log(error));

    fetch(url + `puntos_interes`)
      .then((res) => res.json())
      .then((puntosInteres) =>
        setActividadOrPuntoInteres(
          puntosInteres?.map((e) => {
            return { ...e, queEs: "puntosInteres" };
          })
        )
      )
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    isInView === true
      ? // ? mainControladorFlecha.start({
        //     opacity: 0,
        //     transitionDuration: 0,
        //   })
        // : mainControladorFlecha.start({
        //     opacity: 1,
        //     transitionDuration: 0,
        //   });
        setIsVisible(false)
      : setIsVisible(true);
  }, [isInView]);

  const paginacionScrollHome = () => {
    moveToSearchBar.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="">
      <div className="">
        <Banner />
      </div>
      <div className="bg-[#FFFFFF]" ref={scrollBuscadorRef}>
        <div className="py-12 w-10/12 mx-auto">
          <h1 className="text-5xl text-center pb-2">Busca por el mapa</h1>
          <Mapa />
        </div>
        <div className="w-10/12 mx-auto">
          <CardBox hotTrends={hotTrends} />
        </div>
        <div className="py-32">
          <div className="w-10/12 mx-auto md:w-[90%] md:mx-auto lg:w-[87%] lg:mx-auto xl:w-[87%] 2xl:w-[85%] relative">
            <SliderItems actividadOrPuntoInteres={actividadOrPuntoInteres} url={url} setActividadOrPuntoInteres={setActividadOrPuntoInteres} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Inicio;
