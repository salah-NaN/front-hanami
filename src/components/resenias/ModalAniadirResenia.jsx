import {Rating} from "@mui/material";
import {useEffect, useState} from "react";
import arrow from "../../assets/nav-arrow-left.svg";

// constantes
const URL = "/api";

const AniadirResenia = ({
  actividad,
  setActividad,
  modalVisible,
  setModalVisible,
  id,
}) => {
  const [inputsResenia, setInputsResenia] = useState({
    puntuacion: -1,
    resenia: "",
  });

  // funciones
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("inputsResenia");
    console.log(inputsResenia);

    // fetch para subir reseña
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(inputsResenia),
    };
    fetch(URL + "/crearResenia/" + id, options)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    setActividad({
      ...actividad,
      resenias: [...actividad.resenias, inputsResenia],
    });
  };

  const handleAddResenia = () => {
    setModalVisible(false);
    setInputsResenia(inputsResenia);
  };

  return (
    <div
      className={`select-none ${
        modalVisible ? "fixed" : "hidden"
      } z-50 top-0 left-0  overflow-y-auto overflow-x-hidden w-full h-dvh  bg-black bg-opacity-50
        backdrop-blur-sm `}
    >
      <div
        className={` ${
          modalVisible ? "absolute" : "hidden"
        } top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-10/12 my-2 bg-[#fafafa] px-5 py-4 rounded-lg 
  
                sm:w-2/4 sm:mx-auto
                lg:w-1/3 lg:mx-auto
                xl:w-1/4 xl:mx-auto`}
      >
        <img
          src={arrow}
          className="size-7 absolute top-[17px] left-3 cursor-pointer hover:bg-[#d9d9d9] hover:rounded-full transition-all duration-300"
          onClick={() => setModalVisible(false)}
        ></img>

        <form onSubmit={handleSubmit} className=" size-full  flex flex-col">
          <h3 className="text-2xl text-center font-semibold mb-5">
            Escribe una reseña
          </h3>
          <div className="w-full flex justify-center items-center mb-3 ">
            <Rating
              name="simple-controlled"
              value={inputsResenia.puntuacion}
              onChange={(event, newValue) => {
                setInputsResenia({...inputsResenia, puntuacion: newValue});
              }}
            ></Rating>
          </div>

          <textarea
            className=" px-2 py-1 mt-3 h-40 bg-[#fafafa] border-2 border-[#121212]/50 hover:border-[#121212] rounded-lg transition-all duration-300"
            name="resenia"
            value={inputsResenia.resenia}
            onChange={(event) => {
              setInputsResenia({...inputsResenia, resenia: event.target.value});
            }}
          ></textarea>

          <button
            onClick={handleAddResenia}
            className=" mt-5 self-end w-1/3 px-2 py-1.5 rounded-lg bg-[#53cd68] border-[#53cd68] border-2 shadow-md transition-all duration-300 hover:bg-[#4bb75d] hover:border-[#4bb75d] hover:text-[#d9d9d9]  text-[#fafafa]   "
          >
            Añadir
          </button>
        </form>
      </div>
    </div>
  );
};

export default AniadirResenia;
