import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logos/descarga.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Altura del Navbar
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false); // Cierra el menú móvil después del clic
    }
  };

  return (
    <>
      {/* Espaciador para evitar que el Navbar tape el contenido */}
      <div className="h-20 md:h-16"></div>

      <div className="flex justify-between items-center px-5 md:px-10 py-5 bg-purple-800 bg-opacity-50 text-white fixed top-0 left-0 w-full z-50 shadow-md">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img className="h-8 w-auto" src={logo} alt="Logo" />
          <span className="text-lg font-semibold">Portfolio</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-light">
          <li className="cursor-pointer hover:text-purple-300 transition-colors">
            <a href="/">Home</a>
          </li>
          <li
            className="cursor-pointer hover:text-purple-300 transition-colors"
            onClick={() => handleScroll("projects-section")}
          >
            Projects
          </li>
          <li className="cursor-pointer hover:text-purple-300 transition-colors">
            <a href="/Resume">Resume</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 w-full bg-purple-700 text-white flex flex-col items-center gap-5 py-5 shadow-lg md:hidden"
          >
            <li
              className="cursor-pointer hover:text-purple-300 transition-colors"
              onClick={() => handleScroll("home-section")}
            >
              Home
            </li>
            <li
              className="cursor-pointer hover:text-purple-300 transition-colors"
              onClick={() => handleScroll("projects-section")}
            >
              Projects
            </li>
            <li
              className="cursor-pointer hover:text-purple-300 transition-colors"
              onClick={() => handleScroll("resume-section")}
            >
              Resume
            </li>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Navbar;
