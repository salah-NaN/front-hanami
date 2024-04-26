import { ButtonSearch } from "../";
import { motion } from "framer-motion";
import useCustomSearch from "../../../hooks/useCustomSearch";

export const PopSearchPlace = ({
  searchPc,
  openInput,
  onChangeForm,
  openInputSearch,
  setSearchForm,
  searchForm,
  // setBuscadorPopUp,
  foundWord,
  setExpanded
}) => {
  const { togglePopUp } = useCustomSearch();
  const handleFunction = (value, close) => {
    if (onChangeForm) {
      if(close){
        togglePopUp();
        // setExpanded(false);
      }
      onChangeForm(value);
    } else {
      setSearchForm({ ...searchForm, ...value });
      // setBuscadorPopUp(false);
      togglePopUp({buscador: false});
    }
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30,
      }}
      className={`md:bg-white md:border-none 
      md:rounded-2xl md:p-1 ${
        searchPc === "searchPc" ? "md:w-[26rem]" : "px-0 w-full"
      }`}
    >
      {searchPc === "" ? (
        <div
          className="flex items-center border rounded-xl text-[17px]"
          onClick={openInputSearch}
        >
          <ButtonSearch
            stylesButton={{
              backGround: `bg-white`,
              svgColor: `stroke-black`,
              hover: `hover:bg-white`,
              size: `h-12`,
            }}
          />
          {openInput === true ? (
            <div className="w-full">
              <input
                type="text"
                value={searchForm?.localizacion || ""}
                placeholder="Introduce tu destino"
                className="focus:ring-0 focus:outline-none
                          flex w-full items-center h-full border-none
                          rounded-md placeholder:px-1 placeholder:text-[17px] border-black py-2"
                autoFocus
                onChange={(event) =>
                  handleFunction({ localizacion: event.target.value }, false)
                }
              />
            </div>
          ) : (
            <div className="">
              <p>Introduce tu destino</p>
            </div>
          )}
        </div>
      ) : null}

      {searchForm?.localizacion !== null && searchForm?.localizacion !== "" ? (
        <div className="h-[15rem]">
          <div className="md:p-2 overflow-auto h-full">
            {foundWord?.map((words) => (
              <div
                className="flex gap-1 hover:border-none hover:rounded-lg hover:bg-[#EBEBEB] md:p-3 py-3 cursor-pointer overflow-hidden"
                onClick={() =>
                  handleFunction({ localizacion: words?.poblacion }, true)
                }
              >
                <div className="flex items-center gap-2">
                  <div className="bg-[#DDDDDD] border-none rounded-md p-2">
                    <img src="./location.png" alt="" className="md:w-7 w-5" />
                  </div>
                  <h1 className="md:text-md text-[20px]">{words.poblacion},</h1>
                </div>
                <div className="flex items-center">
                  <h1 className="md:text-md text-[20px]">{words.provincia}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : searchForm?.localizacion === null ||
        searchForm?.localizacion === "" ? (
        <div
          className={`mt-5 md:m-1 ${
            searchPc === "searchPc" ? "md:p-3" : "md:mt-0"
          }`}
        >
          <h1 className="md:text-bold md:text-md text-[20px]">
            Elige una provincia
          </h1>
          <div className="grid grid-cols-2 md:grid md:grid-cols-4 gap-3 md:gap-1 pt-5">
            <div
              className="md:w-full w-full border rounded-xl px-3 py-2 bg-slate-50 cursor-pointer hover:bg-[#EBEBEB]"
              onClick={() => handleFunction({ provincia: "Barcelona" }, true)}
            >
              <img src="/barcelona_comarca.svg" />
              <h1 className="text-sm text-right">Barcelona</h1>
            </div>
            <div
              className="md:w-full w-full bg-slate-50 border rounded-xl px-3 py-2 cursor-pointer hover:bg-[#EBEBEB]"
              onClick={() => handleFunction({ provincia: `Girona` } , true)}
            >
              <img src="/girona.svg" />
              <h1 className="text-sm text-right">Girona</h1>
            </div>
            <div
              className="md:w-full w-full bg-slate-50 border rounded-xl px-3 py-2 cursor-pointer hover:bg-[#EBEBEB]"
              onClick={() => handleFunction({ provincia: `Tarragona` }, true)}
            >
              <img src="/tarragona.svg" />
              <h1 className="text-sm text-right">Tarragona</h1>
            </div>
            <div
              className="md:w-full w-full bg-slate-50 border rounded-xl px-3 py-2 cursor-pointer hover:bg-[#EBEBEB]"
              onClick={() => handleFunction({ provincia: `Lleida` }, true)}
            >
              <img src="/lleida.svg" />
              <h1 className="text-sm text-right">Lleida</h1>
            </div>
          </div>
        </div>
      ) : null}
    </motion.div>
  );
};

export default PopSearchPlace;
