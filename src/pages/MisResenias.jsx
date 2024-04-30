import { useEffect, useState } from "react"
import Resenia from "../components/resenias/Resenia"

// constantes
const URL = 'http://localhost:3000/api'


export const MisResenias = () => {

    const [resenias, setResenias] = useState([])

    // fetch de todas las reseñas del cliente
    useEffect(() => {

        fetch(URL + '/cliente/resenias/', { credentials: 'include' })
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                setResenias(res)
            })
            .catch(err => console.log(err))
    }, [])




    return (
        <div className="mt-20">
            <h2 className="text-3xl w-fit mx-auto mb-4
            sm:text-4xl" >{resenias.length + ' evaluaciones'}</h2>
            <div className=" flex flex-col gap-4
            sm:w-10/12 sm:mx-auto
            md:w-9/12
            lg:w-8/12
            xl:w-7/12">
                {
                    resenias.length > 0
                        ? resenias.map((resenia, index) => <Resenia resenia={resenia} key={index} />)
                        : <p>No hay resenias</p>
                }

            </div>

        </div>
    )
}

export default MisResenias