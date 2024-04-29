import { FormControl, ListItemText, MenuItem, Select } from "@mui/material";
import { setOptions } from "leaflet";
import { useRef, useState, useEffect } from "react";
import { NavBarFiltros } from "../Buscador/PopUp";

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
      <NavBarFiltros inputs={inputs} />
      <div ref={dropdownRef}>
        <button onClick={() => setVisible(!visible)}>Categrorías</button>
        <div>
          <ul
            className={`${
              visible
                ? "absolute z-50 bg-white shadow-md p-2 border rounded-md"
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
