import { Rating } from "@mui/material"
import { useEffect, useState } from "react"
const Resenia = ({ resenia }) => {

    const URL = 'http://localhost:3000/api'

    console.log(resenia)
    return (
        <>

            <div className="w-full px-4 py-2.5 border-2 bg-[#f0f0f0] border-[#e2e2e2] rounded-lg">
                {/* puntuacion */}
                <div className="flex justify-between items-center" >
                    <Rating name="read-only"
                        value={resenia.puntuacion}>
                    </Rating>
                    {/* fecha */}
                    <p className="text-sm mt-0 font-bold text-[#515151]">{new Date(resenia.fecha).toLocaleDateString()}</p>
                </div>
                {/* reseña */}
                <p className="text-[15px] text-justify mt-3">
                    {resenia.resenia}
                </p>


            </div>
        </>
    )
}

export default Resenia