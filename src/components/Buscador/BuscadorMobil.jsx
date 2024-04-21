import { ButtonSearch } from './'

export const BuscadorMobil = ({openPopUpBuscador}) => {

  return (
    <div className="w-fit border-none rounded-xl">
      <div className="w-full flex items-center gap-0" onClick={openPopUpBuscador}>
        <ButtonSearch
          stylesButton={{
            backGround: `bg-white`,
            svgColor: `stroke-black`,
          }}
        />
        <div className="">
          <div className="text-bold flex justify-start">¿Donde quieres ir?</div>
          <div className="flex flex-row w-fit">
            <div className="text-sm font-light pr-1">Cualquier...</div>
            <div className="text-sm font-light pr-1">Añade...</div>
            <div className="text-sm font-light">Que quie...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuscadorMobil;
