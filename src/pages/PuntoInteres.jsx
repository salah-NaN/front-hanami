import { useEffect } from "react"
import { useParams } from "react-router-dom"
// constantes
const URL = 'http://localhost:3000/api'
export default function PuntoInteres(){
  
    const {id} = useParams()


    useEffect(() => {
        console.log(id)
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'include'
          }
          fetch(URL + '/punto_interes_page/' + id, options)
            .then(res => res.json())
            .then(res => {
              console.log(res)
            })
            .catch(err => console.log(err))
    }, [])


    // el fetch contiene la info del Pdi 
    // contiene la info de que flores tiene
    // contiene el propietaraio asociado
    // contiene las imágenes asociadas
    // contiene las temporadas asociadas
    // contiene las actividades asociadas a las temporadas

    return(
        <div className="">
            {'punto de interes' + id}
        </div>
    )
}

export default PuntoInteres;