import arrow from '../assets/nav-arrow-left.svg'

const ModalGridImages = ({ modalVisible, setModalVisible, listImages }) => {


    return (
        <div className={`select-none ${modalVisible ? 'fixed' : 'hidden'} z-50 top-0 left-0  overflow-y-auto overflow-x-hidden w-full h-dvh  bg-black bg-opacity-50
        backdrop-blur-sm `}>
            <div className={` ${modalVisible ? 'absolute' : 'hidden'} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50
                w-full h-full my-2 py-6 px-8  `}>
                <div className=" relative overflow-y-scroll w-full bg-[#fefefe] py-6 pt-16 px-14 rounded-lg
                xl:w-7/12 xl:mx-auto">
                    <img src={arrow} 
                    className="size-8 absolute top-4 left-12"
                    onClick={() => setModalVisible(false)}></img>
                    <div className="grid grid-cols-2 gap-2.5 ">
                        {
                            listImages && listImages.map((image, index) => (
                                index % 3 === 0
                                    ?
                                    <img className="rounded-lg w-full h-full col-span-2 " src={`http://localhost:3000/img/${image.nombre}${image.tipo}`}></img>
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


