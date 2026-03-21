import React from 'react'

const About = () => {
  return (
    <section id='about' className="w-full min-h-screen px-6 md:px-16 py-24 flex flex-col justify-center text-white">
      <div className="max-w-6xl w-full mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <span className="text-[#4677b3] font-mono text-xs uppercase tracking-[0.3em] mb-3 block">
            The Story
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">
            About Me
          </h1>
          <div className="h-[2px] w-24 bg-[#4677b3] mt-6"></div>
        </div>

        {/* Full-width Content */}
        <div className="w-full max-w-4xl">
          <div className="space-y-6">
            
            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light space-y-4">
              <span className="block">
                Hey! I’m glad you’re here — hope you like it so far.
              </span>

              <span className="block">
                My name is Emen Mario, and I’m a{" "}
                <span className="text-white font-medium">Full-Stack Developer</span>.
                Before getting into development, I spent a lot of time immersed in the world of{" "}
                <span className="text-white font-medium">Graphic Design</span> — and honestly, that background shaped how I build things today.
              </span>

              <span className="block">
                I like to think it gives me an edge: not just writing code, but creating experiences that actually feel good to use.
              </span>

              <span className="block">
                If you’re curious to learn more about me or check out some of my designs, feel free to click the button below.
              </span>
            </p>

            {/* Button */}
            <div className="pt-6">
              <a
                href="/about"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/[0.03] border border-white/10 rounded-full hover:border-[#4677b3]/50 transition-all duration-300 text-sm tracking-widest uppercase font-mono overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-[#4677b3] transition-colors">
                  More about me
                </span>
                <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                  →
                </span>
                <div className="absolute inset-0 bg-[#4677b3]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  )
}

export default About