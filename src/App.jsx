import { NavBar } from "./components/"
import { Link, Outlet } from "react-router-dom"

export const App = () => {
  return (
    <div className="w-11/12 mx-auto" >
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App;
