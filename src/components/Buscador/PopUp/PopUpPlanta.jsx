export const PopUpPlanta = ({ setSearchForm, searchForm, onChangeForm }) => {
  const handleFunction = (value) => {
    if (onChangeForm) {
      onChangeForm({ ...value });
    } else {
      setSearchForm({ ...searchForm, ...value });
    }
  };
  return (
    <div className="grid grid-cols-2 gap-3 h-full">
      <div
        className="md:h-fit w-11/12 mx-auto border-2 rounded-xl px-3 py-1 bg-slate-50 cursor-pointer hover:bg-purple-100 hover:ease-in hover:duration-200"
        onClick={() => handleFunction({ flor: `Lavanda` })}
      >
        <img
          src={`http://localhost:3000/img/LavandaMaxFloracion.png`}
          className="md:h-28"
        />
        <h1 className="text-sm text-right flex justify-end hover:">Lavanda</h1>
      </div>
      <div
        className="md:h-fit w-11/12 mx-auto bg-slate-50 border-2 rounded-xl px-3 py-2 cursor-pointer hover:bg-red-100 hover:ease-in hover:duration-200"
        onClick={() => handleFunction({ flor: `Cerezo` })}
      >
        <img
          src={`http://localhost:3000/img/cerezas.png`}
          className="h-fit md:h-28"
        />
        <h1 className="text-sm text-right">Cerezo</h1>
      </div>
      <div
        className="md:h-fit w-11/12 mx-auto bg-slate-50 border-2 rounded-xl px-3 py-2 cursor-pointer hover:bg-purple-300 hover:ease-in hover:duration-200"
        onClick={() => handleFunction({ flor: `Viña` })}
      >
        <img
          src={`http://localhost:3000/img/viñaUvaGrande.png`}
          className="md:h-28"
        />
        <h1 className="text-sm text-right">Viña</h1>
      </div>
      <div
        className="md:h-fit w-11/12 mx-auto bg-slate-50 border-2 rounded-xl px-3 py-2 cursor-pointer hover:bg-green-100 hover:ease-in hover:duration-200"
        onClick={() => handleFunction({ flor: `Olivo` })}
      >
        <img src={`http://localhost:3000/img/olivos.png`} className="md:h-28" />
        <h1 className="text-sm text-right">Olivo</h1>
      </div>
    </div>
  );
};

export default PopUpPlanta;
