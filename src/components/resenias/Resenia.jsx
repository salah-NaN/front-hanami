import { Rating } from "@mui/material"
import { useEffect, useState } from "react"
const Resenia = ({ resenia }) => {

    const URL = 'http://localhost:3000/api'

    return (
        <>

            <div className="w-full px-4 py-2.5 border bg-[#f6f6f6] shadow-md border-[#141414] rounded-lg">
                {/* puntuacion */}
                <div className="flex justify-between items-center" >
                    <Rating name="read-only"
                        value={resenia.puntuacion}>
                    </Rating>
                    {/* fecha */}
                    <p className="text-[14px] mt-0 font-bold text-[#575757]">{new Date(resenia.fecha).toLocaleDateString()}</p>
                </div>
                {/* reseña */}
                <p 
                className="text-[16px] text-pretty mt-3">
                    {resenia.resenia}
                </p>


            </div>
        </>
    )
}

export default Resenia