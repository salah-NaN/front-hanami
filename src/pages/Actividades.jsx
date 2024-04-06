import { useParams } from "react-router-dom"



export default function Actividades(){

    const {id} = useParams()

    return(
        <>
            {'actividad' + id}
        </>
    )
}