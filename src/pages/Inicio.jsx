import { useEffect, useRef, useState } from "react";
import { SearchBar, Banner, CardHotTrendItem } from "../components";

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
      <div className="w-11/12 mx-auto">
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
    </>
  );
};

export default Inicio;
