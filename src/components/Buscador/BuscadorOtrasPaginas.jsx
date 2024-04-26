import { ButtonSearch } from './ButtonSearch'

export const BuscadorOtrasPaginas = () => {
  return (
    <div className="w-full h-full border-none rounded-xl">
      <div
        className="w-full flex items-center gap-0"
      >
        <ButtonSearch
          stylesButton={{
            backGround: `bg-white`,
            svgColor: `stroke-black`,
          }}
        />
        <div className="">
          <div className="text-bold flex text-xl justify-start">
            ¿Donde quieres ir?
          </div>
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

export default BuscadorOtrasPaginas;
