import logo from "../assets/logos/descarga.svg"; // Asegúrate de que la ruta sea correcta.

const Navbar = () => {
  return (
    <div className="bg-purple-800 text-white p-4 flex justify-between items-center">
      <div>
        <p>
          <img src={logo} alt="Logo" />
        </p>
      </div>
      <div className="flex flex-end justify-end items-center">
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:text-purple-300">
              Home
            </a>
          </li>
          <li>
            <a href="" className="hover:text-purple-300">
              Proyects
            </a>
          </li>
          <li>
            <a href="/Resume" className="hover:text-purple-300">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
