const ModalGridImages = ({ modalVisible, setModalVisible, listImages }) => {


    return (
        <div className={`select-none ${modalVisible ? 'fixed' : 'hidden'} z-50 top-0 left-0  overflow-y-auto overflow-x-hidden w-full h-dvh  bg-black bg-opacity-50 `}>
            <div className={` ${modalVisible ? 'absolute' : 'hidden'} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50
                w-full h-full my-2 py-6 px-8  `}>
                <div className="overflow-y-scroll w-full bg-[#fefefe] py-6 px-8 rounded-lg">
                    <div className="size-4 bg-neutral-600 mb-2"
                    onClick={() => setModalVisible(false)}></div>
                    <div className="grid grid-cols-2 gap-2.5 ">
                        {
                            listImages && listImages.map((image, index) => (
                                index % 3 === 0
                                    ?
                                    <img className="rounded-lg w-full h-full " src={`http://localhost:3000/img/${image.nombre}${image.tipo}`}></img>
                                    :
                                    <img className="rounded-lg w-full h-full" src={`http://localhost:3000/img/${image.nombre}${image.tipo}`}></img>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ModalGridImages


