import { useParams } from "react-router-dom"

export const PuntoInteres = () => {
    const {id} = useParams()

    return(
        <div className="">
            {'punto de interes' + id}
        </div>
    )
}

export default PuntoInteres;