import React, { useEffect, useState } from 'react';

const ProjDetails = ({ title, description, technologies, image, code, link, onclose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onclose, 200); 
  };

  return (
    <>
      <div
        onClick={handleClose}
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'}`}
      ></div>

      <div
        className={`fixed z-[100] top-1/2 left-1/2 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] max-h-[90vh] overflow-y-auto
        bg-black text-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl border border-white/10
        transform -translate-x-1/2 -translate-y-1/2
        transition-all duration-200
        ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-lg"
        >
          ✕
        </button>
        <img
          src={image}
          alt={title}
          className="w-full h-48 sm:h-64 object-cover rounded-xl"
        />
        <h2 className="text-xl sm:text-2xl font-semibold mt-4 sm:mt-6 tracking-wide">{title}</h2>
        <p className="mt-3 sm:mt-4 text-gray-300 leading-relaxed text-sm sm:text-base">{description}</p>
        <p className="mt-2 sm:mt-4 text-xs sm:text-sm text-gray-400">{technologies}</p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 sm:mt-6">
          <a
            href={code}
            target="_blank"
            className="px-4 sm:px-5 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition text-xs sm:text-sm text-center"
          >
            View Code
          </a>
          <a
            href={link}
            target="_blank"
            className="px-4 sm:px-5 py-2 border border-white/20 rounded-lg hover:bg-white hover:text-black transition text-xs sm:text-sm text-center"
          >
            Live Demo
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjDetails;