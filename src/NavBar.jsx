import React, { useState } from 'react'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/20 backdrop-blur-md'>
      <nav className='max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6'>
        <h1 className='text-xl font-bold tracking-tighter text-white'>
          Emen <span className='text-[#4677b3]'>Mario</span>
        </h1>

        <ul className='hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-mono text-gray-400'>
          <a href='#home' className='hover:text-[#4677b3] cursor-pointer transition-colors'>Home</a>
          <a href='#about' className='hover:text-[#4677b3] cursor-pointer transition-colors'>About</a>
          <a href='#projects' className='hover:text-[#4677b3] cursor-pointer transition-colors'>Projects</a>
          <a href='#technologies' className='hover:text-[#4677b3] cursor-pointer transition-colors'>Technologies</a>
          <a href='#education' className='hover:text-[#4677b3] cursor-pointer transition-colors'>Education</a>
          <a href='#contact' className='hover:text-[#4677b3] cursor-pointer transition-colors'>Contact</a>
        </ul>

        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-[#4677b3] text-2xl focus:outline-none'>
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className='md:hidden bg-black/90 backdrop-blur-md w-full absolute top-full left-0 z-40'>
          <ul className='flex flex-col gap-6 p-6 text-gray-400 uppercase tracking-[0.2em] font-mono text-sm'>
            <a href='#home' onClick={() => setIsOpen(false)} className='hover:text-[#4677b3] transition-colors'>Home</a>
            <a href='#about' onClick={() => setIsOpen(false)} className='hover:text-[#4677b3] transition-colors'>About</a>
            <a href='#projects' onClick={() => setIsOpen(false)} className='hover:text-[#4677b3] transition-colors'>Projects</a>
            <a href='#technologies' onClick={() => setIsOpen(false)} className='hover:text-[#4677b3] transition-colors'>Technologies</a>
            <a href='#education' onClick={() => setIsOpen(false)} className='hover:text-[#4677b3] transition-colors'>Education</a>
            <a href='#contact' onClick={() => setIsOpen(false)} className='hover:text-[#4677b3] transition-colors'>Contact</a>
          </ul>
        </div>
      )}
    </div>
  )
}

export default NavBar