import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PopUp, PopUpFecha, PopSearchPlace } from "./PopUp";
import { ButtonSearch, BuscadorMobil } from "./";
import PopUpPlanta from "./PopUp/PopUpPlanta";

export const SearchBar = ({ moveToSearchBar, openPopUpBuscador }) => {
  const navigate = useNavigate();
  const ref = useRef();
  const url = "http://localhost:3000/api";

  const queHacer = ["Punto_de_Interes", "Actividades"];
  const [flores, setFlores] = useState([]);
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
    //Llamamos a la api para recoger las flores que tiene la base de datos, y poder construir el select
    fetch(url + "/flores")
      .then((res) => res.json())
      //seteamos las flores en el estado que sera un array de las flores
      .then((flores) => {
        setFlores(flores);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    //Seteamos los valores por defecto de el SearchForm
    setSearchForm({
      localizacion: null,
      fecha: null,
      flor: null,
      queHacer: "Punto_de_Interes",
    });
  }, []);

  const setBuscadorPopUp = (event) => {
    setPopUp({
      buscador: true,
      flor: false,
      queHacer: false,
      fecha: false,
    });
  };

  const setFloresPopUp = (flor) => {
    setSearchForm({
      ...searchForm,
      flor: flor,
    });

    setPopUp({ flor: false, queHacer: popUp.queHacer });
  };

  const setQueHacer = (queHacer) => {
    setSearchForm({
      ...searchForm,
      queHacer: queHacer,
    });

    setPopUp({
      buscador: false,
      queHacer: true,
      flor: false,
      fecha: false,
    });
  };

  const setFechaPopUp = (event) => {
    setPopUp({
      buscador: false,
      queHacer: false,
      flor: false,
      fecha: true,
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

    // if (popUp.flor) {
    //   rootElement.addEventListener("click", (event) =>
    //     handleCloseModal(event, popUp.flor)
    //   );
    // }

    return () => {
      rootElement.removeEventListener("click", (event) => {
        handleCloseModal(event, "buscador");
      });
      rootElement.removeEventListener("click", (event) => {
        handleCloseModal(event, "fecha");
      });
      // rootElement.removeEventListener('click', (event) => {
      //   handleCloseModal(event, popUp.flor)
      // })
    };
  }, [popUp]);

  const onSubmitSearch = () => {
    event.preventDefault();
    //desestructuramos el objeto de searchForm
    const { localizacion, fecha, flor, queHacer } = searchForm;

    //miramos si hay datos en el objeto de searchForm, si hay datos pues los metemos en la url
    if (queHacer === "Punto_de_Interes") {
      // si no hay datos pues metemos esto ;
      navigate(
        `/busqueda/${queHacer}/${localizacion || ";"}/${fecha || ";"}/${
          flor || ";"
        }`
      );
    }
    if (queHacer === "Actividades") {
      // si no hay datos pues metemos esto ;
      navigate(
        `/actividades/${queHacer}/${localizacion || ";"}/${fecha || ";"}/${
          flor || ";"
        }`
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
        className={`z-20 h-20 w-10/12 mx-auto border rounded-full shadow-sm shadow-white ${
          isCheck === true ? `bg-[#EBEBEB]` : `bg-white`
        }`}
        ref={moveToSearchBar}
      >
        <div className="w-full flex items-center md:relative">
          <form
            onSubmit={onSubmitSearch}
            className="w-full h-full md:grid md:grid-cols-12 md:h-20"
          >
            <BuscadorMobil openPopUpBuscador={openPopUpBuscador} />
            <div
              className={`w-full col-span-4 hidden md:flex md:w-full md:items-center hover:bg-slate-200 
              hover:border-none hover:rounded-full button hover:shadow-xl ${
                popUp.buscador
                  ? `bg-slate-200 border-none rounded-full shadow-2xl`
                  : ``
              }`}
              id="button-open"
              onClick={() => setBuscadorPopUp()}
            >
              {!popUp.buscador ? (
                <div
                  className="button"
                  onClick={setBuscadorPopUp}
                  id="button-open"
                >
                  <div className="px-7">
                    <h1 className="font-bold text-md">Destino</h1>
                    <h1 className="text-sm">
                      {searchForm.localizacion === null ? (
                        `Elige un destino`
                      ) : (
                        <h1 className="font-[900] text-xl">
                          {searchForm?.localizacion}
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
                    className={`w-full h-20 focus:outine-none border rounded-full border-[#c5c5c5] bg-[#ffffff]
                      lg:border-none placeholder:px-0 px-5 hover:border-none hover:rounded-full hover:bg-[#EBEBEB] 
                      focus:ring-0 focus:outline-none focus:bg-white`}
                    autoFocus
                  ></input>
                </div>
              )}
            </div>
            <div className="absolute top-[4rem] left-0 buscador">
              {popUp.buscador ? (
                <div className="">
                  <PopSearchPlace searchPc={"searchPc"} />
                </div>
              ) : null}
            </div>

            <div className="hidden md:flex col-span-2 h-full border-b border-[#c5c5c5] lg:border-none">
              <div
                className={`px-3 w-full border-r border-[#c5c5c5]
                   flex items-center justify-center lg:border-r lg:border-l
                    lg:border-[#c5c5c5] text-sm cursor-pointer relative button hover:border-none hover:bg-slate-200 hover:rounded-full hover:shadow-xl
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
                      `Elige un destino`
                    ) : (
                      <h1 className="font-[900] text-xl">{searchForm.fecha}</h1>
                    )}
                  </h1>
                </div>
              </div>
              {popUp.fecha ? (
                <div
                  className="absolute top-[5rem]
                  fecha bg-white border-none rounded-md"
                >
                  <PopUpFecha
                    setSearchForm={setSearchForm}
                    searchForm={searchForm}
                  />
                </div>
              ) : null}
            </div>
            <div
              className={`px-3 hidden md:flex col-span-2 w-full border-r border-[#c5c5c5] 
            hover:bg-slate-200 hover:border-none hover:rounded-full hover:shadow-xl relative ${
              popUp.flor ? `bg-white` : ``
            }`}
            >
              <div
                className="flex justify-center items-center w-full h-full cursor-pointer"
                onClick={() => setPopUp({ ...popUp, flor: !popUp.flor })}
              >
                <div className="flex flex-col justify-start w-full">
                  <h1 className="text-bold text-md">Flor</h1>
                  {searchForm.flor === null ? (
                    `Elige una planta?`
                  ) : (
                    <div className="flex justify-between">
                      <h1 className="font-[900] text-xl">{searchForm.flor}</h1>
                      <img
                        src={`http://localhost:3000/img/
                        ${
                          searchForm.flor === "Cerezo"
                            ? "cerezas"
                            : searchForm.flor === "Lavanda"
                            ? "LavandaMaxFloracion"
                            : searchForm.flor === "Olivo"
                            ? "olivo"
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
                  className="absolute bg-white w-96 top-[5rem] left-0
                h-fit border-none rounded-lg p-3"
                >
                  <PopUpPlanta
                    setSearchForm={setSearchForm}
                    searchForm={searchForm}
                  />
                </div>
              ) : null}
            </div>

            <div className="hidden md:block w-full col-span-4">
              <div
                className="w-full h-full flex justify-between items-center border border-[#c5c5c5] cursor-pointer
                 border-none rounded-full"
                onClick={() =>
                  setPopUp({ ...popUp, queHacer: !popUp.queHacer })
                }
              >
                <div className="px-3 flex gap-10 justify-center w-full">
                  <div
                    className="flex flex-col justify-center items-center w-24 h-20 
                  hover:bg-[#EBEBEB] hover:border-none hover:rounded-full hover:shadow-xl"
                  >
                    <img src="./cometa.png" alt="" className="w-7" />
                    <h1 className="text-bold">Actividades</h1>
                  </div>
                  <div className="flex flex-col justify-center items-center w-26 h-20 hover:bg-[#EBEBEB] hover:border-none hover:rounded-full hover:shadow-xl">
                    <img src="./campos.png" alt="" className="w-7" />
                    <h1>Puntos de interes</h1>
                  </div>
                </div>
                <div className="flex justify-end items-center">
                  <ButtonSearch />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SearchBar;
