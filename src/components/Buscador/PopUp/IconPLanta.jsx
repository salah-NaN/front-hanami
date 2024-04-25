import { useEffect, useState } from "react";

export const IconPLanta = ({ planta }) => {

  const [flor, setFlor] = useState('');
  useEffect(() => {
    if(flor === 'Cerezo'){
      setFlor('cerezos');
    }

    if(flor === 'Lavanda'){
      setFlor('LavandaMaxFloracion');
    }
    
    if(flor === 'Olivos'){
      setFlor('olivos');
    }

    if(flor === 'Viña'){
      setFlor('ViñaUvaGrande');
    }
  }, [planta])
  return (
    <>
      {planta !== null ? (
        <img src={`http://localhost:3000/img/${flor}.png`} alt="" />
      ) : (
        <svg
          viewBox="0 0 24 24"
          strokeWidth="1.2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#000000"
          className="w-10"
        >
          <path
            d="M7 21C7 21 7.5 16.5 11 12.5"
            stroke="#000000"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M19.1297 4.24224L19.7243 10.4167C20.0984 14.3026 17.1849 17.7626 13.2989 18.1367C9.486 18.5039 6.03191 15.7168 5.66477 11.9039C5.29763 8.09099 8.09098 4.70237 11.9039 4.33523L18.475 3.70251C18.8048 3.67074 19.098 3.91239 19.1297 4.24224Z"
            stroke="#000000"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      )}
    </>
  );
};

export default IconPLanta;
