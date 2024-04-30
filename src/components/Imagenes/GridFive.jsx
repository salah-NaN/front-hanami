import { useState } from "react";
import ModalGridImages from "../ModalGridImages";

const GridFive = ({ images }) => {

    const [modalVisible, setModalVisible] = useState(false)



    return (
        <>
            <div className="grid grid-cols-4 grid-rows-2 gap-1.5 h-[320px] 
            xl:h-[380px]
            2xl:h-[390px]">
                {
                    images && images.map((image, index) => {
                        if (index === 0) {
                            return <img key={image.id} className="hover:scale-95 transition-all duration-300 w-full h-full col-span-2 row-span-2 rounded-lg" src={`/api/img/${image.nombre}${image.tipo}`} ></img>
                        } else if (index > 0 && index < 4) {
                            return <img key={image.id} className="hover:scale-95 transition-all duration-300 w-full h-full  rounded-lg" src={`/api/img/${image.nombre}${image.tipo}`} ></img>
                        } else if (index === 4) {
                            return <div key={image.id} className="b relative  w-full h-full">
                                <img className="   w-full h-full rounded-lg " src={`/api/img/${image.nombre}${image.tipo}`} >
                                </img>
                                <div className="absolute size-full top-0 backdrop-blur-sm hover:backdrop-blur-0 rounded-lg z-10 transition-all duration-300" ></div>
                                <div className={` absolute z-20 bottom-9 left-1/2 -translate-x-1/2 translate-y-1/2 text-[#fcfcfc] bg-black/60 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-black/80 hover:underline transition-all duration-100`}
                                    onClick={() => setModalVisible(!modalVisible)}>
                                    Ver más
                                </div>
                            </div>
                        } else {
                            return null
                        }
                    })
                }
            </div>
            <ModalGridImages modalVisible={modalVisible} setModalVisible={setModalVisible} listImages={images} />
        </>
    )
};

export default GridFive;
