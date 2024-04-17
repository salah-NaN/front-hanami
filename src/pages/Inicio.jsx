import Footer from "../components/Footer";
import Mapa from "../components/mapa/Mapa";
import { useEffect, useRef, useState } from "react";
import { SearchBar, Banner, NavBar } from "../components";
import CardBox from "../components/cardItem/CardBox";
import SliderItems from "../components/SliderItems/SliderItems";
import { CardHotTrendItem } from "../components";

export const Inicio = () => {
  let url = "http://localhost:3000/api/";
  //Seteamos el valor por defecto que sea null de useRef
  const moveToSearchBar = useRef(null);
  const [hotTrends, setHotTrends] = useState([]);
  const [actividadOrPuntoInteres, setActividadOrPuntoInteres] = useState();

  useEffect(() => {
    // fetch(url + `puntos_interes/;/;/;`)
    //   .then((res) => res.json())
    //   .then((hotTrends) => setHotTrends(hotTrends))
    //   .catch((error) => console.log(error));

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

  const paginacionScrollHome = () => {
    moveToSearchBar.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header><NavBar /></header>
      <div className="">
        <Banner paginacionScrollHome={paginacionScrollHome} />
      </div>
      <div className="">
        <SearchBar moveToSearchBar={moveToSearchBar} />
      </div>
      <div className="w-10/12 mx-auto">
        <CardBox hotTrends={hotTrends} />
      </div>
      <div className="pt-10 w-[87%] mx-auto relative">
        <SliderItems
          url={url}
          setActividadOrPuntoInteres={setActividadOrPuntoInteres}
          actividadOrPuntoInteres={actividadOrPuntoInteres}
        />
      </div>
      <Footer />
    </>
  );
};

export default Inicio;
