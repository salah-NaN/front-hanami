export const AccountButton = () => {
  return (
    <div className="flex justify-between">
      {/* Diseño de dos botones */}
      <div className="flex gap-10">
        <button
          className="w-fit px-2 
          hover:w-fit hover:bg-green-200 hover:border-none hover:rounded-md hover:px-2"
        >
          <svg
            width="24px"
            height="24px"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M7.90039 8.07954C7.90039 3.30678 15.4004 3.30682 15.4004 8.07955C15.4004 11.4886 11.9913 10.8067 11.9913 14.8976"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 19.01L12.01 18.9989"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <button className="border-none rounded-md bg-[#4CA55A] px-4 py-1 text-white hover:bg-green-500">
          Hazte una cuenta
        </button>
        <button className="border-none rounded-md bg-[#4CA55A] px-4 py-1 text-white hover:bg-green-500">
          Inicia sessión
        </button>
      </div>

      {/* Diseño de un icono */}
      <div className="">
        <button>
          <svg
            width="24px"
            height="24px"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 12C14.2091 12 
        16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AccountButton;
