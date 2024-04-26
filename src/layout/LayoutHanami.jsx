import { useEffect } from "react";
import { Footer, NavBar } from "../components";

export const LayoutHanami = ({ children }) => {
  return (
    <>
      <div className="w-10/11 mx-auto
    xl:w-3/4 xl:mx-auto">
        <NavBar otrasPaginas={true} />
        <div className="bg-[#fafafa] w-10/12 mx-auto ">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LayoutHanami;
