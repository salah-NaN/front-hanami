import { useEffect, useState } from "react";

export const SearchBar = () => {
  const url = "http://localhost:3000/api";
  const [flores, setFlores] = useState([]);

  const [searchForm, setSearchForm] = useState({
    localizacion: "",
    fecha: null,
    flor: "",
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
      localizacion: "",
      fecha: null,
      flor: flores[0]?.especie,
    });
  }, [flores]);

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
        rounded-xl border border-[#c5c5c5] bg-[#ffffff] 
            lg:-top-9 lg:h-fit lg:w-9/12 lg:flex-row "
        >
          <input
            onChange={() =>
              setSearchForm({ ...searchForm, localizacion: event.target.value })
            }
            placeholder="Busca la ciudad"
            className="w-full h-14 focus:outine-none rounded-t-lg border-b border-[#c5c5c5] bg-[#ffffff]
                lg:border-none  lg:rounded-l-xl "
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
          <div className="w-full">
            <select
              className="w-full h-full border-r border-[#c5c5c5]"
              defaultValue={flores[0]?.especie}
              onChange={() =>
                setSearchForm({ ...searchForm, flor: event.target.value })
              }
            >
              {flores.map((flor) => {
                return <option value={flor.especie}>{flor.especie}</option>;
              })}
            </select>
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
