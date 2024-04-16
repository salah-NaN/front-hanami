import Footer from "../components/Footer";
import Mapa from "../components/mapa/Mapa";
import { useEffect, useRef, useState } from "react";
import { SearchBar, Banner } from "../components";
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
    fetch(url + `puntos_interes/;/;/;`)
      .then((res) => res.json())
      .then((hotTrends) => setHotTrends(hotTrends))
      .catch((error) => console.log(error));

    fetch(url + `puntos_interes`)
      .then((res) => res.json())
      .then((puntosInteres) =>
        setActividadOrPuntoInteres(
          puntosInteres?.map((e) => {
            return { ...e, queEs: "punto_interes" };
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
      <div className="">
        <Banner paginacionScrollHome={paginacionScrollHome} />
      </div>
      <div className="">
        <SearchBar moveToSearchBar={moveToSearchBar} />
      </div>
      <div className="">
        <CardBox hotTrends={hotTrends} />
      </div>
      <div className="pt-10 w-11/12 mx-auto">
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
