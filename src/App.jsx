import { NavBar } from "./components/"
import { Link, Outlet } from "react-router-dom"

export const App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
