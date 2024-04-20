import { NavBar } from "../components";

export const LayoutHanami = ({ children }) => {
  return (
    <div className="w-10/11 mx-auto">
      <NavBar />
      <div className="bg-[#fefefe] w-10/12 mx-auto">
        {children}
      </div>
    </div>
  );
};

export default LayoutHanami;
