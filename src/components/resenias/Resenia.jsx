import { Rating } from "@mui/material"
import { useEffect, useState } from "react"
const Resenia = ({ resenia }) => {

    return (
        <>


        


            <div className="w-2/3 px-4 py-2.5 border-2 bg-[#f0f0f0] border-[#e2e2e2] rounded-lg">
                {/* puntuacion */}
                <div className="flex justify-between items-center" >
                    <Rating name="read-only"
                        value={5}>
                    </Rating>
                    {/* fecha */}
                    <p className="text-sm mt-0 font-bold text-[#515151]">14 may 2023</p>
                </div>
                {/* reseña */}
                <p className="text-[15px] text-justify mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis tenetur iusto quis. Ducimus reprehenderit aliquam sunt adipisci repellat? Unde, nobis modi. Eaque necessitatibus ex debitis, minima alias accusamus id
                </p>


            </div>
        </>
    )
}

export default Resenia