import { FormControl, ListItemText, MenuItem, Select } from "@mui/material";
import { setOptions } from "leaflet";
import { useRef, useState, useEffect } from "react";

const FilterCategoria = ({ setFiltersType, filterData }) => {
  // inputs donde se guardarán los inputs de los checkboxes para filtrar
  const [inputs, setInputs] = useState([]);
  // controlador para definir si el filtro es visible o no
  const [visible, setVisible] = useState(false);
  // referencia para que se cierre cuando se clique fuera del div
  const dropdownRef = useRef(null);

  // useEffects
  // para que se cierre cuando se clique fuera del div
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setVisible(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (inputs.length === 0) {
      let distinct = generateDistinctTemporadas();
      distinct = asignarControladorCheckboxes(distinct);
      setInputs(distinct);
    }
  }, [filterData]);

  useEffect(() => {
    const reducedInputs = inputs
      .filter((i) => i.seteado)
      .map((i) => i.categoria);

    setFiltersType(reducedInputs);
  }, [inputs]);

  function generateDistinctTemporadas() {
    const distinct = [];
    filterData?.forEach((e) => {
      if (!distinct.includes(e.categoria)) {
        distinct.push(e.categoria);
      }
    });
    return distinct;
  }

  // funcion para preparar los inputs de los checkbox del filtro
  function asignarControladorCheckboxes(actividades) {
    const arrObj = actividades.map((a) => {
      return {
        categoria: a,
        seteado: false,
      };
    });
    return arrObj;
  }

  // funcion para modificar el state del checkbox de cada input
  const handleCheckbox = (event) => {
    const { name } = event.target;
    const inputsNuevos = inputs.map((i) => {
      if (i.categoria === name) {
        i.seteado = !i.seteado;
      }
      return i;
    });
    setInputs(inputsNuevos);
  };

  return (
    <>
      <div ref={dropdownRef}>
        <button className="border-2 border-[#e2e2e2] px-2 py-1.5 rounded-lg shadow-md transition-all duration-300 hover:bg-[#e2e2e2] hover:border-[#e2e2e2] text-[#262626]"
          onClick={() => setVisible(!visible)}>Categorías</button>
        <div>
          <ul
            className={`${visible
              ? "absolute z-50 bg-white shadow-md p-2 top-[125px] right-[0.9rem] rounded-md"
              : "hidden"
              }`}
          >
            {inputs.map((i) => {
              return (
                <li className="">
                  <label for={i.categoria}>{i.categoria}</label>
                  <input
                    type="checkbox"
                    name={i.categoria}
                    id={i.categoria}
                    value={i.categoria}
                    checked={i.seteado}
                    onChange={handleCheckbox}
                  ></input>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FilterCategoria;
