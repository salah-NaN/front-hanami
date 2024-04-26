import { AnimatePresence, useCycle } from "framer-motion";
import { motion } from "framer-motion";
import { AccountButton, Logo, HanburgerButton, NavLinks, SearchBar } from "../";

export const NavBar = ({isBusqueda}) => {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  const toggleMenu = () => {
    toggleMobileNav();
  };

  return (
    <div className="w-full z-30 absolute top-0
    xl:w-3/4 mx-auto left-0 right-0">
      <header className="">
        <div className="sticky border-r-0 border-l-0 border-t-0">
          <nav className="w-10/12 max-auto flex justify-between py-3 mx-auto">
            <Logo />
            {
              isBusqueda ? (
                <SearchBar />
              ) : null
            }
            <div className="hidden md:inline">
              <AccountButton />
            </div>
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
