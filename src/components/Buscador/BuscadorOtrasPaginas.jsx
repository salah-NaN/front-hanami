import { ButtonSearch } from "./ButtonSearch";

export const BuscadorOtrasPaginas = ({ openPopUpBuscador }) => {
  return (
    <div
      className="grid grid-cols-5 justify-between items-center w-7/12 h-fit p-2 border rounded-xl
    shadow-md cursor-pointer"
      onClick={openPopUpBuscador}
    >
      <div className="items-center flex justify-center">
        <h1 className="font-bold text-sm">Elige un Lugar</h1>
      </div>
      <div className="flex items-center justify-center border-l">
        <h1 className="text-sm font-bold">Cuando?</h1>
      </div>
      <div className="border-l flex items-center justify-center w-full">
        <h1 className="text-sm font-bold">Que ver?</h1>
      </div>
      <div className="border-l flex w-full col-span-2 items-center">
        <div className="w-full flex px-5">
          <h1 className="text-sm font-bold">Que quieres</h1>
        </div>
        <div className="">
          <ButtonSearch
            stylesButton={{
              backGround: `bg-white`,
              svgColor: `stroke-black`,
              size: `w-[38px] h-9`,
              svgSize: `w-[20px]`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BuscadorOtrasPaginas;
