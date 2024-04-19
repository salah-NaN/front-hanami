const GridFive = ({ images }) => {



    return (
        <div className="grid grid-cols-4 grid-rows-2 gap-1 h-68
        xl:h-96">
            {
                images && images.map((image, index) => {
                    if (index === 0) {
                        return <img key={image.id} className="w-full h-full col-span-2 row-span-2" src={`http://localhost:3000/img/${image.nombre}${image.tipo}`} ></img>
                    } else if(index > 0) {
                        return <img key={image.id} className="w-full h-full " src={`http://localhost:3000/img/${image.nombre}${image.tipo}`} ></img>
                    } else if (index === 4) {
                        return <img key={image.id} className="w-full h-full" src={`http://localhost:3000/img/${image.nombre}${image.tipo}`} ></img>
                    } else {
                        return null
                    }
                })
            }
        </div>
    )
};

export default GridFive;
