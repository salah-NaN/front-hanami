import { useNavigate } from "react-router-dom";


export const Logo = () => {
  const navigate = useNavigate();

  return (

    <div className="">
      <div className="flex items-center cursor-pointer"onClick={()=>navigate("/")}>

        <img src="http://localhost:3000/img/menta.png" alt="logo" className="w-10" />
        <h1 className="px-2">Hanami</h1>
      </div>
    </div>
  );
};

export default Logo;
