import { NavBar } from "../components";

export const LayoutHanami = ({children}) => {
  return (
    <div className="w-10/11 mx-auto
    xl:w-3/4 xl:mx-auto">
      {/* navbar (header) */}
      <NavBar />
      <div className="bg-[#fefefe] w-10/12 mx-auto">
        {children}
      </div>
      {/* div footer */}
      <div className="">{/* Footer */}</div>
    </div>
  );
};

export default LayoutHanami;
