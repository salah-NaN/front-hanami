import { NavBar } from "./components/";
import { Link, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div className="w-[90%] sm:w-[92%] md:w-[90%] lg:w-[70%] mx-auto">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default App;
