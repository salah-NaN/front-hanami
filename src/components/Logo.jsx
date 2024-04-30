import { useNavigate, useLocation } from "react-router-dom";

export const Logo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src="/api/img/menta.png"
          alt="logo"
          className="w-10"
        />
        <h1
          className={`px-2 ${
            location.pathname !== "/" ? `text-black` : `text-white`
          } text-[20px] font-bold`}
        >
          Hanami
        </h1>
      </div>
    </div>
  );
};

export default Logo;
