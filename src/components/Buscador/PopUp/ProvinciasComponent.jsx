export const ProvinciasComponent = ({
  openInputSearch,
  openInput,
  onChangeForm,
  searchPc
}) => {
  const handleFunction = (value) => {
    if (onChangeForm) {
      onChangeForm({ ...value });
    } else {
      setSearchForm({ ...searchForm, ...value });
      setBuscadorPopUp(false);
    }
  };

  return (
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
          onClick={() => handleFunction({ provincia: "Barcelona" })}
        >
          <img src="/barcelona_comarca.svg" />
          <h1 className="text-sm text-right">Barcelona</h1>
        </div>
        <div
          className="md:w-full w-full bg-slate-50 border rounded-xl px-3 py-2 cursor-pointer hover:bg-[#EBEBEB]"
          onClick={() => handleFunction({ provincia: `Girona` })}
        >
          <img src="/girona.svg" />
          <h1 className="text-sm text-right">Girona</h1>
        </div>
        <div
          className="md:w-full w-full bg-slate-50 border rounded-xl px-3 py-2 cursor-pointer hover:bg-[#EBEBEB]"
          onClick={() => handleFunction({ provincia: `Tarragona` })}
        >
          <img src="/tarragona.svg" />
          <h1 className="text-sm text-right">Tarragon</h1>
        </div>
        <div
          className="md:w-full w-full bg-slate-50 border rounded-xl px-3 py-2 cursor-pointer hover:bg-[#EBEBEB]"
          onClick={() => handleFunction({ provincia: `Lleida` })}
        >
          <img src="/lleida.svg" />
          <h1 className="text-sm text-right">Lleida</h1>
        </div>
      </div>
    </div>
  );
};

export default ProvinciasComponent;
