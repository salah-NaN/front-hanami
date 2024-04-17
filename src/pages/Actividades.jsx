import { useParams } from "react-router-dom"



export const Actividades = () => {

    const {id} = useParams()

    return(
        <>
            {'actividad' + id}
        </>
    )
}

export default Actividades