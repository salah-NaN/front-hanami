import Footer from '../components/Footer'
import Mapa from '../components/mapa/Mapa'
import { useEffect, useRef, useState } from "react";
import { SearchBar, Banner } from "../components";
import CardBox from "../components/cardItem/CardBox";
import SliderItems from "../components/SliderItems/SliderItems";
import {CardHotTrendItem} from '../components';

export const Inicio = () => {
  let url = "http://localhost:3000/api/";
  //Seteamos el valor por defecto que sea null de useRef
  const moveToSearchBar = useRef(null);
  const [hotTrends, setHotTrends] = useState([]);
  const [actividadOrPuntoInteres, setActividadOrPuntoInteres] = useState([]);

  useEffect(() => {
    fetch(url + `puntos_interes/;/;/;`)
      .then((res) => res.json())
      .then((hotTrends) => setHotTrends(hotTrends))
      .catch((error) => console.log(error));

    fetch(url + `puntos_interes`)
      .then((res) => res.json())
      .then((puntosInteres) => setActividadOrPuntoInteres(puntosInteres))
      .catch((error) => console.log(error));
  }, []);


  useEffect(() => {
    console.log(hotTrends)
  }, [hotTrends])

  const paginacionScrollHome = () => {
    moveToSearchBar.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <>
      <div className="">
        <Banner paginacionScrollHome={paginacionScrollHome} />
      </div>
      <div className="">
        <SearchBar moveToSearchBar={moveToSearchBar} />
      </div>
      <div className="">
        <CardBox hotTrends={hotTrends} />
      </div>

      <div className="w-11/12 mx-auto pt-40">
        {/* <Mapa /> */}
        <div className="grid grid-cols-2 sm:grid sm:grid-cols-2 md:grid md:grid-cols-6 lg:grid lg:grid-cols-6 xl:grid xl:grid-cols-6 max-auto gap-3">
          {hotTrends?.slice(0, 2).map((hotTrend) => (
            <div className="border-none w-full col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2 h-64">
              <CardHotTrendItem hotTrend={hotTrend} />
            </div>
          ))}
          {hotTrends?.slice(2, 6).map((hotTrend) => (
            <div className="border-none w-full col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2 h-64">
              <CardHotTrendItem hotTrend={hotTrend} />
            </div>
          ))}

        </div>
      </div>
        <div className="pt-10 w-11/12 mx-auto">
          <SliderItems url={url} setActividadOrPuntoInteres={setActividadOrPuntoInteres} actividadOrPuntoInteres={actividadOrPuntoInteres} />
        </div>
      <Footer />
    </>
  );
};

export default Inicio;
