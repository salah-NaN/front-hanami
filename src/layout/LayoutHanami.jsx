import { NavBar } from "../components";

export const LayoutHanami = ({ children }) => {
  return (
    <div className="w-10/11 mx-auto
    xl:w-3/4 xl:mx-auto">
      <NavBar isBusqueda={true} />
      <div className="bg-[rgb(250,250,250)] w-10/12 mx-auto ">
        {children}
      </div>
    </div>
  );
};

export default LayoutHanami;
