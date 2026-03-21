import React from 'react';
import mee from './assets/mee.jpg';

const Home = () => {
  return (
    <section
      id='home'
      className="w-full min-h-screen text-white flex flex-col md:flex-row items-center px-6 md:px-16 gap-10"
    >
      <div className="flex flex-col justify-center text-center md:text-left md:flex-1">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          Emen Mario
        </h1>

        <h2 className="mt-4 inline-block text-xs sm:text-sm md:text-base px-4 py-1 rounded-full border border-blue-400/30 text-blue-400 bg-blue-900/20 w-fit mx-auto md:mx-0">
          Full-Stack Developer
        </h2>

        <p className="mt-6 text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0 text-sm sm:text-base">
          I build clean, scalable, and user-focused web applications.
          Passionate about creating smooth user experiences with modern
          technologies and minimal design principles.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition duration-300 text-sm text-center"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-2 border border-white/30 rounded-lg hover:bg-white hover:text-black transition duration-300 text-sm text-center"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center md:flex-1">
        <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-2xl bg-black border border-white/10 shadow-xl shadow-blue-900/20 flex items-center justify-center">
          <img
            className="rounded-2xl w-full h-full object-cover"
            src={mee}
            alt="Emen Mario"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;