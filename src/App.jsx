import { NavBar } from "./components/";
import { Outlet } from "react-router-dom";
import LayoutHanami from "./layout/LayoutHanami";

export const App = () => {
  return (
    <LayoutHanami />
    // <div className="w-[90%] sm:w-[92%] md:w-[90%] lg:w-[70%] mx-auto">
    //   <NavBar />
    //   <Outlet />
    // </div>
  );
};

export default App;
