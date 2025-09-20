import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
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
      <div className="flex justify-between items-center px-5 md:px-10 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            className="h-10 w-auto rounded-full shadow-md"
            src={logo}
            alt="Logo"
          />
          <span className="text-xl font-bold tracking-wide">Portfolio</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer hover:text-gray-200 transition-colors"
          >
            <a href="/">Home</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer hover:text-gray-200 transition-colors"
            onClick={() => handleScroll("projects-section")}
          >
            <a href="/Projects">Projects</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer hover:text-gray-200 transition-colors"
          >
            <a href="/Resume">Resume</a>
          </motion.li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white flex flex-col items-center gap-5 py-5 shadow-lg md:hidden"
          >
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer hover:text-gray-200 transition-colors"
            >
              <a href="/">Home</a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer hover:text-gray-200 transition-colors"
              onClick={() => handleScroll("projects-section")}
            >
              Projects
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer hover:text-gray-200 transition-colors"
            >
              <a href="/Resume">Resume</a>
            </motion.li>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Navbar;
