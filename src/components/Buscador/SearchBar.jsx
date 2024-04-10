import { useEffect, useState } from "react";

export const SearchBar = () => {
  const url = "http://localhost:3000/api";
  const [flores, setFlores] = useState([]);

  const [searchForm, setSearchForm] = useState({
    localizacion: "",
    fecha: null,
    flor: "",
  });

  const [popUp, setPopUp] = useState(false);

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
      localizacion: "",
      fecha: null,
      flor: flores[0]?.especie,
    });
  }, [flores]);

  const setFloresPopUp = (flor) => {
    setSearchForm({
      ...searchForm,
      flor: flor,
    });

    setPopUp(false);
  };

  const onSubmitSearch = () => {
    event.preventDefault();

    fetch(url + "")
      .then((res) => res.json())
      .then((busqueda) => console.log(busqueda))
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
      <h1 className="text-center pt-20 text-7xl">
        Busca los que te salga de los huevos
      </h1>
      <div className="w-full h-96 flex items-center">
        <form
          onSubmit={onSubmitSearch}
          className="my-24 flex flex-col w-10/12 mx-auto h-[168px] 
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
            <button className="w-full h-full" onClick={() => setPopUp(!popUp)}>
              Que plantas quieres ver?
            </button>
            {popUp && (
              <div className="relative">
                <div className="w-60 absolute top-10">
                  <div className="flex flex-col justify-start w-full border rounded-lg p-2">
                    {flores.map((flor) => {
                      return (
                        <div
                          className="pt-1"
                          onClick={() => setFloresPopUp(flor.especie)}
                        >
                          <button className="text-start w-full cursor-pointer">
                            {flor.especie}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
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
