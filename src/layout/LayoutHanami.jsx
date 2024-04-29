import { Footer, NavBar } from "../components";

export const LayoutHanami = ({ children }) => {
  return (
    <>
      <div className="w-10/11 mx-auto
    xl:w-[86%] xl:mx-auto
    2xl:w-[63%]">
        <NavBar />
        <div className="bg-[#fafafa] w-10/12 mx-auto ">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LayoutHanami;
