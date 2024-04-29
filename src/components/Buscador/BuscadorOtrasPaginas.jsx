import { ButtonSearch } from "./ButtonSearch";

export const BuscadorOtrasPaginas = ({ openOnPopUpBuscador }) => {
  return (
    <div
      className="flex flex-row justify-between items-center w-96 h-fit border rounded-full
    shadow-sm cursor-pointer hover:shadow-lg hover:transition-all hover:duration-300 p-1 px-2"
      onClick={openOnPopUpBuscador}
    >
      <div className="flex justify-between w-full">
        <div className="w-full">
          <h1 className="text-md font-bold">Nueva busqueda</h1>
        </div>
      </div>
      <div className="flex w-full col-span-2 items-center justify-end">
        {/* <div className="w-full flex px-5"> */}
        {/* <h1 className="text-sm font-bold">Que quieres</h1> */}
        {/* </div> */}
        <div className="w-full flex justify-end">
          <ButtonSearch
            stylesButton={{
              backGround: `bg-white`,
              svgColor: `stroke-black`,
              size: '',
              svgSize: "w-6 h-10"
            }}
          />
        </div>
      </div>
      {/* <div className="items-center flex justify-center">
        <h1 className="font-bold text-sm">Elige un Lugar</h1>
      </div>
      <div className="flex items-center justify-center border-l">
        <h1 className="text-sm font-bold">Cuando?</h1>
      </div>
      <div className="border-l flex items-center justify-center w-full">
        <h1 className="text-sm font-bold">Que ver?</h1>
      </div> */}
    </div>
  );
};

export default BuscadorOtrasPaginas;
