import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PopUp } from "./PopUp";

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
      flor: flores[0]?.especie,
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
    <div className="z-20" ref={moveToSearchBar}>
      {/* <h1 className="text-center pt-20 text-7xl">Busca cositas</h1>  */}
      <div className="w-full flex items-center">
        <form
          onSubmit={onSubmitSearch}
          className="my-10 flex flex-col w-full mx-auto h-[168px] 
        rounded-full border border-black bg-[#ffffff] 
            lg:-top-9 lg:h-fit lg:w-9/12 lg:flex-row "
        >
          <input
            onChange={() =>
              setSearchForm({ ...searchForm, localizacion: event.target.value })
            }
            placeholder="Busca la ciudad"
            className="w-full h-14 focus:outine-none rounded-t-full border border-[#c5c5c5] bg-[#ffffff]
                lg:border-none lg:rounded-full"
          ></input>
          <div className="w-full h-14 flex border-b border-[#c5c5c5] lg:border-none bg-red-500">
            <input
              onChange={() =>
                setSearchForm({ ...searchForm, fecha: event.target.value })
              }
              placeholder=""
              className="px-3 w-full border-r border-[#c5c5c5] bg-[#ffffff]
                    lg:border-r lg:border-l lg:border-[#c5c5c5]"
              type="date"
            ></input>
          </div>
          <div className="w-full border-r border-[#c5c5c5] hover:bg-[#EBEBEB]">
            <div
              className="flex justify-center items-center w-full h-full cursor-pointer"
              onClick={() => setPopUp({ ...popUp, flor: !popUp.flor })}
            >
              <div className="">Que plantas quieres ver?</div>
            </div>

            {popUp?.flor === true ? (
              <PopUp opciones={flores} fn={setFloresPopUp} />
            ) : null}
          </div>

          <div className="w-full">
            <div
              className="w-full h-full flex justify-center items-center border border-[#c5c5c5] cursor-pointer hover:bg-[#EBEBEB]"
              onClick={() => setPopUp({ ...popUp, queHacer: !popUp.queHacer })}
            >
              <div className="">Que quieres hacer?</div>
            </div>

            <div className="w-full border-r border-[#c5c5c5] hover:bg-[#EBEBEB]">
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
          <button className="w-full h-14" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
