import React from 'react'

const More = () => {
  return (
    <div className='w-full min-h-screen text-white pt-24 px-6 sm:px-10 md:px-20 font-sans selection:bg-[#06d6a0] selection:text-black'>
      <div className='max-w-4xl mx-auto border-l-2 border-[#4677b3] pl-4 sm:pl-6 mb-12 sm:mb-16'>
        <h1 className='text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter uppercase'>
          Hello <span className='text-[#06d6a0]'>Again.</span>
        </h1>
        <h2 className='text-lg sm:text-xl md:text-2xl font-light text-slate-400 mt-2 uppercase tracking-[0.2em]'>
          Deep dive into my journey
        </h2>
      </div>

      <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 pb-16 md:pb-20'>
        <div className='md:col-span-2 space-y-8 sm:space-y-12'>
          <section>
            <h3 className='text-[#4677b3] font-mono mb-4 sm:mb-6 text-sm uppercase tracking-widest'>// Identity</h3>
            <div className='flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6'>
              <span className='bg-[#4677b3]/10 border border-[#4677b3]/30 px-3 py-1 rounded-full text-[#4677b3] text-xs uppercase tracking-wider'>Ethiopian</span>
              <span className='bg-[#4677b3]/10 border border-[#4677b3]/30 px-3 py-1 rounded-full text-[#4677b3] text-xs uppercase tracking-wider'>19 Years Old</span>
            </div>
            <p className='text-base sm:text-lg leading-relaxed text-slate-300'>
              Currently navigating my 3rd year as an <span className='text-white font-medium'>Information Systems student</span> at Addis Ababa University. I blend technical architecture with aesthetic precision.
            </p>
          </section>

          <section>
            <h3 className='text-[#4677b3] font-mono mb-4 sm:mb-6 text-sm uppercase tracking-widest'>// Academic Foundation</h3>
            <div className='border-l border-slate-800 pl-4 sm:pl-6 space-y-4 sm:space-y-6'>
              <div>
                <h4 className='text-white font-medium'>Addis Ababa University</h4>
                <p className='text-slate-400 text-xs sm:text-sm italic underline decoration-[#4677b3] underline-offset-4'>BSc in Information Systems — Expected 2027</p>
              </div>
              <div>
                <h4 className='text-white font-medium'>Lideta Catholic Cathedral School</h4>
                <p className='text-slate-400 text-xs sm:text-sm'>Completed Natural Science Stream <small>(2019 - 2022)</small></p>
              </div>
            </div>
          </section>

          <section className='space-y-4'>
            <h3 className='text-[#4677b3] font-mono mb-4 sm:mb-6 text-sm uppercase tracking-widest'>// Professional Path</h3>
            <p className='text-slate-400 leading-relaxed text-sm sm:text-base'>
              As a self-taught full-stack developer, I focus on building clean, high-performance web applications using <span className='text-white'>React, Node.js, and Postgresql</span>.
            </p>
            <p className='text-slate-400 leading-relaxed text-sm sm:text-base'>
              Before the code, I spent two years as a <span className='text-[#06d6a0]'>graphic designer</span>. That background in branding is what drives the visual polish in every line of CSS I write. 
              <a target='_blank' href="https://drive.google.com/drive/folders/126EZn2daFqJOPkM0E-bkWjfY44e_LaWi?usp=sharing" className='text-[#4677b3] ml-1 hover:text-[#06d6a0] transition-colors border-b border-[#4677b3]/30'>View design archive →</a>
            </p>
          </section>
        </div>

        <div className='space-y-8 sm:space-y-12 border-t md:border-t-0 md:border-l border-slate-800 pt-8 md:pt-0 md:pl-8'>
          <section>
            <h3 className='text-[#4677b3] font-mono mb-4 sm:mb-6 text-sm uppercase tracking-widest'>// Foundation</h3>
            <div className='flex items-center space-x-2 sm:space-x-3'>
              <div className='h-2 w-2 rounded-full bg-[#06d6a0] animate-pulse'></div>
              <span className='text-slate-300 tracking-wide text-sm sm:text-base'>Christian</span>
            </div>
          </section>

          <section>
            <h3 className='text-[#4677b3] font-mono mb-4 sm:mb-6 text-sm uppercase tracking-widest'>// Offline</h3>
            <ul className='space-y-3 sm:space-y-4'>
              {['Books', 'Gym / Training', 'Basketball'].map((hobby) => (
                <li key={hobby} className='flex items-center group'>
                  <div className='h-[1px] w-4 sm:w-5 bg-[#06d6a0] mr-2 sm:mr-3 group-hover:w-8 transition-all duration-300'></div>
                  <span className='text-slate-300 group-hover:text-white transition-colors text-sm sm:text-base cursor-default'>{hobby}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className='pt-6 sm:pt-8'>
            <div className='text-[10px] sm:text-xs font-mono text-slate-600 uppercase tracking-[0.5em] leading-loose text-center md:text-left'>
              Addis Ababa, ET <br />
              9.0351° N, 38.7521° E
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default More