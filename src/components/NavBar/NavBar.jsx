// import { useState } from "react";
import { useCycle } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import { AccountButton, Logo, HanburgerButton, NavLinks } from "../";
/*
 El max-w-7xl define el ancho del contenedor nav, el header es todo el largo
 El mx-auto es para que se adapte al header
 Lo he pensado así tambien para definir un ancho de la pagina ya definido(PODEMOS CAMBIARLO)
*/

export const NavBar = () => {
  // const [open, setOpen] = useState(false);
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
    },
    exit: {
      scaleY: 0,
    },
  };

  const toggleMenu = () => {
    console.log("togglemenu");
    toggleMobileNav();
  };

  return (
    <div className="">
      <header className="w-full">
        <nav className="flex justify-between mx-auto sticky py-6 px-5">
          <Logo />
          <div className="hidden md:block">
            <AccountButton />
          </div>
          <div className="flex items-center sm:hidden">
            <HanburgerButton openModal={() => toggleMenu(true)} />
          </div>
        </nav>
      </header>
      <div>
        <div
          className="w-full flex h-screen text-2xl"
          variants={{
            closed: { rotate: 0 },
            rotate: { open: 45 },
          }}
          animate={mobileNav ? "open" : "closed"}
        >
          {/* Contenido del menú */}
          <button onClick={toggleMenu}>Hola</button>
          <motion.h1
            variants={{
              closed: { rotate: 0 },
              open: { rotate: 45 },
            }}
            animate={mobileNav ? 'open' : 'closed'}
          >
            Prueba
          </motion.h1>
        </div>
        <motion.div className="fixed left-0 top-0 w-full h-screen">
          <NavLinks toggleMenu={toggleMenu} mobileNav={mobileNav} />
        </motion.div>
      </div>
    </div>
  );
};

export default NavBar;
