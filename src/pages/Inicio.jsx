import { CardsBox } from "../components";
import Banner from "../components/Banner";

export const Inicio = () => {
  return (
    <>
      <div className="">
        <Banner />
      </div>
      <div className="w-9/12 mx-auto">
        <CardsBox />
      </div>
    </>
  );
};

export default Inicio;
