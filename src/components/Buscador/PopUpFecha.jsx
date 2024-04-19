export const PopUpFecha = () => {
  return (
    <div className="bg-red-500 w-full absolute bottom-0">
      <input
        onChange={() =>
          setSearchForm({ ...searchForm, fecha: event.target.value })
        }
        placeholder="Introduce tu fecha"
        className="px-3 w-full border-r border-[#c5c5c5] bg-[#ffffff]
                    lg:border-r lg:border-l lg:border-[#c5c5c5]"
        type="date"
      ></input>
    </div>
  );
};

export default PopUpFecha;
