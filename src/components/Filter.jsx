import { FormControl, ListItemText, MenuItem, Select } from "@mui/material"
import { setOptions } from "leaflet"
import { useState } from "react"

const Filter = ({array: temporadas}) => {
  const [inputs, setInputs] = useState({})
  const [visible, setVisible] = useState(false)

    return (
        <div>
          <button
          onClick={() => setVisible(!false)}
          >Temporadas</button>


          <div>
            <ul className={`${visible ? 'absolute' : 'hidden'}`}>
              <li>Cerezo</li>
              <li>Viña</li>
              <li>Olivo</li>
            </ul>
          </div>
        </div>
    )
}

export default Filter


