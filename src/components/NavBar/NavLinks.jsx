import { motion, MotionConfig } from "framer-motion";
import Logo from "../Logo";

export const NavLinks = ({ toggleMenu, mobileNav }) => {
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
            <div className="">
              <li className="py-3 px-6 hover:bg-red-500 hover:cursor-pointer">
                Hola
              </li>
            </div>
            <div className="">
              <li className="py-3 px-6 hover:bg-red-500 hover:cursor-pointer">
                Hola
              </li>
            </div>
            <div className="">
              <li className="py-3 px-6 hover:bg-red-500 hover:cursor-pointer">
                Hola
              </li>
            </div>
            <div className="">
              <li className="py-3 px-6 hover:bg-red-500 hover:cursor-pointer">
                Hola
              </li>
            </div>
          </ul>
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
};

export default NavLinks;
