import { useRef } from 'react'
import { CardsBox, SearchBar, Banner } from "../components";

export const Inicio = () => {

  //Seteamos el valor por defecto que sea null de useRef 
  const moveToSearchBar = useRef(null);


  const paginacionScrollHome = () => {
    moveToSearchBar.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div className="">
        <Banner paginacionScrollHome={paginacionScrollHome} />
      </div>
      <div className=''>
        <SearchBar moveToSearchBar={moveToSearchBar} />
      </div>
      <div className="w-11/12 mx-auto">
        <CardsBox />
      </div>
    </>
  );
};

export default Inicio;
