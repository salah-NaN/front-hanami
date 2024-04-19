export const AccountButton = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-5">
        <div
          className="px-3 py-3 cursor-pointer hover:bg-slate-100 hover:px-3
           hover:border-none hover:rounded-full"
        >
          <svg
            width="24px"
            height="24px"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-white"
          >
            <path
              d="M7.90039 8.07954C7.90039 3.30678 15.4004 3.30682 15.4004 8.07955C15.4004 11.4886 11.9913 10.8067 11.9913 14.8976"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M12 19.01L12.01 18.9989"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <div className="">
          <button className="relative ">
            <div className="bg-white flex gap-3 border rounded-full px-3 py-3 box-button hover:transition-all 
            before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:rounded-full 
            before:bg-gray-700 before:transition-all before:content-[''] hover:top-1 hover:left-0 before:hover:top-0 before:hover:left-0">
              {/*style={{ boxShadow: `0px 6px 0px 0px white`, border: 'solid 2px white' , transition: `all 0.2s ease 0s`}} */}
              <svg
                width="24px"
                height="24px"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-gray-700"
              >
                <path
                  d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 12C14.2091 12 
        16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
      {/* Diseño de un icono */}
    </div>
  );
};

export default AccountButton;
