import {useEffect, useState} from "react";
import arrow from "../../assets/nav-arrow-left.svg";
import Resenia from "./Resenia";

// constantes
const URL = "/api";

const ModalVerResenias = ({
  resenias,
  modalVerReseniasVisible: modalVisible,
  setModalVerReseniasVisible: setModalVisible,
}) => {
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
        } top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50
                w-full h-full my-2 py-6 px-6  `}
      >
        <div
          className=" relative overflow-y-scroll w-full bg-[#fafafa] h-dvh py-6 pt-10 px-6 rounded-lg
                sm:w-3/4 sm:mx-auto
                md:w-7/12 
                lg:w-6/12 
                xl:w-5/12
                2xl:w-4/12"
        >
          <img
            src={arrow}
            className="size-7 absolute top-4 left-4 cursor-pointer hover:bg-[#d9d9d9] hover:rounded-full transition-all duration-300"
            onClick={() => setModalVisible(false)}
          ></img>
          <h2
            className="text-[26px] mb-5  bg-gradient-to-r from-black via-black to-black bg-clip-text text-transparent font-semibold text-center underline underline-offset-1
                        sm:text-3xl"
          >
            {resenias?.length + " evaluaciones"}
          </h2>
          <div
            className="grid grid-cols-1 gap-5
                        sm:grid-cols-1 "
          >
            {resenias &&
              resenias.map((r, index) => <Resenia resenia={r} key={index} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalVerResenias;
