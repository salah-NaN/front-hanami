import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PopUp, PopUpFecha, PopUpBuscador } from "./PopUp";
import { ButtonSearch, BuscadorMobil } from "./";

export const SearchBar = ({ moveToSearchBar, openPopUpBuscador }) => {
  const navigate = useNavigate();
  const ref = useRef();
  const url = "http://localhost:3000/api";

  const queHacer = ["Punto_de_Interes", "Actividades"];

  const [flores, setFlores] = useState([]);

  const [searchForm, setSearchForm] = useState({
    localizacion: null,
    fecha: null,
    flor: null,
    queHacer: null,
  });

  const [popUp, setPopUp] = useState({
    flor: false,
    queHacer: false,
    fecha: false,
  });

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
      queHacer: null,
    });
  }, [flores]);

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

    setPopUp({ flor: popUp.flor, queHacer: false });
  };

  const setFechaPopUp = (event) => {
    setPopUp({ ...popUp, fecha: !popUp.fecha });
  };

  const handleCloseModal = (event) => {
    if (!event.target.closest(".button") && !event.target.closest(".fecha")) {
      setPopUp({ ...popUp, fecha: false });
    }
  };

  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (popUp) {
      rootElement.addEventListener("click", handleCloseModal);
    } else {
      rootElement.removeEventListener("click", handleCloseModal);
    }

    return () => {
      rootElement.removeEventListener("click", handleCloseModal);
    };
  }, [popUp]);

  const onSubmitSearch = () => {
    event.preventDefault();
    //desestructuramos el objeto de searchForm
    const { localizacion, fecha, flor, queHacer } = searchForm;

    //miramos si hay datos en el objeto de searchForm, si hay datos pues los metemos en la url
    // si no hay datos pues metemos esto %
    navigate(
      `/busqueda/${queHacer || ";"}/${localizacion || ";"}/${fecha || ";"}/${
        flor || ";"
      }`
    );
  };

  return (
    <>
      <div
        className="z-20 h-full w-10/12 mx-auto border rounded-full shadow-sm shadow-white bg-white"
        ref={moveToSearchBar}
      >
        <div className="w-full flex items-center">
          <form
            onSubmit={onSubmitSearch}
            className="w-full h-full grid gridgrid-cols-12 relative"
          >
            <BuscadorMobil openPopUpBuscador={openPopUpBuscador} />

            <div className="w-full col-span-4 hidden md:block">
              <input
                onChange={() =>
                  setSearchForm({
                    ...searchForm,
                    localizacion: event.target.value,
                  })
                }
                placeholder="Busca la ciudad"
                className="w-full h-14 focus:outine-none border rounded-l-full border-[#c5c5c5] bg-[#ffffff]
                lg:border-none placeholder:px-5 hover:border-none hover:rounded-full hover:bg-[#EBEBEB]"
              ></input>
            </div>
            <div className="hidden md:flex col-span-2 h-14 border-b border-[#c5c5c5] lg:border-none bg-red-500">
              <div
                className="px-3 w-full border-r border-[#c5c5c5] bg-[#ffffff]
                   flex items-center justify-center lg:border-r lg:border-l
                    lg:border-[#c5c5c5] text-sm cursor-pointer relative button"
                id="button-open"
                onClick={(event) => setFechaPopUp(event)}
              >
                Cuando quieres ir?
              </div>
              {popUp.fecha ? (
                <div className="absolute top-80
                fecha bg-white border-none rounded-md">
                  <PopUpFecha />
                </div>
              ) : null}
            </div>
            <div className="hidden md:flex col-span-2 w-full border-r border-[#c5c5c5] hover:bg-[#EBEBEB]">
              <div
                className="flex justify-center items-center w-full h-full cursor-pointer"
                onClick={() => setPopUp({ ...popUp, flor: !popUp.flor })}
              >
                <div className="text-sm">Que plantas quieres ver?</div>
              </div>

              {popUp?.flor === true ? (
                <PopUp opciones={flores} fn={setFloresPopUp} />
              ) : null}
            </div>

            <div className="hidden md:block w-full col-span-4">
              <div
                className="w-full h-full flex justify-between items-center border border-[#c5c5c5] cursor-pointer
               hover:bg-[#EBEBEB] border-none rounded-full"
                onClick={() =>
                  setPopUp({ ...popUp, queHacer: !popUp.queHacer })
                }
              >
                <div className="px-3">Que quieres hacer?</div>
                <ButtonSearch />
              </div>

              <div className="col-span-1 w-full border-r border-[#c5c5c5] hover:bg-[#EBEBEB]">
                <div
                  className=""
                  onClick={() =>
                    setPopUp({
                      ...popUp,
                      queHacer: !popUp.queHacer,
                    })
                  }
                >
                  <div className="">
                    {popUp?.queHacer === true ? (
                      <PopUp opciones={queHacer} fn={setQueHacer} />
                    ) : null}
                  </div>
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
