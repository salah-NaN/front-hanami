import { useEffect, useRef, useState } from "react";
import { SearchBar, Banner } from "../components";
import CardBox from "../components/cardItem/CardBox";
import SliderItems from "../components/SliderItems/SliderItems";

export const Inicio = () => {
  let url = "http://localhost:3000/api/";
  //Seteamos el valor por defecto que sea null de useRef
  const moveToSearchBar = useRef(null);
  const [hotTrends, setHotTrends] = useState([]);
  const [actividadOrPuntoInteres, setActividadOrPuntoInteres] = useState([]);

  useEffect(() => {
    fetch(url + `/puntos_interes/;/;/;`)
        .then((res) => res.json())
        .then((hotTrends) => setHotTrends(hotTrends))
      .catch((error) => console.log(error));

    fetch(url + `puntos_interes`)
      .then((res) => res.json())
      .then((puntosInteres) => setActividadOrPuntoInteres(puntosInteres))
    .catch((error) => console.log(error));
  }, []);

  const swipeActividades = () => {
    fetch(url + `actividades`)
      .then((res) => res.json())
      .then((actividades) => setActividadOrPuntoInteres(actividades))
      .catch((error) => console.log(error));
  };

  const swipePuntosInteres = () => {
    fetch(url + `puntos_interes`)
      .then((res) => res.json())
      .then((puntos_interes) => setActividadOrPuntoInteres(puntos_interes))
      .catch((error) => console.log(error));
  };

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
        <h1 className="text-3xl pb-4">Donde quieres ir hoy?</h1>
        <div className="flex gap-5">
          <button className="" onClick={swipePuntosInteres}>
            Puntos de interes
          </button>
          <button className="" onClick={swipeActividades}>
            Actividades
          </button>
        </div>
        <SliderItems actividadOrPuntoInteres={actividadOrPuntoInteres} />
      </div>
    </>
  );
};

export default Inicio;
