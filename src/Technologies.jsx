import React from 'react';
import { techStack } from './techstack';

const Technologies = () => {
  return (
    <section  id="technologies" className="w-full min-h-screen px-6 md:px-16 py-24 text-white flex flex-col items-center">
      <div className="max-w-6xl w-full">
        
        <div className="mb-16">
          <span className="text-[#4677b3] font-mono text-xs uppercase tracking-[0.3em] mb-3 block">
            Expertise
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">
            Technologies
          </h1>
          <div className="h-[2px] w-24 bg-[#4677b3] mt-6"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 w-full">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center h-48 bg-white/[0.03] rounded-3xl border border-white/5 transition-all duration-500 hover:border-[#4677b3]/40 hover:bg-[#4677b3]/5"
            >
              <div className="absolute inset-0 bg-[#4677b3] opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500 rounded-3xl"></div>

              <div className="relative z-10 flex flex-col items-center">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-12 h-12 object-contain mb-4 opacity-40 group-hover:opacity-100 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:scale-110"
                />
                
                <h3 className="text-gray-500 group-hover:text-white font-medium text-sm tracking-wide transition-all duration-300">
                  {tech.name}
                </h3>

                <div className="absolute bottom-[-20px] opacity-0 group-hover:opacity-100 group-hover:bottom-[-15px] transition-all duration-500">
                  <span className="text-[10px] mt-10 uppercase tracking-widest text-[#4677b3] whitespace-nowrap">
                    {tech.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;