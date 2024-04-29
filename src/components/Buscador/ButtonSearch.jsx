import { useLocation } from "react-router-dom";

export const ButtonSearch = ({ stylesButton }) => {
  const location = useLocation();
  return (
    <div className="">
      <button
        className={`${location.pathname !== `/` ? `w-10` : `w-14`} h-fit rounded-full md:bg-[#53cd68] md:stroke-white ${
          stylesButton?.size !== undefined
            ? stylesButton?.size
            : `md:h-20 md:w-20 px-4`
        } h-14 flex justify-center items-center ${stylesButton?.svgColor} ${
          stylesButton?.hover
        }hover:bg-green-700 border-none rounded-full`}
        type="submit"
      >
        <svg
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            stylesButton?.svgSize !== undefined
              ? stylesButton?.svgSize
              : `md:w-8 w-6`
          }`}
        >
          <path
            d="M17 17L21 21"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M3 11C3 15.4183 6.58172 19 11 19C13.213 19 15.2161 18.1015 16.6644 16.6493C18.1077 15.2022 19 13.2053 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default ButtonSearch;
