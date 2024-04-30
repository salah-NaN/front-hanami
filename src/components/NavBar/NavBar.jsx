import {useState, useEffect, useContext} from "react";
import {useLocation, useParams, useNavigate} from "react-router-dom";
import {AnimatePresence, useCycle, motion} from "framer-motion";
import {
  AccountButton,
  Logo,
  HanburgerButton,
  NavLinks,
  SearchBar,
  FiltersButton,
} from "../";
import {BuscadorGrandeOtrasPaginas, BuscadorOtrasPaginas} from "../Buscador";
import {NavBarFiltros} from "../Buscador/PopUp";
import {format, parse} from "date-fns";
import {FilterActividades, Filter} from "../filtros";
import {PopUpBuscador} from "../Buscador/PopUp";
import ClienteContext from "../../context/ClienteContext";

export const NavBar = () => {
  const location = useLocation();
  const params = useParams();
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  const [logueado, setLogueado] = useState(false);
  const navigate = useNavigate();
  const [buscadorNav, toggleBuscadorNav] = useCycle(false, true);
  const [buscadorNavMobile, toggleBuscadorNavMobile] = useCycle(false, true);
  const [popUpFiltersMobile, togglePopUpFiltersMobile] = useCycle(false, true);
  const [cambio, setCambio] = useState(false);
  const [checkedFilters, setCheckedFilters] = useState([]);
  const [puntosDeInteres, setPuntosDeInteres] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [filters, setFilters] = useState([]);
  const {togglePopUpFilter, popUpFilter} = useContext(ClienteContext);

  useEffect(() => {
    if (document.cookie.includes("token")) {
      setLogueado(true);
    }
  }, []);
  const toggleMenu = () => {
    toggleMobileNav();
  };

  const logout = () => {
    // Clear the authentication token cookie
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Set the expiration date to a past date
    setLogueado(false);
    navigate("/");
  };

  const openOnPopUpBuscadorMobile = () => {
    toggleBuscadorNavMobile();
  };

  const openPopUpFilters = () => {
    togglePopUpFilter();
  };

  useEffect(() => {
    let url = "/api";
    fetch(url + "/puntos_interes")
      .then((res) => res.json())
      .then((puntos_interes) => setPuntosDeInteres(puntos_interes))
      .catch((error) => console.log(error));

    if (location.pathname.includes("/busqueda")) {
      const url = "/api/";
      let {localizacion, fecha, flor} = params;
      if (fecha !== ";") {
        fecha = format(parse(fecha, "dd-MM-yyyy", new Date()), "yyyy-MM-dd");
      }

      fetch(url + `puntos_interes/${localizacion}/${fecha}/${flor}`)
        .then((res) => res.json())
        .then((filterData) => {
          setFilterData(filterData);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  useEffect(() => {
    setCambio(!cambio);
  }, [filters]);

  useEffect(() => {
    setCheckedFilters(
      filters?.filter((f) => f.seteado == true).map((f) => f.temporada)
    );
  }, [cambio]);

  return (
    <div className="">
      <AnimatePresence>
        <motion.header
          className={`w-full ${
            location.pathname.includes("/puntosInteres") ||
            location.pathname.includes("/actividades")
              ? "w-10/12 mx-auto md:w-full lg:w-[96%] lg:mx-auto md:mx-auto xl:mx-auto xl:w-10/12 2xl:w-full 2xl:mx-auto transition-all duration-300"
              : location.pathname.includes("/busqueda")
              ? "md:w-full md:h-24 h-20 fixed top-0 right-0 z-30 bg-white transition-all duration-300"
              : "z-10 absolute top-0 xl:w-11/12 mx-auto left-0 right-0"
          } ${
            buscadorNavMobile === true
              ? `md:h-48 xl:w-full md:w-full md:absolute bg-white top-0 left-0 right-0 z-50`
              : ``
          } `}
        >
          <div
            className={`flex items-center justify-center overflow-visible border-r-0 border-l-0 border-t-0 h-full ${
              location.pathname === "/"
                ? "w-11/12 mx-auto"
                : location.pathname.includes("/busqueda")
                ? "md:flex md:flex-col"
                : "w-full mx-auto"
            }`}
          >
            {/* Antes el w-full estaba en w-10/12 */}
            <nav
              className={`md:w-[90%] lg:lg:w-[93%] w-11/12 max-auto flex 
          ${
            buscadorNavMobile === true ? `h-full items-center` : ``
          } justify-between py-3 gap-3 mx-auto`}
            >
              <div
                className={`${
                  location.pathname.includes("/busqueda") ||
                  location.pathname.includes("/puntosInteres") ||
                  location.pathname.includes("/actividades")
                    ? `hidden md:block lg:block`
                    : ``
                }`}
              >
                <Logo />
              </div>
              {buscadorNavMobile ? (
                <div className="relative md:hidden">
                  <AnimatePresence>
                    <motion.div className="fixed z-50 top-0 left-0 right-0 bottom-0 w-full h-full overflow-hidden">
                      <PopUpBuscador
                        toggleBuscadorNavMobile={toggleBuscadorNavMobile}
                        puntosDeInteres={puntosDeInteres}
                        setPuntosDeInteres={setPuntosDeInteres}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              ) : null}

              {/* Buscador pequeño sin el popUp  */}
              {location.pathname !== "/" && buscadorNavMobile === false ? (
                <BuscadorOtrasPaginas
                  openOnPopUpBuscadorMobile={openOnPopUpBuscadorMobile}
                />
              ) : null}

              {buscadorNavMobile ? (
                <motion.div
                  className="hidden md:flex md:justify-center md:items-center md:h-full lg:flex lg:justify-center lg:items-center lg:h-full"
                  initial={{scale: 0}}
                  animate={{rotate: 0, scale: 1}}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 30,
                  }}
                >
                  <BuscadorGrandeOtrasPaginas
                    puntosDeInteres={puntosDeInteres}
                  />
                </motion.div>
              ) : null}
              <div className="hidden md:inline">
                {!logueado ? (
                  <div className="hidden md:flex md:flex-row gap-4">
                    <div
                      onClick={() => navigate("/login")}
                      className="cursor-pointer "
                    >
                      <p className="text-neutral-900 p-2 px-6 bg-slate-100 rounded-full backdrop-filter backdrop-blur-lg bg-opacity-20 hover:bg-opacity-50 focus:bg-opacity-100 font-semibold">
                        Login
                      </p>
                    </div>
                    <div
                      onClick={() => navigate("/register")}
                      className="cursor-pointer"
                    >
                      <p className="text-neutral-900 p-2 px-6 bg-slate-100 rounded-full backdrop-filter backdrop-blur-lg bg-opacity-20 hover:bg-opacity-50 focus:bg-opacity-100 font-semibold">
                        Register
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="hidden md:flex md:flex-row gap-4">
                    <div
                      onClick={() => navigate("/miperfil")}
                      className="cursor-pointer"
                    >
                      <p className="text-neutral-900 p-2 px-6 bg-slate-100 rounded-full backdrop-filter backdrop-blur-lg bg-opacity-20 hover:bg-opacity-50 focus:bg-opacity-100 font-semibold">
                        Mi Perfil
                      </p>
                    </div>
                    <div onClick={() => logout()} className="cursor-pointer">
                      <p className="text-neutral-900 p-2 px-6 bg-slate-100 rounded-full backdrop-filter backdrop-blur-lg bg-opacity-20 hover:bg-opacity-50 focus:bg-opacity-100 font-semibold">
                        Logout
                      </p>
                    </div>
                  </div>
                )}{" "}
              </div>
              {location.pathname.includes("/busqueda") ||
              (location.pathname.includes("/actividades/Actividades") &&
                !buscadorNavMobile) ? (
                <div className="md:hidden flex justify-center items-center">
                  <FiltersButton openPopUpFilters={openPopUpFilters} />
                </div>
              ) : (
                <div className="flex items-center md:hidden lg:hidden xl:hidden">
                  <HanburgerButton toggleMenu={toggleMenu} />
                </div>
              )}
            </nav>
          </div>
        </motion.header>
      </AnimatePresence>

      {buscadorNavMobile === true ? (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-10 z-30 fondoOpacity"
          onClick={() => openOnPopUpBuscadorMobile()}
        ></div>
      ) : null}

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
