import Logo from "../Logo";

export const NavLinks = ({ toggleMenu }) => {
  return (
    <div className="fixed left-0 top-0 w-full h-screen">
      <div className="flex justify-between py-5 px-5">
        <div className="w-full flex justify-between">
          <Logo />
          <button onClick={() => toggleMenu(false)}>Cerrar</button>
        </div>
      </div>

      <div className="w-full flex h-screen text-2xl">
        <ul className="text-white w-screen absolute">
          <div className="">
            <li className="py-3 px-5 hover:bg-red-500 hover:cursor-pointer">
              Hola
            </li>
          </div>
          <div className="">
            <li className="py-3 px-5 hover:bg-red-500 hover:cursor-pointer">
              Hola
            </li>
          </div>
          <div className="">
            <li className="py-3 px-5 hover:bg-red-500 hover:cursor-pointer">
              Hola
            </li>
          </div>
          <div className="">
            <li className="py-3 px-5 hover:bg-red-500 hover:cursor-pointer">
              Hola
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavLinks;
