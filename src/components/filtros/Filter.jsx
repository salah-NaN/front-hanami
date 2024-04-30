import { FormControl, ListItemText, MenuItem, Select } from "@mui/material";
import { setOptions } from "leaflet";
import { useRef, useState, useEffect, useContext } from "react";
import { NavBarFiltros } from "../Buscador/PopUp";
import ClienteContext from "../../context/ClienteContext";

export const Filter = ({ setFilters, filterData }) => {
  // inputs donde se guardarán los inputs de los checkboxes para filtrar
  const [inputs, setInputs] = useState([]);
  // controlador para definir si el filtro es visible o no
  const [visible, setVisible] = useState(false);
  // referencia para que se cierre cuando se clique fuera del div
  const dropdownRef = useRef(null);
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const { togglePopUpFilter, popUpFilter } = useContext(ClienteContext);

  // constants
  const nombreConvertido = [
    {
      nombre: "CerezoCapullo",
      convertido: "Boton Blanco",
    },
    {
      nombre: "CerezoGrande",
      convertido: "Cerezo Grande",
    },
    {
      nombre: "CerezoInicioFlor",
      convertido: " Inicio Floración",
    },
    {
      nombre: "CerezoMaxFloracion",
      convertido: "Flor Abierta",
    },
    {
      nombre: "CerezoMediano",
      convertido: "Cerezo Mediano ",
    },
    {
      nombre: "CerezoMuerto",
      convertido: "Caida de la flor",
    },
    {
      nombre: "CerezoPequenio",
      convertido: "Cerezo Pequeño",
    },
    {
      nombre: "LavandaCapullo",
      convertido: "Lavanda sin brotes",
    },
    {
      nombre: "LavandaInicioFlor",
      convertido: "Brotes de Lavanda",
    },
    {
      nombre: "LavandaMaxFloracion",
      convertido: "Lavanda en Flor",
    },
    {
      nombre: "LavandaMuerta",
      convertido: "Lavanda para Cosechar",
    },
    {
      nombre: "OlivoFlor",
      convertido: "Olivo Floracion",
    },
    {
      nombre: "OlivoGrande",
      convertido: "Olivo Cuajado",
    },
    {
      nombre: "OlivoMediano",
      convertido: "Olivo Carolas visibles",
    },
    {
      nombre: "OlivoPequenio",
      convertido: "Olivo Inicio",
    },
    {
      nombre: "ViñaFlor",
      convertido: "Vid en Flor",
    },
    {
      nombre: "ViñaUvaGrande",
      convertido: "Vid Madura",
    },
    {
      nombre: "ViñaUvaMediana",
      convertido: "Vid Inicio(Veraison)",
    },
    {
      nombre: "ViñaUvaPequeña",
      convertido: "Vid Cuajado",
    },
  ];

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
    setFilters(inputs);
  }, [inputs]);

  // useEffect(() => {
  //   console.log(temporadas)
  //   if(temporadas){

  //   }
  //   //   const retorno = asignarControladorCheckboxes()
  //   // setInputs(retorno)
  // }, [temporadas])
  // funciones
  // seleccionar infomacion de las temporadas que se van a mapear en el filtro
  function generateDistinctTemporadas() {
    const tempoRepetidas = filterData.map((e) =>
      e.temporadas.map((t) => t.nombre)
    );
    const distinctTemporadas = [];
    tempoRepetidas.forEach((t) => {
      t.forEach((nombreTemporada) => {
        if (!distinctTemporadas.includes(nombreTemporada)) {
          distinctTemporadas.push(nombreTemporada);
        }
      });
    });

    return distinctTemporadas;
  }

  // funcion para preparar los inputs de los checkbox del filtro
  function asignarControladorCheckboxes(tempos) {
    let x = [{}];
    const arrObj = tempos.map((temporada) => {
      nombreConvertido.map((nc) => {
        if (nc.nombre === temporada) {
          x = {
            nombre: nc.convertido,
            img: nc.nombre,
            temporada,
            seteado: false,
          };
        }
      });
      return x;
    });
    const definitive = [];
    const toSend = arrObj.filter((o) => {
      if (!definitive.includes(o.temporada)) {
        definitive.push(o.temporada);
        return true;
      } else {
        return false;
      }
    });
    return toSend;
  }

  // funcion para modificar el state del checkbox de cada input
  const handleCheckbox = (event) => {
    const { name } = event.target;
    const inputsNuevos = inputs.map((i) => {
      if (i.temporada === name) {
        i.seteado = !i.seteado;
      }
      return i;
    });
    setInputs(inputsNuevos);
  };

  // useEffect(() => {
  //   const backgroundClose = document?.getElementById("#fondo");
  //   backgroundClose?.addEventListener("click", () => {
  //     setToggleDropDown(false);
  //   });
  // }, []);

  const togglePopUpFilterFilter = () => {
    setToggleDropDown(false);
    if (popUpFilter) {
      togglePopUpFilter();
    }
  };

  // testeo
  // useEffect(() => {
  //   console.log('test')
  //   console.log(inputs)
  //   setFiltros(['olivo'])
  // }, [inputs])

  // useEffect(() => {
  //   console.log('test2')
  //   console.log(filtros)
  // }, [filtros])

  // este useEffect filtra los inputs que están checkeados
  // useEffect(() => {
  //   const filtrados = inputs.filter(i => i.seteado)
  //   console.log("asdfasdfasdfasdfasd", filtrados);
  //   setFiltros(filtrados)
  // }, [inputs])

  return (
    <div ref={dropdownRef} className="z-20 w-full">
      {/* <div className="bg-red-500 w-full absolute z-50">
      <h1>Filtros</h1>
    </div> */}
      <div className="px-5">
        <button
          data-ripple-light="true"
          data-popover-target="menu"
          onClick={() => setToggleDropDown(true)}
          class="select-none rounded-full p-2 px-3 border
        text-center align-middle font-sans text-xs font-bold uppercase 
        text-white transition-all hover:shadow-lg
         hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] 
         active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          <img src="/ajustamiento.png" className="w-6" alt="filter" />
        </button>
      </div>
      <div className="">
        {toggleDropDown === true || popUpFilter === true ? (
          <div
            className="md:fixed md:inset-0 md:backdrop-blur-sm md:bg-opacity-75 md:z-50 md:flex md:justify-center
           md:items-center fondo fixed inset-0 z-50 backdrop-blur-sm bg-opacity-75 flex justify-center items-center"
          >
            <div className="md:bg-white md:w-1/2 md:p-5 md:border md:rounded-2xl bg-white border rounded-2xl p-4">
              <div className="w-full flex justify-end cursor-pointer">
                <div
                  className="hover:bg-slate-100 border-none rounded-2xl p-1"
                  id="fondo"
                  onClick={togglePopUpFilterFilter}
                >
                  <svg
                    width="25px"
                    height="25px"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#000000"
                  >
                    <path
                      d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
              <h1 className="text-4xl pb-4">Filtra temporadas</h1>
              <div className="grid grid-cols-2 gap-7">
                {inputs.map((i) => {
                  return (
                    <div className="flex">
                      <div className="px-2">
                        <img
                          src={`http://localhost:3000/img/${i.img}.png`}
                          alt=""
                          className="w-11 h-11"
                        />
                      </div>
                      <label
                        className={`p-2 ${
                          i.seteado
                            ? `bg-[#54CC68] border rounded-md transition-all duration-300 h-fit`
                            : `border rounded-lg`
                        }  cursor-pointer`}
                        htmlFor={i.temporada}
                      >
                        {i.nombre}
                      </label>

                      {i.seteado ? (
                        <div className="px-1">
                          <svg
                            width="20px"
                            height="20px"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                          >
                            <path
                              d="M7 12.5L10 15.5L17 8.5"
                              className="stroke-[#54CC68]"
                              stroke="#000000"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                              stroke="#000000"
                              className="stroke-[#54CC68]"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                      ) : null}

                      <input
                        className={`appearance-none`}
                        type="checkbox"
                        name={i.temporada}
                        id={i.temporada}
                        value={i.temporada}
                        checked={i.seteado}
                        onChange={handleCheckbox}
                      ></input>
                    </div>
                  );
                })}
              </div>
              <div className="w-full flex justify-end">
                <button
                  className="border-none rounded-md px-4 py-1 bg-[#4ADE80] hover:bg-green-500"
                  onClick={togglePopUpFilterFilter}
                >
                  <svg
                    width="25px"
                    height="25px"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#FFFFFF"
                  >
                    <path
                      d="M5 13L9 17L19 7"
                      stroke="#FFFFFF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {/* <ul className="flex"> */}
      {/* <ul className={`${visible ? 'absolute z-50 bg-white shadow-md p-2 border rounded-md' : 'hidden' }`}> */}

      {/* {inputs.map((i) => {
          return (
            <li className="">
              <label>{i.nombre}</label>
              <input
                type="checkbox"
                name={i.temporada}
                id={i.temporada}
                value={i.temporada}
                checked={i.seteado}
                onChange={handleCheckbox}
              ></input>
            </li>
          );
        })} */}
      {/* </ul> */}
    </div>
  );
};

export default Filter;
