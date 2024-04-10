import { useRef, useState, useEffect } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // useEffects
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <div className="select-none" ref={dropdownRef}>
      <button className="relative" onClick={() => setIsOpen(!isOpen)}>
        <img className="size-4" src="/menta.png"></img>

        <ul
          className={` absolute top-5 -right-2 w-38 ${
            isOpen ? "visible" : "hidden"
          } bg-[#ffffff] shadow-lg  text-gray-900`}
        >
          <li className="px-14 py-2 w-full hover:bg-[rgb(207,207,207)] transition duration-200">
            Settings
          </li>
          <li
            className={` px-10 py-2 w-full hover:bg-[#cfcfcf] text-red-600 transition duration-200`}
          >
            Sign out
          </li>
        </ul>
      </button>
    </div>
  );
}
