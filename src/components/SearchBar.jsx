export const SearchBar = () => {
  return (
    <>
      <form
        className="my-24 flex flex-col w-9/12 mx-auto h-[168px] rounded-xl border border-[#c5c5c5] relative -top-[86px] bg-[#ffffff] 
            lg:-top-9 lg:h-fit lg:w-9/12 lg:flex-row "
      >
        <input
          className="w-full h-14 focus:outine-none rounded-t-lg border-b border-[#c5c5c5] bg-[#ffffff]
                lg:border-none  lg:rounded-l-xl "
        ></input>
        <div className="w-full h-14 flex border-b border-[#c5c5c5] lg:border-none">
          <input
            className="px-3 w-1/2 border-r border-[#c5c5c5] bg-[#ffffff]
                    lg:border-r lg:border-l lg:border-[#c5c5c5]"
            type="date"
          ></input>
          <select
            className="w-1/2
                    lg:border-r lg:border-[#c5c5c5]"
          >
            <option value></option>
            <option value></option>
            <option value></option>
          </select>
        </div>
        <button className="w-full h-14">Enviar</button>
      </form>
    </>
  );
}

export default SearchBar
