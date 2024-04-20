import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../components";
// constantes
const URL = "http://localhost:3000/api";
export const PuntoInteres = () => {
  const { id } = useParams();
  const [dataPuntoInteres, setDataPuntoInteres] = useState({});

  useEffect(() => {
    fetch(URL + "/punto_interes_page/" + id)
      .then((res) => res.json())
      .then((data) => {
        const { punto_interes_sin_flores } = data;
        setDataPuntoInteres(punto_interes_sin_flores);
      })
      .catch((err) => console.log(err));
  }, []);


  // el fetch contiene la info del Pdi
  // contiene la info de que flores tiene
  // contiene el propietaraio asociado
  // contiene las imágenes asociadas
  // contiene las temporadas asociadas
  // contiene las actividades asociadas a las temporadas
  return (
    <div className="">
      <h1 className="text-2xl">{dataPuntoInteres?.nombre}</h1>
      <div className="grid grid-cols-2">
        {dataPuntoInteres.imagenes?.map((img) => console.log(img))}
        {dataPuntoInteres.imagenes?.map((img) => {
          return <img src={`http://localhost:3000/olivos`} alt="" />;
        })}
      </div>
    </div>
  );
};

export default PuntoInteres;
