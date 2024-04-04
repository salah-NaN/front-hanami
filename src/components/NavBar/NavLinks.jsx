export const NavLinks = ({ toggleMenu }) => {
  return (
    <div className="flex justify-between">
      <ul className="sm:flex">
        <li>Hola</li>
        <li>Hola</li>
        <li>Hola</li>
        <li>Hola</li>
        <li>Hola</li>
      </ul>
      <div className="">
        <button onClick={() => toggleMenu(false)}>Cerrar</button>
      </div>
    </div>
  );
};

export default NavLinks;
