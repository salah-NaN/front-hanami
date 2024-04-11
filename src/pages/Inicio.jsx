import { useRef } from 'react'
import { CardsBox } from "../components";
import Banner from "../components/Banner";
import Footer from '../components/Footer'
import Mapa from '../components/mapa/Mapa'

export const Inicio = () => {

  //Seteamos el valor por defecto que sea null de useRef 
  const paginacion = useRef(null);


  const paginacionScrollHome = () => {
    paginacion.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div className="">
        <Banner paginacionScrollHome={paginacionScrollHome} />
      </div>
      <div className="w-11/12 mx-auto">
        <CardsBox paginacion={paginacion} />
        <Mapa />
      </div>
      <Footer/>

    </>
  );
};

export default Inicio;
