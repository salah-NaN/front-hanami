import { useState } from "react";
import ModalGridImages from "../ModalGridImages";

const GridTwo = ({ images }) => {

    const [modalVisible, setModalVisible] = useState(false)

    // funciones

    return (
        <>
        <div className="grid grid-cols-2 gap-1.5
">
            {
                images && images.map((image, index) => {
                    if (index === 0) {
                        return <img key={image.id} className=" rounded-lg w-full h-52" src={`http://localhost:3000/img/${image.nombre}${image.tipo}`} ></img>
                    } else if (index === 1) {
                        return <div key={image.id} className="b relative w-full h-52">
                            <img  className=" w-full h-52 rounded-lg " src={`http://localhost:3000/img/${image.nombre}${image.tipo}`} >
                            </img>
                            <div className="absolute size-full top-0 backdrop-blur-sm rounded-lg z-10" ></div>
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

export default GridTwo;
