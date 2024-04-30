import React, {useEffect, useState, useRef} from "react";
import MapComponent from "./MapComponent";
//constantes
const URL = "/api";

// las imágenes de los cerezos
// import cerezas from '../../../public/images/cerezas'

export const Mapa = () => {
  // referencia del mapa
  const mapRef = useRef(null);
  // donde se almacenan todos los puntos de interes
  // state de todos los puntos de interes
  const [puntosInteres, setPuntosInteres] = useState([]);

  // fetch para sacar todos los puntos de interes y todas sus temporadas
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };
    fetch(URL + "/todos_puntos_interes", options)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        setPuntosInteres(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <MapComponent
      puntosInteres={puntosInteres}
      setPuntosInteres={setPuntosInteres}
    />
  );
};

export default Mapa;
