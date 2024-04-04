import { motion } from 'framer-motion'
import Logo from "../Logo";

export const NavLinks = ({ toggleMenu, mobileNav }) => {

  return (
    <div className="bg-green-500">
      <div className="flex justify-between py-5 px-5">
        <div className="w-full flex justify-between">
          <Logo />
          <button onClick={() => toggleMenu()}>Cerrar</button>
        </div>
      </div>

      <motion.div className="w-full flex h-screen text-2xl" variants={{
        closed: {x: '-100%'},
        open: {x: '0%'}
      }} animate={mobileNav ? 'open': 'closed'}>
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
      </motion.div>
    </div>
  );
};

export default NavLinks;
