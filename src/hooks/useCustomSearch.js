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
    // let objectPopUp = {...popUp};
    // Object.entries(objectPopUp).forEach((item) => {
      // if (item[0] === Object.keys(value)[0]) {
      //   objectPopUp[Object.keys(value)[0]] = Object.values(value)[0];
      // } else {
      //   objectPopUp[item[0]] = false;
      // }
    // });
    Object.entries(value).forEach(([key, val]) => {
      // Si el valor es true, asigna true al popUp; de lo contrario, asigna false
      objectPopUp[key] = val;
    });
    setPopUp({...objectPopUp});
  };

  // const handleCloseModal = (event, popUp) => {
  //   if (
  //     !event.target.closest(".button") &&
  //     !event.target.closest("." + popUp)
  //   ) {
  //     setPopUp((upPop) => {
  //       return { ...upPop, [popUp]: false };
  //     });
  //   }
  // };

  // //useEffect para cambiar el color del buscador en funcion si hay alguna popUp activado o no
  // //Y para cerrar los popUps clickando fuera
  // useEffect(() => {
  //   const { queHacer, flor, buscador, fecha } = popUp;

  //   const popUpProperties = { queHacer, flor, buscador, fecha };

  //   // Miramos con el find si hay alguna
  //   const isInTrue = Object.entries(popUpProperties).find(
  //     ([property, isActive]) => isActive === true
  //   );
  //   if (isInTrue) {
  //     setIsCheck(true);
  //   } else {
  //     setIsCheck(false);
  //   }

  //   const rootElement = document.getElementById("root");

  //   if (popUp.buscador) {
  //     rootElement.addEventListener("click", (event) =>
  //       handleCloseModal(event, "buscador")
  //     );
  //   }

  //   if (popUp.fecha) {
  //     rootElement.addEventListener("click", (event) =>
  //       handleCloseModal(event, "fecha")
  //     );
  //   }

  //   if (popUp.flor) {
  //     rootElement.addEventListener("click", (event) =>
  //       handleCloseModal(event, "flor")
  //     );
  //   }

  //   if (popUp.queHacer) {
  //     rootElement.addEventListener("click", (event) =>
  //       handleCloseModal(event, "queHacer")
  //     );
  //   }

  //   return () => {
  //     rootElement.removeEventListener("click", (event) => {
  //       handleCloseModal(event, "buscador");
  //     });
  //     rootElement.removeEventListener("click", (event) => {
  //       handleCloseModal(event, "fecha");
  //     });
  //     rootElement.removeEventListener("click", (event) => {
  //       handleCloseModal(event, "flor");
  //     });
  //     rootElement.removeEventListener("click", (event) => {
  //       handleCloseModal(event, "queHacer");
  //     });
  //   };
  // }, [popUp]);

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
