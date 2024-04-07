// import { useState } from "react";
import { AnimatePresence, useCycle } from "framer-motion";
import { motion } from "framer-motion";
import { AccountButton, Logo, HanburgerButton, NavLinks } from "../";
/*
 El max-w-7xl define el ancho del contenedor nav, el header es todo el largo
 El mx-auto es para que se adapte al header
 Lo he pensado así tambien para definir un ancho de la pagina ya definido(PODEMOS CAMBIARLO)
*/

export const NavBar = () => {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  const toggleMenu = () => {
    toggleMobileNav();
  };

  return (
    <div className="">
      <header className="w-full">
        <nav className="flex justify-between sticky py-6 w-[88%] mx-auto">
          <Logo />
          <div className="hidden md:block">
            <AccountButton />
          </div>
          <div className="flex items-center md:hidden lg:hidden xl:hidden">
            <HanburgerButton toggleMenu={toggleMenu} />
          </div>
        </nav>
      </header>
      <div>
        <AnimatePresence>
          {mobileNav && (
            <motion.div className="fixed z-20 top-0 w-full h-screen">
              <NavLinks toggleMenu={toggleMenu} mobileNav={mobileNav} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NavBar;
