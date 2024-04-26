import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function useCustomSearch(puntosDeInteres) {
  const navigate = useNavigate();
  const ref = useRef();
  const [foundWord, setFoundWord] = useState([]);
  const [searchForm, setSearchForm] = useState({
    localizacion: null,
    fecha: [],
    flor: null,
    queHacer: null,
  });

  const [popUp, setPopUp] = useState({
    buscador: false,
    flor: false,
    queHacer: false,
    fecha: false,
  });

  const [isCheck, setIsCheck] = useState("");

  useEffect(() => {
    //Seteamos los valores por defecto de el SearchForm
    setSearchForm({
      localizacion: null,
      fecha: null,
      flor: null,
      queHacer: "",
    });
  }, []);

  //Buscador input
  useEffect(() => {
    const { localizacion } = searchForm;
    if (localizacion === "") {
      setFoundWord([]);
    }

    setSearchForm({
      ...searchForm,
      provincia: null,
    });

    let arr = [];
    puntosDeInteres?.map((item) => {
      if (localizacion) {
        if (
          item?.poblacion?.toLowerCase().includes(localizacion.toLowerCase()) ||
          item?.poblacion?.toUpperCase().includes(localizacion.toUpperCase())
        ) {
          arr.push({ poblacion: item?.poblacion, provincia: item?.provincia });
        }
      }
    });

    /* Hacemos el new set para que no hayan duplicados.
        Luego pues convertimos los datos del array arr para pasarlos a stringify y apartir de ahí
        quitar los datos duplicados
    */
    arr = new Set(
      arr.map((poblacion) =>
        JSON.stringify({
          poblacion: poblacion.poblacion,
          provincia: poblacion.provincia,
        })
      )
    );
    /* Creamos un nuevo array y parseamos el json a un objeto */
    const poblacionProvinciaUnicos = Array.from(arr).map((str) =>
      JSON.parse(str)
    );
    setFoundWord([...poblacionProvinciaUnicos]);
  }, [searchForm.localizacion]);

  const togglePopUp = (value) => {
    let objectPopUp = popUp;
    Object.entries(objectPopUp).forEach((item) => {
      if (item[0] === Object.keys(value)[0]) {
        objectPopUp[Object.keys(value)] = Object.values(value)[0];
      } else {
        objectPopUp[item[0]] = false;
      }
    });
    setPopUp(objectPopUp);
  };

  return {
    navigate,
    ref,
    foundWord,
    setFoundWord,
    searchForm,
    setSearchForm,
    setPopUp,
    popUp,
    setIsCheck,
    isCheck,
    togglePopUp,
  };
}
