import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardItemMap } from "../components";

export const Busqueda = () => {
  const { quehacer, localizacion, fecha, flor } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/api/";
    fetch(url + `puntos_interes/${localizacion}/${fecha}/${flor}`)
      .then((res) => res.json())
      .then((filterData) => setFilterData(filterData))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-11/12 mx-auto border-none">
      <div className="grid grid-cols-2 border-none rounded-md">
        <div className="">
          <div className="grid grid-cols-1 max-auto overflow-y-auto h-[600px]">
            {filterData?.slice(0, 2).map((puntos_interes) => (
              <div className="w-full h-full overscroll-contain">
                <CardItemMap puntos_interes={puntos_interes} />
              </div>
            ))}
            {filterData?.slice(2, 6).map((puntos_interes) => (
              <div className="w-full h-full">
                <CardItemMap puntos_interes={puntos_interes} />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-sky-200 border rounded-md">{/* Mapa */}Mapa</div>
      </div>
    </div>
  );
};

export default Busqueda;
