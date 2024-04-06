import { useParams } from "react-router-dom"



export default function PuntoInteres(){

    const {id} = useParams()

    return(
        <>
            {'punto de interes' + id}
        </>
    )
}