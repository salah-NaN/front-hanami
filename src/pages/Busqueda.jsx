import { useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <div className="bg-red-400 w-11/12 mx-auto">
      <div className="grid grid-cols-2">
        <div className="">{/* Mapa */}</div>
        <div className="">
          {/* Cards */}
          <CardItem puntos_interes={filterData} />
        </div>
      </div>
    </div>
  );
};

export default Busqueda;
