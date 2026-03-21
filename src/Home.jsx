import React from 'react';
import mee from './assets/mee.jpg';
const Home = () => {
  return (
    <section id='home' className="w-full min-h-screen text-white grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-16 gap-10">

      <div className="flex flex-col justify-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          Emen Mario
        </h1>

        <h2 className="mt-4 inline-block text-sm md:text-base px-4 py-1 rounded-full border border-blue-400/30 text-blue-400 bg-blue-900/20 w-fit">
          Full-Stack Developer
        </h2>

        <p className="mt-6 text-gray-300 leading-relaxed max-w-lg">
          I build clean, scalable, and user-focused web applications.
          Passionate about creating smooth user experiences with modern
          technologies and minimal design principles.
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="#projects"
            className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition duration-300 text-sm"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-2 border border-white/30 rounded-lg hover:bg-white hover:text-black transition duration-300 text-sm"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-2xl bg-black border border-white/10 shadow-xl shadow-blue-900/20 flex items-center justify-center">
          <img className='rounded-4xl' src={mee} />
        </div>
      </div>

    </section>
  );
};

export default Home;