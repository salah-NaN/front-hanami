import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";


// constantes
const URL = "http://localhost:3000/api";

export const Login = () => {
  const [inputs, setInputs] = useState({email: "", password: ""});
  const [ isCorrect, setCorrect] = useState(false)
  const navigate = useNavigate();

  // funciones
  const handleInputs = (event) => {
    const {name, value} = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // fetch para enviar datos
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
      credentials: "include",
    };
    fetch(URL + "/clientes/login", options)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if(res){
          navigate("/")
        }
        console.log("coso",res);
      })
      .catch((err) => {
        console.log(err);
      });
    // limpiar inputs
    setInputs({email: "", password: ""});
  };

  return (

        <div className=" p-4 md:p-0 md:flex md:flex-row md:justify-between w-full md:h-screen mx-auto rounded-lg mt-28 md:mt-0 md:pt-16">
<div className="flex flex-col  p-2 md:mt-16 md:w-1/2">
<AnimatePresence>
      <motion.div
        className="block"
        key="mobile-search"
        initial={{scale: 0}}
        animate={{rotate: 0, scale: 1}}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 70,
        }}
      >

        
          <div >
              <h1 className="md:text-5xl font-semibold text-3xl w-fit mx-auto bg-gradient-to-r from-emerald-400 from-800% via-[#929292] via-30% to-pink-500 to-20% bg-clip-text text-transparent">Inicia sesion</h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full mx-auto md:gap-8 md:px-8"
            >
              <div className="flex flex-col justify-between  md:flex-row gap-4 mt-4">
                <label className="flex items-center">Email</label>
                <input
              className="flex items-center shadow-sm md:w-3/4  shadow-neutral-300 p-2 border border-neutral-400 rounded-full focus:border-pink-500 focus:outline-none"
              type="email"
                  name="email"
                  value={inputs.email}
                  onChange={handleInputs}
                ></input>
              </div>
              <div className="flex flex-col justify-between  md:flex-row gap-4 mt-4">
                <label className="flex items-center">Password</label>
                <input
              className="flex items-center shadow-sm md:w-3/4  shadow-neutral-300 p-2 border border-neutral-400 rounded-full focus:border-pink-500 focus:outline-none"
              type="password"
                  name="password"
                  value={inputs.password}
                  onChange={handleInputs}
                ></input>

              </div>

              <button className="mt-8 mb-4 mx-auto w-full md:w-1/3 rounded-full shadow-sm border border-neutral-400 shadow-neutral-300 p-2 focus:shadow-inner focus:shadow-pink-500 focus:border-pink-500 focus:outline-none">Enviar</button>
            </form>
          </div>
          </motion.div>
    </AnimatePresence>
</div>
    

          <div
        className=" hidden md:inline
        md:w-1/2 md:bg-[url('/public/cerezoflor2.jpg')] bg-no-repeat bg-cover "
          ></div>

        </div>

  );
};

export default Login;


{/* 



    <AnimatePresence>
      <motion.div
        className="block"
        key="mobile-search"
        initial={{scale: 0}}
        animate={{rotate: 0, scale: 1}}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 70,
        }}
      >
      </motion.div>
    </AnimatePresence>


*/}