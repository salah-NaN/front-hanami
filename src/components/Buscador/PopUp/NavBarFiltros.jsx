import { useEffect } from "react";

export const NavBarFiltros = ({ setFilters, filterData, setFiltersType }) => {
  useEffect(() => {
    console.log(filterData);
  }, [filterData]);

  return (
    <div className="md:w-full md:px-5 h-12 md:block hidden">
      <h1 className="text-2xl text-black">Filtros</h1>
      <div className="flex">
        {/* {inputs?.map((filter) => {
          return <p>{filter?.nombre}</p>;
        })} */}
      </div>
    </div>
  );
};

export default NavBarFiltros;
