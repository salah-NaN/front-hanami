import { AccountButton, Logo, HanburgerButton } from "../";

/*
 El max-w-7xl define el ancho del contenedor nav, el header es todo el largo
 El mx-auto es para que se adapte al header
 Lo he pensado así tambien para definir un ancho de la pagina ya definido(PODEMOS CAMBIARLO)
*/

export const NavBar = () => {
  return (
    <header className="w-full">
      <nav className="flex justify-between mx-auto sticky py-6 px-5">
        <Logo />
        <div className="hidden">
          <AccountButton />
        </div>
        <div className="">
          <HanburgerButton />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
