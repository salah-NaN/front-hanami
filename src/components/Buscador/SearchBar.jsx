import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PopUp } from "./PopUp";
import PopUpFecha from "./PopUpFecha";

export const SearchBar = ({ moveToSearchBar }) => {
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
      queHacer: "Punto_de_Interes",
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
    if(!event.target.closest('.button') && (!event.target.closest('.fecha'))){
      setPopUp({...popUp, fecha: false});
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
    if(queHacer === "Punto_de_Interes"){
      // si no hay datos pues metemos esto ;
    navigate(
      `/busqueda/${queHacer}/${localizacion || ";"}/${fecha || ";"}/${
        flor || ";"
      }`
    );
  }
  if(queHacer === "Actividades"){
    // si no hay datos pues metemos esto ;
  navigate(
    `/actividades/${queHacer}/${localizacion || ";"}/${fecha || ";"}/${
      flor || ";"
    }`
  );
  }
  };

  return (
    <div
      className="z-20 h-full w-8/12 mx-auto border rounded-full shadow-sm shadow-white bg-white"
      ref={moveToSearchBar}
    >
      {/* <h1 className="text-center pt-20 text-7xl">Busca cositas</h1>  */}
      <div className="w-full flex items-center">
        <form
          onSubmit={onSubmitSearch}
          className="w-full h-full grid grid-cols-12"
        >
          <div className="w-full col-span-4">
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
          <div className="col-span-2 h-14 flex border-b border-[#c5c5c5] lg:border-none bg-red-500">
            <div
              className="px-3 w-full border-r border-[#c5c5c5] bg-[#ffffff]
                   flex items-center justify-center lg:border-r lg:border-l
                    lg:border-[#c5c5c5] text-sm cursor-pointer relative button"
              id="button-open"
              onClick={(event) => setFechaPopUp(event)}
            >
              Cuando quieres ir?
            </div>
            {popUp.fecha ? <PopUpFecha /> : null}
          </div>
          <div className="col-span-2 w-full border-r border-[#c5c5c5] hover:bg-[#EBEBEB]">
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

          <div className="w-full col-span-4">
            <div
              className="w-full h-full flex justify-between items-center border border-[#c5c5c5] cursor-pointer
               hover:bg-[#EBEBEB] border-none rounded-full"
              onClick={() => setPopUp({ ...popUp, queHacer: !popUp.queHacer })}
            >
              <div className="px-3">Que quieres hacer?</div>
              <div className="">
                <button
                  className="w-full h-14 flex justify-center items-center bg-green-400 hover:bg-green-700 border-none rounded-full px-4"
                  type="submit"
                >
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#FFFFFF"
                  >
                    <path
                      d="M17 17L21 21"
                      stroke="#FFFFFF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M3 11C3 15.4183 6.58172 19 11 19C13.213 19 15.2161 18.1015 16.6644 16.6493C18.1077 15.2022 19 13.2053 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11Z"
                      stroke="#FFFFFF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
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
  );
};

export default SearchBar;
