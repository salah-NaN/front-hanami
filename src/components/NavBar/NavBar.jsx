import { AnimatePresence, useCycle } from "framer-motion";
import { motion } from "framer-motion";
import { AccountButton, Logo, HanburgerButton, NavLinks } from "../";
import { useNavigate } from "react-router-dom";

/*
 El max-w-7xl define el ancho del contenedor nav, el header es todo el largo
 El mx-auto es para que se adapte al header
 Lo he pensado así tambien para definir un ancho de la pagina ya definido(PODEMOS CAMBIARLO)
*/

export const NavBar = () => {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);
  const navigate = useNavigate();

  const toggleMenu = () => {
    toggleMobileNav();
  };

  return (
    <div className="w-full z-30 absolute top-0 shadow-sm
    xl:w-3/4 xl:mx-auto">
      <header className="">
        {/* <div className="absolute inset-0 backdrop-blur-sm"></div> */}
        <div className="sticky border border-[#ececec19] border-r-0 border-l-0 border-t-0">
          <nav className="w-10/12 max-auto flex justify-between sticky py-3 mx-auto">
            <Logo />
            <div className="hidden md:flex md:flex-row gap-4">
              <div onClick={()=>navigate("/login")} className="cursor-pointer"><p className="text-neutral-900 p-2 px-6 bg-slate-100 rounded-full">Login</p></div>
              <div onClick={()=>navigate("/register")} className="cursor-pointer"><p className="text-neutral-900 p-2 px-6 bg-slate-100 rounded-full">Register</p></div>
{/*               <AccountButton toggleMenu={toggleMenu} />
 */}            </div>
            <div className="flex items-center md:hidden lg:hidden xl:hidden">
              <HanburgerButton toggleMenu={toggleMenu} />
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {mobileNav && (
          <motion.div className="sticky z-20 top-0 left-0 w-full h-screen">
            <NavLinks toggleMenu={toggleMenu} mobileNav={mobileNav} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
