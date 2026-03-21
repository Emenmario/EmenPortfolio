import React from 'react';
import ParticlesBackground from './ParticlesBackground'; 
import Home from './Home';
import About from './About';
import Projects from './Projects';
import More from './More';
import Technologies from './Technologies';
import { Routes, Route } from 'react-router-dom';
import Education from './Education';
import Contact from './Contact';
import NavBar from './NavBar';

function App() {
  return (
    <div className="flex justify-center bg-[#1c1c1c] min-h-screen px-4 md:px-0">
      <div className='fixed z-0 pointer-events-none w-full h-full'>
        <ParticlesBackground />
      </div>
      <div className='relative z-10 w-full max-w-6xl px-4 md:px-10'>
        <NavBar/>
        <Routes>
          <Route path="/" element={
            <div className='flex flex-col gap-12 md:gap-16'>
              <Home />
              <About />
              <Projects />
              <Technologies />
              <Education />
              <Contact />
            </div>
          } />
          <Route path="/about" element={<More />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;