import { Outlet } from "react-router-dom";
import { NavBar } from "../components";

export const LayoutHanami = () => {
  return (
    <div className="">
      {/* navbar (header) */}
      {/* <header></header> */}
      <NavBar />
      <div className="bg-[#fefefe]">
        <Outlet />
      </div>
      {/* div footer */}
      <div className="">{/* Footer */}</div>
    </div>
  );
};

export default LayoutHanami;
