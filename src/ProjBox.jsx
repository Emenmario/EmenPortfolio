import React from 'react'
import ProjDetails from './ProjDetails';

const ProjBox = ({ title, description, technologies, image, link, code }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="text-white w-full max-w-md mx-auto mb-8"
    >
      <div className="border border-white/10 rounded-2xl overflow-hidden relative transition duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-900/20">
        <img
          src={image}
          alt={title}
          className="w-full h-56 sm:h-64 object-cover"
        />
        <div className={`absolute inset-0 bg-black/70 flex items-end p-4 sm:p-5 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
          <p className="text-xs sm:text-sm text-gray-300">{technologies}</p>
        </div>
      </div>
      <h2 className="mt-3 sm:mt-5 text-center text-xl sm:text-2xl font-semibold tracking-wide">
        {title}
      </h2>
      <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-3 sm:mt-4">
        <button
          onClick={() => setShowDetails(true)}
          className="px-4 sm:px-5 py-2 border border-white/20 rounded-lg hover:bg-white hover:text-black transition duration-300 text-xs sm:text-sm"
        >
          Details
        </button>
        <a
          href={link}
          target="_blank"
          className="px-4 sm:px-5 py-2 bg-white/10 rounded-lg hover:bg-white hover:text-black transition duration-300 text-xs sm:text-sm text-center"
        >
          Demo
        </a>
      </div>
      {showDetails && (
        <ProjDetails
          title={title}
          description={description}
          technologies={technologies}
          image={image}
          link={link}
          code={code}
          onclose={() => setShowDetails(false)}
        />
      )}
    </div>
  );
};

export default ProjBox;