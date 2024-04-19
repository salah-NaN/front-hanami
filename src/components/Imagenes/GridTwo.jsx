const GridTwo = ({images}) => {


    return(
        <div className="grid grid-cols-2 gap-1">
            {
                images && images.map((image, index) => {
                    if(index === 0){
                        return <img key={image.id} className="w-full h-52" src={`http://localhost:3000/img/${image.nombre}${image.tipo}`} ></img>
                    } else if (index === 1) {
                        return <img key={image.id} className="w-full h-52" src={`http://localhost:3000/img/${image.nombre}${image.tipo}`} >
                            {/* <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-1/2`} >hola</div> */}
                        </img>
                    } else {
                        return null
                    }
                })
            }
        </div>
    )
};

export default GridTwo;
