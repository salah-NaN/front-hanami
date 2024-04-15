import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

// constantes
const URL = 'http://localhost:3000/api'


export default function Actividades(){

    const {id} = useParams()

    // fetch para sacar la información de la actividad específica
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'include'
          }
          fetch(URL + '/actividad_page/' + id, options)
            .then(res => res.json())
            .then(res => {
              console.log(res)
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <div>
            
        </div>
    )
}