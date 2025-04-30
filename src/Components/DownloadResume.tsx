import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/logos/Download/download.json";

const DownloadResume = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleClick = () => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 2000); // Reinicia la animación después de 2 segundos
  };

  return (
    <div className="flex justify-end items-center">
      <a
        href="/Resume-SebastianB.docx.pdf" // Ruta relativa al archivo en la carpeta public
        download
        className="text-gray-500 hover:text-gray-700 text-sm flex items-center group"
        onClick={handleClick}
      >
        <div className="w-8 h-8 mr-2" onClick={handleClick}>
          <Lottie options={{ ...defaultOptions, autoplay: isPlaying }} />
        </div>
        <span className="hidden sm:inline" onClick={handleClick}>
          Download Resume
        </span>
      </a>
    </div>
  );
};

export default DownloadResume;
