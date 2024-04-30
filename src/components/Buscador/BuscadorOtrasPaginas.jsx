import { ButtonSearch } from "./ButtonSearch";

export const BuscadorOtrasPaginas = ({ openOnPopUpBuscadorMobile }) => {
  return (
    <div
      className="flex flex-row justify-between items-center w-11/12 md:w-96 h-fit border rounded-full
    shadow-sm cursor-pointer hover:shadow-lg hover:transition-all hover:duration-300 p-1 px-2"
      onClick={openOnPopUpBuscadorMobile}
    >
      <div className="flex justify-between w-full">
        <div className="w-full">
          <h1 className="text-md font-bold">Nueva busqueda</h1>
        </div>
      </div>
      <div className="flex w-full col-span-2 items-center justify-end">
        <div className="w-full flex justify-end">
          <ButtonSearch
            stylesButton={{
              backGround: `bg-white`,
              svgColor: `stroke-black`,
              size: "",
              svgSize: "w-6 h-10",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BuscadorOtrasPaginas;
