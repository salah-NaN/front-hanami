import { FormControl, ListItemText, MenuItem, Select } from "@mui/material"
import { setOptions } from "leaflet"
import { useRef, useState, useEffect } from "react";


const Filter = ({ array: temporadas }) => {
  // input de los checkbox que conforman el select
  const [inputs, setInputs] = useState(asignarControladorCheckboxes())
  // controlador para definir si el filtro es visible o no 
  const [visible, setVisible] = useState(false)
  // referencia para que se cierre cuando se clique fuera del div 
  const dropdownRef = useRef(null);

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


  // funciones 
  // funcion para preparar los inputs de los checkbox del filtro
  function asignarControladorCheckboxes() {
    const arrObj = temporadas.map(temporada => {
      return { [temporada]: false }
    })

    let o = {}
    arrObj.forEach(obj => {
      o = { ...o, ...obj }
    })
    return o
  }
  const handleCheckbox = (event) => {
    const { name, checked } = event.target

    console.log(name, checked, 'ALGO MAS')
    setInputs({...inputs, [name]: event.target.checked})

  }


  useEffect(() => {
    console.log('estos son los inputs')
    console.log(inputs)
  }, [inputs])

  return (
    <div ref={dropdownRef}>
      <button
        onClick={() => setVisible(!visible)}
      >Temporadas</button>


      <div >
        <ul className={`${visible ? 'absolute' : 'hidden'}`}>

          {
            temporadas && temporadas.map(t => {
              return <li>
                <label>
                  {t}
                </label>
                <input type="checkbox"
                  name={t}
                  id={t}
                  // value={}
                  checked={inputs.t}
                  onChange={handleCheckbox}>

                </input>
              </li>
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Filter


