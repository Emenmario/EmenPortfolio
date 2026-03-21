import React, { useState } from 'react';
import { techStack } from './techstack';

const Technologies = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="technologies" className="w-full min-h-screen px-4 md:px-16 py-16 md:py-24 text-white flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <div className="mb-12 md:mb-16">
          <span className="text-[#4677b3] font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-2 block">
            Expertise
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Technologies
          </h1>
          <div className="h-[2px] w-20 md:w-24 bg-[#4677b3] mt-4 md:mt-6"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 w-full">
          {techStack.map((tech, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="relative flex flex-col items-center justify-center h-44 sm:h-48 bg-white/[0.03] rounded-3xl border border-white/5 transition-all duration-500 cursor-pointer"
            >
              <div
                className={`absolute inset-0 bg-[#4677b3] rounded-3xl transition-all duration-500 ${
                  activeIndex === index ? 'opacity-20 blur-2xl' : 'opacity-0'
                }`}
              ></div>

              <div className="relative z-10 flex flex-col items-center">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className={`w-10 h-10 sm:w-12 sm:h-12 object-contain mb-3 sm:mb-4 transition-all duration-500 transform ${
                    activeIndex === index ? '-translate-y-1 scale-110 opacity-100' : 'opacity-40'
                  }`}
                />
                <h3
                  className={`text-sm sm:text-base font-medium tracking-wide transition-all duration-300 ${
                    activeIndex === index ? 'text-white' : 'text-gray-500'
                  }`}
                >
                  {tech.name}
                </h3>
                {activeIndex === index && (
                  <div className="mt-2 absolute bottom-[-15px]">
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#4677b3] whitespace-nowrap">
                      {tech.category}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;