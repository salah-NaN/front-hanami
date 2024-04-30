import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import bcrypt from "bcryptjs";
import {jwtDecode} from "jwt-decode";
import {AnimatePresence, motion} from "framer-motion";

const URL = "http://localhost:3000/api/";

export const MiPerfil = () => {
  const [cliente, setCliente] = useState({});

  const token = Cookies.get("token");
  const decoded = jwtDecode(token);

  // funciones
  const handleInputs = (event) => {
    const {name, value} = event.target;
    setCliente({
      ...cliente,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // fetch para enviar datos
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cliente),
    };
    fetch(URL + `clientes/${decoded.cliente_id}`, options)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };
    fetch(URL + `clientes/${decoded.cliente_id}`, options)
      .then((res) => res.json())
      .then((res) => {
        console.log("info cliente", res);
        setCliente(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
      <div className="pt-20">
        <AnimatePresence>
                  <motion.div
            className="block"
            key="mobile-search"
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
      <div className=" w-11/12 lg:w-9/12 mx-auto border rounded-lg shadow-md shadow-neutral mt-12 p-4 ">
        <h1 className="text-xl font-semibold text-center">Mi Perfil</h1>
        <div className="flex flex-col  p-2 mt-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col   w-full mx-auto md:gap-8 md:px-8"
          >
            <div className="flex flex-col justify-between  md:flex-row gap-4 mt-4">
              <label className="flex items-center">Nombre</label>
              <input
                className="flex items-center shadow-md md:w-3/4  shadow-emerald-200 p-2 border border-emerald-300 rounded-lg focus:shadow-inner focus:shadow-emerald-300 focus:outline-none"
                type="text"
                name="nombre"
                value={cliente.nombre}
                onChange={handleInputs}
              ></input>
            </div>
            <div className="flex flex-col justify-between md:flex-row gap-4 mt-4">
              <label className="flex items-center">Email</label>
              <input
                className="shadow-md md:w-3/4 shadow-emerald-200 p-2 border border-emerald-300 rounded-lg focus:shadow-inner focus:shadow-emerald-300 focus:outline-none"
                type="email"
                name="email"
                value={cliente.email}
                onChange={handleInputs}
              ></input>
            </div>

            <div className="flex flex-col justify-between md:flex-row gap-4 mt-4">
              <label className="flex items-center">Password</label>
              <input
                className="shadow-md md:w-3/4 shadow-emerald-200 p-2 border border-emerald-300 rounded-lg focus:shadow-inner focus:shadow-emerald-300 focus:outline-none"
                type="password"
                name="password"
                value={cliente.password}
                onChange={handleInputs}
              ></input>
            </div>

            <button className="mt-8 mb-4 mx-auto w-full md:w-1/3 rounded-lg shadow-lg border border-emerald-300 shadow-emerald-200 p-2 focus:shadow-inner focus:shadow-emerald-300 focus:outline-none">Enviar</button>
          </form>
      </div>
    </div>
        </motion.div>
          </AnimatePresence>
        </div>
  );
};

export default MiPerfil;
