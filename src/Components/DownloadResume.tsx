import React from "react";

const DownloadResume = () => {
  return (
    <div>
      <a
        href="/resume.pdf"
        download
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Descargar CV
      </a>
    </div>
  );
};

export default DownloadResume;
