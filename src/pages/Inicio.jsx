import { useEffect, useRef, useState } from "react";
import { SearchBar, Banner, CardHotTrendItem } from "../components";
import CardBox from "../components/cardItem/CardBox";

export const Inicio = () => {
  //Seteamos el valor por defecto que sea null de useRef
  const moveToSearchBar = useRef(null);
  const [hotTrends, setHotTrends] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/api/";
    fetch(url + `/puntos_interes/;/;/;`)
      .then((res) => res.json())
      .then((hotTrends) => setHotTrends(hotTrends))
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
    </>
  );
};

export default Inicio;
