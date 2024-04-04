import { useState } from "react";
import { AccountButton, Logo, HanburgerButton, NavLinks } from "../";
/*
 El max-w-7xl define el ancho del contenedor nav, el header es todo el largo
 El mx-auto es para que se adapte al header
 Lo he pensado así tambien para definir un ancho de la pagina ya definido(PODEMOS CAMBIARLO)
*/

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = (value) => {
    setOpen(value);
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
      <div
        className={`sm:flex sm:justify-center sm:items-center px-5 py-1 w-full
      absolute top-0 h-full bg-green-300 transition ease-in-out delay-150 ${
       open ? `block` : `hidden`
     }`}
      >
        <NavLinks toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};

export default NavBar;
