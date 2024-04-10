export const PopUp = ({ opciones, fn }) => {
  return (
    <div>
      <div className="relative">
        <div className="w-60 absolute top-1">
          <div className="flex flex-col justify-start w-full border rounded-lg p-2">
            {opciones?.map((opcion) => {
              return (
                <div
                  className="pt-1"
                  onClick={() => fn(opcion?.especie || opcion)}
                >
                  <div className="text-start w-full cursor-pointer">
                    {opcion?.especie || opcion}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
