import { motion, MotionConfig } from "framer-motion";

import Logo from "../Logo";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";

export const NavLinks = ({ toggleMenu, mobileNav }) => {
  const navigate = useNavigate();
  const [logueado, setLogueado] =useState(false)

  useEffect(() => {

    if(document.cookie.includes('token')){
      setLogueado(true)
    }

  },[])

  const logout = () => {
    // Clear the authentication token cookie
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Set the expiration date to a past date
    toggleMenu()// Redirect to the login page
    setLoguejat(false)
  };

  return (
    <MotionConfig
      transition={{
        type: "spring",
        bounce: 0.099,
      }}
    >
      <motion.div
        className="bg-green-500"
        key="mobile-nav"
        variants={{
          closed: {
            x: "100%",
            transition: {
              when: "afterChildren",
              type: "spring",
              bounce: 0.099,
            },
          },
          open: {
            x: "0%",
            transition: {
              when: "beforeChildren",
              type: "spring",
              bounce: 0.099,
            },
          },
        }}
        initial="closed"
        animate="open"
        exit="closed"
      >
        <motion.div className="flex justify-between py-5 px-5">
          <div className="w-full flex justify-between">
            <Logo />
            <button onClick={() => toggleMenu()}>Cerrar</button>
          </div>
        </motion.div>

        <motion.div
          className="w-full h-screen text-2xl"
          variants={{
            open: {
              y: "0%",
              opacity: 1,
            },
            closed: {
              y: "20%",
              opacity: 0,
            },
          }}
        >
          <ul className="text-white w-screen text-center">
            {
              logueado == true ?            
              <div>
              <div className="" onClick={()=> navigate("/MiPerfil")}>
                <li className="py-3 px-6 hover:bg-red-500 hover:cursor-pointer">
                  Mi perfil
                </li>
              </div>
              <div className="" onClick={()=> logout()}>
                <li className="py-3 px-6 hover:bg-red-500 hover:cursor-pointer">
                  Logout
                </li>
              </div>

            </div> : 
            <div>
            <div className="" onClick={()=> navigate("/login")}>
              <li className="py-3 px-6 hover:bg-red-500 hover:cursor-pointer">
                Inicia Sesion
              </li>
            </div>
            <div className="" onClick={()=> navigate("/register")}>
              <li className="py-3 px-6 hover:bg-red-500 hover:cursor-pointer">
                Registrate
              </li>
            </div>

          </div>
            }


          </ul>
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
};

export default NavLinks;
