import { useEffect, useState } from "react"
import Resenia from "../components/resenias/Resenia"

// constantes
const URL = 'http://localhost:3000/api'


export const MisResenias = () => {

    const [resenias, setResenias] = useState([])

    // fetch de todas las reseñas del cliente
    useEffect(() => {

        fetch(URL + '/cliente/resenias/', {credentials: 'include'})
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                setResenias(res)
            })
            .catch(err => console.log(err))
    }, [])




    return (
        <div className="mt-20 flex flex-col gap-4" >
            {
                resenias.length > 0 
                ? resenias.map((resenia, index) => <Resenia resenia={resenia} key={index} />)
                : <p>No hay resenias</p>
            }

        </div>
    )
}

export default MisResenias