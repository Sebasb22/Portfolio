const Footer = () => {
  return (
    <div className="bg-purple-800 text-green-400 p-6 text-center">
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
        SAY HELLO!
      </h2>
      <div className="mb-4">
        <p>
          Email:{" "}
          <a href="mailto:tuemail@example.com" className="text-blue-600">
            tuemail@example.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/tuperfil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            linkedin.com/in/tuperfil
          </a>
        </p>
        <p>
          WhatsApp:{" "}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            +123 456 7890
          </a>
        </p>
      </div>
      <ul className="flex justify-center space-x-6">
        <li>
          <a
            href="#home"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#resume"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
