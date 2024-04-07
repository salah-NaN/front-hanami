import { DATA } from "../../utils/DATA";

export const CardsBox = () => {
  return (
    <div className="w-[88%] mx-auto">
      <div className="">
        <div className="py-2 pb-5">
          <h1 className="text-3xl">Puntos de interes de moda</h1>
          <h4 className="text-md">
            Opciones más populares entre la comunidad viajera de Cataluña
          </h4>
        </div>

        <div className="grid grid-cols-2 sm:grid sm:grid-cols-2 md:grid md:grid-cols-6 gap-5 h-screen">
          {DATA.slice(0, 2).map((puntos_interes, index) => (
            <div className="border-none w-full h-full pb-5 col-span-2 sm:col-span-2 md:col-span-2">
              <div
                className={` w-full border-none rounded-md px-2 h-full`}
                style={{
                  backgroundImage: `url(${puntos_interes.imagen}`,
                  backgroundSize: `cover`,
                }}
              ></div>
              <h1>{puntos_interes.nombre}</h1>
            </div>
          ))}
          {DATA.slice(2, 6).map((puntos_interes, index) => (
            <div className="border-none w-full ">
              <div
                className="border rounded-md px-2 col-span-2"
                style={{
                  backgroundImage: `url(${puntos_interes.imagen})`,
                  backgroundSize: `cover`,
                }}
              >
                {puntos_interes.nombre}
              </div>
            </div>
          ))}
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default CardsBox;
