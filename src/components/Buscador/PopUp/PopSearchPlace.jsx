import { ButtonSearch } from "../";

export const PopSearchPlace = ({
  searchPc,
  openInput,
  onChangeForm,
  openInputSearch,
}) => {
  return (
    <div
      className={`md:bg-white md:border-none
      md:rounded-2xl md:p-1 ${
        searchPc === "searchPc" ? "md:w-[21rem]" : "px-0 w-full"
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
            <input
              type="text"
              placeholder="Introduce tu destino"
              className="focus:ring-0 focus:outline-none
                          flex w-full items-center h-full border-none
                          rounded-md placeholder:px-1 placeholder:text-[17px] border-black py-2"
              autoFocus
              onChange={() =>
                onChangeForm({ localizacion: event.target.value })
              }
            />
          ) : (
            <>
              <p>Introduce tu destino</p>
            </>
          )}
        </div>
      ) : null}

      <div
        className={`grid grid-cols-2 gap-3 mt-5 md:m-1 ${
          searchPc === "searchPc" ? "md:p-1" : "md:mt-0"
        }`}
      >
        <div
          className="md:w-full w-full border rounded-xl px-3 py-2 bg-slate-50"
          onClick={(event) => onChangeForm({ localizacion: `Barcelona` })}
        >
          <img src="/barcelona_comarca.svg" />
          <h1 className="text-sm text-right">Barcelona</h1>
        </div>
        <div
          className="md:w-full w-full bg-slate-50 border rounded-xl px-3 py-2"
          onClick={(event) => onChangeForm({ localizacion: `Girona` })}
        >
          <img src="/girona.svg" />
          <h1 className="text-sm text-right">Girona</h1>
        </div>
        <div
          className="md:w-full w-full bg-slate-50 border rounded-xl px-3 py-2"
          onClick={(event) => onChangeForm({ localizacion: `Tarragona` })}
        >
          <img src="/tarragona.svg" />
          <h1 className="text-sm text-right">Tarragon</h1>
        </div>
        <div
          className="md:w-full w-full bg-slate-50 border rounded-xl px-3 py-2"
          onClick={(event) => onChangeForm({ localizacion: `Lleida` })}
        >
          <img src="/lleida.svg" />
          <h1 className="text-sm text-right">Lleida</h1>
        </div>
      </div>
    </div>
  );
};

export default PopSearchPlace;
