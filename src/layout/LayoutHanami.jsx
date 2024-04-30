import { Footer, NavBar } from "../components";
import { useLocation } from "react-router-dom";

export const LayoutHanami = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <div
        className="w-10/11 mx-auto
        lg:w-full
        xl:w-9/12 xl:mx-auto
        2xl:w-[54%]"
      >
        <header className="">
          <NavBar />
        </header>
      </div>

      
      <body>
        <div
          className={`${
            location.pathname.includes("/busqueda")
              ? `w-10/11 mx-auto xl:w-full xl:mx-auto`
              : `w-11/12 mx-auto md:w-10/12 md:mx-auto lg:w-11/12 xl:w-7/12 xl:mx-auto
              2xl:w-6/12`
          }`}
        >
          {/* w-11/12 mx-auto md:w-[90%] md:mx-auto */}
          <div
            className={`bg-[#fafafa] ${
              location.pathname.includes("/busqueda")
                ? `w-full mx-auto`
                : ``
            }`}
          >
            {children}
          </div>
        </div>
      </body>
      {/* <Footer /> */}
      {/* </div> */}
    </>
  );
};

export default LayoutHanami;
