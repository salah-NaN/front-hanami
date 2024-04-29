const ButtonPrimary = ({value}) => {
    
    return(
        <button className=" px-8 py-2.5 rounded-lg bg-[#53cd68] border-[#53cd68] border-2 shadow-md transition-all duration-300 hover:bg-[#4bb75d] hover:border-[#4bb75d] hover:text-[#d9d9d9]  text-[#fafafa]   ">
            {value} 
        </button>
    )
}

export default ButtonPrimary