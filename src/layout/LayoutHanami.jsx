import { Footer, NavBar } from "../components";
import { useLocation } from "react-router-dom";

export const LayoutHanami = ({ children }) => {
  const location = useLocation();
  
  return (
    <>
      <header className="">
        <NavBar />
      </header>
      <body>
        <div
          className={`${
            location.pathname.includes("/busqueda")
              ? `w-10/11 mx-auto xl:w-full xl:mx-auto`
              : `w-10/11 mx-auto xl:w-3/4 xl:mx-auto`
          }`}
        >
          <div
            className={`bg-[#fafafa] ${
              location.pathname.includes("/busqueda")
                ? `w-full mx-auto`
                : `w-9/12 mx-auto md:w-[90%] md:mx-auto`
            }`}
          >
            {children}
          </div>
        </div>
      </body>
      {/* <Footer /> */}
    </>
  );
};

export default LayoutHanami;
