import { ButtonSearch } from './'

export const BuscadorMobil = ({openPopUpBuscador}) => {

  return (
    <div className="md:hidden w-full h-full border-none rounded-xl">
      <div className="w-full flex items-center gap-0" onClick={openPopUpBuscador}>
        <ButtonSearch
          stylesButton={{
            backGround: `bg-white`,
            svgColor: `stroke-black`,
          }}
        />
        <div className="">
          <div className="text-bold flex text-xl justify-start">¿Donde quieres ir?</div>
          <div className="flex flex-row w-fit">
            <div className="text-md font-light pr-1">Cualquier...</div>
            <div className="text-md font-light pr-1">Añade...</div>
            <div className="text-md font-light">Que quie...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuscadorMobil;
