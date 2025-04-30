const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 p-6 text-center">
      <p className="text-sm">© 2025 Sebastian Bolaños. All rights reserved.</p>
      <div className="mt-4 space-x-4">
        <a
          href="mailto:sbc-2002@hotmail.com"
          className="hover:text-white transition-colors duration-300"
        >
          Email
        </a>
        <a
          href="www.linkedin.com/in/sbolanosc22"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
        >
          LinkedIn
        </a>
        <a
          href="https://wa.me/3105932091"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
        >
          WhatsApp
        </a>
      </div>
    </footer>
  );
};

export default Footer;
