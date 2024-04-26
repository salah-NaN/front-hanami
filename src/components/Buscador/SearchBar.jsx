import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PopUpFecha, PopSearchPlace, PopUpQueHacer } from "./PopUp";
import { ButtonSearch, BuscadorMobil } from "./";
import PopUpPlanta from "./PopUp/PopUpPlanta";
import useCustomSearch from "../../hooks/useCustomSearch";

export const SearchBar = ({
  moveToSearchBar,
  openPopUpBuscador,
  puntosDeInteres,
  setPuntosDeInteres,
}) => {
  const {
    navigate,
    ref,
    setFoundWord,
    foundWord,
    setSearchForm,
    searchForm,
    setPopUp,
    popUp,
    setIsCheck,
    isCheck,
    togglePopUp,
  } = useCustomSearch(puntosDeInteres);

  useEffect(() => {
    console.log(popUp.buscador)
  }, [popUp]);

  // //Seleccionamos el input donde el div de buscar
  // let divBuscar = document.querySelector(".buscar_div");
  // let inputField = document.querySelector("#buscar_input");

  // divBuscar?.addEventListener("click", () => {
  //   inputField.focus();
  // });

  const onSubmitSearch = () => {
    event.preventDefault();
    //desestructuramos el objeto de searchForm
    let { localizacion, fecha, flor, queHacer } = searchForm;
    queHacer = queHacer === "" ? "Punto_de_Interes" : queHacer;

    if (searchForm?.provincia !== undefined) {
      localizacion = "provincia:" + searchForm?.provincia;
    }

    if (searchForm?.localizacion !== null) {
      localizacion = "poblacion:" + searchForm?.localizacion;
    }

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
              searchForm.queHacer === null ||
              searchForm.queHacer === "Punto_de_Interes"
                ? `md:grid md:grid-cols-12 md:h-20`
                : `md:grid md:grid-cols-10 md:h-20`
            }`}
          >
            <BuscadorMobil openPopUpBuscador={openPopUpBuscador} />
            <div
              className={`buscar_div w-full col-span-4 hidden md:flex md:w-full md:items-center hover:bg-[#EBEBEB]
              hover:border-none hover:rounded-full button hover:shadow-xl ${
                popUp.buscador ? `bg-white rounded-full` : ``
              }`}
              id="button-open"
              onClick={() => togglePopUp({ buscador: true })}
            >
              <div className="px-5 flex flex-col">
                <label htmlFor="buscar_input" id="label" className="">
                  <h1 className="font-bold text-md px-3">Destino</h1>
                  <div className="w-full">
                    <input
                      id="buscar_input"
                      onChange={() =>
                        setSearchForm({
                          ...searchForm,
                          localizacion: event.target.value,
                        })
                      }
                      placeholder="Busca la ciudad"
                      value={searchForm?.localizacion || searchForm?.provincia || ""}
                      className={`w-full focus:outine-none border-none rounded-full border-[#c5c5c5] bg-transparent
                       lg:border-none placeholder:px-0 hover:border-none hover:rounded-full 
                       focus:ring-0 focus:outline-none px-3`}
                      autoFocus
                    ></input>
                  </div>
                </label>
              </div>
            </div>
            <div className="absolute top-[6rem] left-0 buscador">
              {popUp?.buscador === true ? (
                <div className="">
                  <PopSearchPlace
                    foundWord={foundWord}
                    searchPc={"searchPc"}
                    setSearchForm={setSearchForm}
                    searchForm={searchForm}
                    // setBuscadorPopUp={setBuscadorPopUp}
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
                onClick={() => togglePopUp({ fecha: true })}
              >
                <div className="flex flex-col justify-start w-full">
                  <h1 className="font-bold text-md">Fecha</h1>
                  <div className="text-sm">
                    {searchForm.fecha.length === 0 ? (
                      `Elige una fecha`
                    ) : (
                      <h1 className="font-[900] text-xl">{searchForm.fecha}</h1>
                    )}
                  </div>
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
                    // setFechaPopUp={setFechaPopUp}
                  />
                </div>
              ) : null}
            </div>
            {searchForm.queHacer === "Actividades" ? null : (
              <div
                className={`px-3 hidden md:flex col-span-2 w-full border-r border-[#c5c5c5] 
            hover:bg-[#EBEBEB] hover:border-none hover:rounded-full hover:shadow-xl relative ${
              popUp.flor ? `bg-white border-none rounded-full shadow-lg` : ``
            }`}
              >
                <div
                  className="flex justify-center items-center w-full h-full cursor-pointer button"
                  onClick={() => togglePopUp({ flor: true })}
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
                      // setFloresPopUp={setFloresPopUp}
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
                onClick={() => togglePopUp({ queHacer: true })}
              >
                <div className="flex h-full justify-between items-center">
                  <div
                    className={`w-full h-full flex justify-between items-center hover:md:shadow-xl hover:xl:shadow-none 
                  hover:border-none hover:rounded-full hover:md:bg-[#EBEBEB] hover:xl:bg-white ${
                    popUp.queHacer
                      ? `bg-white border-none rounded-full shadow-lg`
                      : ``
                  }`}
                  >
                    <div className="flex flex-col px-2">
                      <h1 className="md:block font-bold text-sm">
                        Que quieres hacer?
                      </h1>
                      {searchForm.queHacer !== null ? (
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
                    <div>
                      <ButtonSearch />
                    </div>
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
                    // setPopQueHacer={setPopQueHacer}
                  />
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SearchBar;
