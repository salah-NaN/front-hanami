import { useEffect, useState, useRef, version } from "react";
import { useNavigate } from "react-router-dom";
import { PopUp, PopUpFecha, PopSearchPlace, PopUpQueHacer } from "./PopUp";
import { ButtonSearch, BuscadorMobil } from "./";
import PopUpPlanta from "./PopUp/PopUpPlanta";
// import { Calendar } from "@nextui-org/calendar";
// import {parseDate} from "@internationalized/date";

export const SearchBar = ({ moveToSearchBar, openPopUpBuscador }) => {
  const navigate = useNavigate();
  const ref = useRef();
  const url = "http://localhost:3000/api";

  const queHacer = ["Punto_de_Interes", "Actividades"];
  const [puntosDeInteres, setPuntosDeInteres] = useState([]);
  const [foundWord, setFoundWord] = useState([]);
  // const [value, setValue] = useState(parseDate("2024-03-07"));

  // const [flores, setFlores] = useState([]);
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
    fetch(url + "/puntos_interes")
      .then((res) => res.json())
      .then((puntos_interes) => setPuntosDeInteres(puntos_interes))
      .catch((error) => console.log(error));
    // //Llamamos a la api para recoger las flores que tiene la base de datos, y poder construir el select
    // fetch(url + "/flores")
    //   .then((res) => res.json())
    //   //seteamos las flores en el estado que sera un array de las flores
    //   .then((flores) => {
    //     setFlores(flores);
    //   })
    //   .catch((error) => console.log(error));
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
    puntosDeInteres.map((item) => {
      console.log(item.poblacion);
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

  useEffect(() => {
    //Seteamos los valores por defecto de el SearchForm
    setSearchForm({
      localizacion: null,
      fecha: null,
      flor: null,
      queHacer: "",
    });
  }, []);

  const setBuscadorPopUp = (open) => {
    setPopUp({
      buscador: open === undefined ? true : open,
      flor: false,
      queHacer: false,
      fecha: false,
    });
  };

  const setFloresPopUp = (open) => {
    setPopUp({
      buscador: false,
      flor: open === undefined ? true : open,
      queHacer: false,
      fecha: false,
    });
  };

  const setPopQueHacer = (open) => {
    setPopUp({
      buscador: false,
      queHacer: open === undefined ? true : open,
      flor: false,
      fecha: false,
    });
  };

  const setFechaPopUp = (open) => {
    setPopUp({
      buscador: false,
      queHacer: false,
      flor: false,
      fecha: open === undefined ? popUp.fecha : open,
    });
  };

  const handleCloseModal = (event, popUp) => {
    if (
      !event.target.closest(".button") &&
      !event.target.closest("." + popUp)
    ) {
      setPopUp((upPop) => {
        return { ...upPop, [popUp]: false };
      });
    }
  };

  useEffect(() => {
    const rootElement = document.getElementById("root");

    if (popUp.buscador) {
      rootElement.addEventListener("click", (event) =>
        handleCloseModal(event, "buscador")
      );
    }

    if (popUp.fecha) {
      rootElement.addEventListener("click", (event) =>
        handleCloseModal(event, "fecha")
      );
    }

    if (popUp.flor) {
      rootElement.addEventListener("click", (event) =>
        handleCloseModal(event, "flor")
      );
    }

    if (popUp.queHacer) {
      rootElement.addEventListener("click", (event) =>
        handleCloseModal(event, "queHacer")
      );
    }

    return () => {
      rootElement.removeEventListener("click", (event) => {
        handleCloseModal(event, "buscador");
      });
      rootElement.removeEventListener("click", (event) => {
        handleCloseModal(event, "fecha");
      });
      rootElement.removeEventListener("click", (event) => {
        handleCloseModal(event, "flor");
      });
      rootElement.removeEventListener("click", (event) => {
        handleCloseModal(event, "queHacer");
      });
    };
  }, [popUp]);

  const onSubmitSearch = () => {
    event.preventDefault();
    //desestructuramos el objeto de searchForm
    let { localizacion, fecha, flor, queHacer } = searchForm;
    queHacer = queHacer === "" ? "Punto_de_Interes" : queHacer;

    //miramos si hay datos en el objeto de searchForm, si hay datos pues los metemos en la url
    if (queHacer === "Punto_de_Interes") {
      // si no hay datos pues metemos esto ;
      navigate(
        `/busqueda/${queHacer}/${localizacion || ";"}/${
          fecha?.toLocaleString().replaceAll("/", "-") || ";"
        }/${flor || ";"}`
      );
    }
    if (queHacer === "Actividades") {
      // si no hay datos pues metemos esto ;
      navigate(
        `/actividades/${queHacer}/${localizacion || ";"}/${
          fecha?.toLocaleString().replaceAll("/", "-") || ";"
        }/${flor || ";"}`
      );
    }
  };

  useEffect(() => {
    const { queHacer, flor, buscador, fecha } = popUp;

    const popUpProperties = { queHacer, flor, buscador, fecha };

    // Miramos con el find si hay alguna
    const isInTrue = Object.entries(popUpProperties).find(
      ([property, isActive]) => isActive === true
    );
    if (isInTrue) {
      setIsCheck(true);
    } else {
      setIsCheck(false);
    }
  }, [popUp]);

  return (
    <>
      <div
        className={`z-20 h-20 flex items-center w-10/12 mx-auto border rounded-full shadow-sm shadow-white ${
          isCheck === true ? `bg-[#EBEBEB]` : `bg-white`
        }`}
        ref={moveToSearchBar}
      >
        <div className="w-full flex items-center md:relative">
          <form
            onSubmit={onSubmitSearch}
            className={`w-full h-full ${
              searchForm.queHacer === "" ||
              searchForm.queHacer === "Punto_de_Interes"
                ? `md:grid md:grid-cols-12 md:h-20`
                : `md:grid md:grid-cols-10 md:h-20`
            }`}
          >
            <BuscadorMobil openPopUpBuscador={openPopUpBuscador} />
            <div
              className={`w-full col-span-4 hidden md:flex md:w-full md:items-center hover:bg-[#EBEBEB]
              hover:border-none hover:rounded-full button hover:shadow-xl ${
                popUp.buscador
                  ? `bg-slate-200 border-none rounded-full shadow-2xl`
                  : ``
              }`}
              id="button-open"
              onClick={() => setBuscadorPopUp()}
            >
              {popUp.buscador === false ? (
                <div className="button" id="button-open">
                  <div className="px-7">
                    <h1 className="font-bold text-md">Destino</h1>
                    <h1 className="text-sm">
                      {searchForm.localizacion === null &&
                      searchForm?.provincia === undefined && searchForm.localizacion === null || searchForm.localizacion === "" && searchForm?.provincia === null ? (
                        `Elige un destino`
                      ) : (
                        <h1 className="font-[900] text-xl">
                          {searchForm?.localizacion !== ""
                            ? searchForm?.localizacion
                            : searchForm?.provincia !== null
                            ? searchForm?.provincia
                            : null}
                        </h1>
                      )}
                    </h1>
                  </div>
                </div>
              ) : (
                <div className="w-full">
                  <input
                    onChange={() =>
                      setSearchForm({
                        ...searchForm,
                        localizacion: event.target.value,
                      })
                    }
                    placeholder="Busca la ciudad"
                    value={searchForm?.localizacion || searchForm?.provincia}
                    className={`w-full h-20 focus:outine-none border rounded-full border-[#c5c5c5] bg-[#ffffff]
                      lg:border-none placeholder:px-0 px-5 hover:border-none hover:rounded-full hover:bg-[#EBEBEB] 
                      focus:ring-0 focus:outline-none focus:bg-white`}
                    autoFocus
                  ></input>
                </div>
              )}
            </div>
            <div className="absolute top-[6rem] left-0 buscador">
              {popUp.buscador ? (
                <div className="">
                  <PopSearchPlace
                    foundWord={foundWord}
                    searchPc={"searchPc"}
                    setSearchForm={setSearchForm}
                    searchForm={searchForm}
                    setBuscadorPopUp={setBuscadorPopUp}
                  />
                </div>
              ) : null}
            </div>

            <div className="hidden md:flex col-span-2 h-full border-b border-[#c5c5c5] lg:border-none">
              <div
                className={`px-3 w-full border-r border-[#c5c5c5]
                   flex items-center justify-center lg:border-r lg:border-l
                    lg:border-[#c5c5c5] text-sm cursor-pointer relative button hover:border-none hover:bg-[#EBEBEB] hover:rounded-full hover:shadow-xl
                    ${
                      popUp.fecha
                        ? `bg-white border-none rounded-full shadow-xl`
                        : ``
                    }`}
                id="button-open"
                onClick={(event) => setFechaPopUp(event)}
              >
                <div className="flex flex-col justify-start w-full">
                  <h1 className="font-bold text-md">Fecha</h1>
                  <h1 className="text-sm">
                    {searchForm.fecha === null ? (
                      `Elige una fecha`
                    ) : (
                      <h1 className="font-[900] text-xl">{searchForm.fecha}</h1>
                    )}
                  </h1>
                </div>
              </div>
              {popUp.fecha ? (
                <div
                  className="absolute top-[6rem]
                  fecha"
                >
                  <PopUpFecha
                    setSearchForm={setSearchForm}
                    searchForm={searchForm}
                    setFechaPopUp={setFechaPopUp}
                  />
                </div>
              ) : null}
            </div>
            {searchForm.queHacer === "Actividades" ? null : (
              <div
                className={`px-3 hidden md:flex col-span-2 w-full border-r border-[#c5c5c5] 
            hover:bg-[#EBEBEB] hover:border-none hover:rounded-full hover:shadow-xl relative ${
              popUp.flor ? `bg-white` : ``
            }`}
              >
                <div
                  className="flex justify-center items-center w-full h-full cursor-pointer button"
                  onClick={() => setFloresPopUp()}
                  id="button-open"
                >
                  <div className="flex flex-col justify-start w-full">
                    <h1 className="text-bold text-md">Flor</h1>
                    {searchForm.flor === null ? (
                      <h1 className="text-sm">Elige una planta?</h1>
                    ) : (
                      <div className="flex justify-between">
                        <h1 className="font-[900] text-xl">
                          {searchForm.flor}
                        </h1>
                        <img
                          src={`http://localhost:3000/img/${
                            searchForm.flor === "Cerezo"
                              ? "cerezas"
                              : searchForm.flor === "Lavanda"
                              ? "LavandaMaxFloracion"
                              : searchForm.flor === "Olivo"
                              ? "olivos"
                              : searchForm.flor === "Viña"
                              ? "ViñaUvaGrande"
                              : ""
                          }.png`}
                          alt=""
                          className="w-7"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {popUp?.flor === true ? (
                  <div
                    className="absolute bg-white w-96 top-[6rem] left-0
                h-fit border-none rounded-2xl p-3"
                  >
                    <PopUpPlanta
                      setSearchForm={setSearchForm}
                      searchForm={searchForm}
                      setFloresPopUp={setFloresPopUp}
                    />
                  </div>
                ) : null}
              </div>
            )}

            <div className="hidden md:block w-full col-span-4 relative">
              <div
                className="w-full h-full border border-[#c5c5c5] cursor-pointer
                 border-none rounded-full button"
                id="button-open"
                onClick={() => setPopQueHacer()}
              >
                <div className="flex h-full justify-between items-center">
                  <div
                    className="w-full h-full flex justify-between items-center hover:md:shadow-xl hover:xl:shadow-none 
                  hover:border-none hover:rounded-full hover:md:bg-[#EBEBEB] hover:xl:bg-white"
                  >
                    <div className="flex flex-col px-2">
                      <h1 className="md:block font-bold text-sm">
                        Que quieres hacer?
                      </h1>
                      {searchForm.queHacer !== "" ? (
                        <h1>
                          {searchForm.queHacer === "Punto_de_Interes" ? (
                            <div className="flex gap-2 items-center">
                              <h1 className="text-xl">Punto de interes</h1>
                              <img src="./campos.png" alt="" className="w-7" />
                            </div>
                          ) : (
                            <div className="flex gap-2 items-center">
                              <h1 className="text-xl">Actividades</h1>
                              <img src="./cometa.png" alt="" className="w-7" />
                            </div>
                          )}
                        </h1>
                      ) : (
                        <h1 className="text-sm">Elige una opcion</h1>
                      )}
                    </div>
                    <div className="lg:hidden xl:flex xl:gap-5">
                      {/* <div className="px-2 flex gap-2 items-center xl:hover:xl:shadow-xl xl:border-none 
                      xl:py-3 xl:rounded-full xl:hover:bg-[#EBEBEB]">
                        <h1 className="font-bold">Puntos de interes</h1>
                        <img src="./campos.png" alt="" className="w-6" />
                      </div>
                      <div className="flex gap-2 items-center xl:hover:xl:shadow-xl xl:border-none 
                      xl:py-3 xl:rounded-full xl:hover:bg-[#EBEBEB] px-2">
                        <h1 className="font-bold">Actividades</h1>
                        <img src="./cometa.png" alt="" className="w-6" />
                      </div> */}
                    </div>
                    <buton type="submit">
                      <ButtonSearch />
                    </buton>
                  </div>
                </div>
              </div>
              {popUp?.queHacer ? (
                <div
                  className="absolute bg-white w-full top-[6rem] left-0
               h-fit border-none rounded-lg p-3 queHacer"
                >
                  <PopUpQueHacer
                    setSearchForm={setSearchForm}
                    searchForm={searchForm}
                    setPopQueHacer={setPopQueHacer}
                  />
                </div>
              ) : (
                <div className=""></div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SearchBar;
