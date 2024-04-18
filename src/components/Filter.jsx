import { FormControl, ListItemText, MenuItem, Select } from "@mui/material"
import { setOptions } from "leaflet"
import { useRef, useState, useEffect, useContext} from "react";
import filterContext from "../context/filterContext";

const Filter = ({ array: temporadas }) => {
  // const a = asignarControladorCheckboxes()
  // input de los checkbox que conforman el select
  const [inputs, setInputs] = useState([])
  // controlador para definir si el filtro es visible o no 
  const [visible, setVisible] = useState(false)
  //objeto formado por los inputs y su nombre convertido ,
  const [test,setTest] =useState({}) 
  // referencia para que se cierre cuando se clique fuera del div 
  const dropdownRef = useRef(null);
  const {filtros, setFiltros} = useContext(filterContext)

  const nombreConvertido = [
    {
      nombre: 'CerezoCapullo',
      convertido: 'Boton Blanco'
    },
    {
      nombre:'CerezoGrande',
      convertido:'Cerezo Grande'
    },
    {
      nombre: 'CerezoInicioFlor',
      convertido: ' Inicio Floración'
    },
    {
      nombre:'CerezoMaxFloracion',
      convertido:'Flor Abierta'
    },
    {
      nombre: 'CerezoMediano',
      convertido: 'Cerezo Mediano '
    },
    {
      nombre:'CerezoMuerto',
      convertido:'Caida de la flor'
    },
    {
      nombre: 'CerezoPequenio',
      convertido: 'Cerezo Pequeño'
    },
    {
      nombre:'LavandaCapullo',
      convertido:'Lavanda sin brotes'
    },
    {
      nombre: 'LavandaInicioFlor',
      convertido: 'Brotes de Lavanda'
    },
    {
      nombre:'LavandaMaxFloracion',
      convertido:'Lavanda en Flor'
    },
    {
      nombre: 'LavandaMuerta',
      convertido: 'Lavanda para Cosechar'
    },
    {
      nombre:'OlivoFlor',
      convertido:'Olivo Floracion'
    },
    {
      nombre:'OlivoGrande',
      convertido:'Olivo Cuajado'
    },
    {
      nombre:'OlivoMediano',
      convertido:'Olivo Carolas visibles'
    },
    {
      nombre:'OlivoPequenio',
      convertido:'Olivo Inicio'
    },
    {
      nombre:'ViñaFlor',
      convertido:'Vid en Flor'
    },
    {
      nombre:'ViñaUvaGrande',
      convertido:'Vid Madura'
    },
    {
      nombre:'ViñaUvaMediana',
      convertido:'Vid Inicio(Veraison)'
    },
    {
      nombre:'ViñaUvaPequeña',
      convertido:'Vid Cuajado'
    }
  ]

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

      const retorno = asignarControladorCheckboxes()
      setInputs(retorno)

  }, [temporadas])

  // funciones 
  // funcion para preparar los inputs de los checkbox del filtro
  function asignarControladorCheckboxes() {
    let x = [{}]
    const arrObj = temporadas.map(temporada => {
      nombreConvertido.map(nc => {
        if(nc.nombre === temporada){
            x = { nombre:nc.convertido , temporada ,seteado:false}
          }
        })
        return  x
      })
    return arrObj
  }

  const handleCheckbox = (event) => {
    const { name, checked } = event.target
    const inputsNuevos = inputs.map(i => {
      if(i.temporada === name){
        i.seteado = !i.seteado
      }
      return i
    }) 
    setInputs(inputsNuevos)
  }


  useEffect(() => {
    const filtrados = []
/*     inputs.map(i=> {
      if (i.seteado !== false ) {
        console.log("asdf",i.temporada);
        filtrados.push(i.temporada)
      }
    }) */
    const test1 = inputs.filter(i => i.seteado)
    console.log("asdfasdfasdfasdfasd",filtrados);
/*     setFiltros(test1)   
 */   
  }, [inputs])

  
  return (
    <div ref={dropdownRef}>
      <button
        onClick={() => setVisible(!visible)}
      >Temporadas</button>


      <div >
        <ul className={`${visible ? 'absolute' : 'hidden'}`}>

        {inputs.map(i =>   {
              return<li>
                <label>
                  {i.nombre}
                </label>
                <input type="checkbox"
                  name={i.temporada}
                  id={i.temporada}
                  value = {i.temporada}
                  checked={i.seteado}
                  onChange={handleCheckbox}>

                </input>
              </li>
            } )
          } 
        </ul>
      </div>
    </div>
  )
}

export default Filter


