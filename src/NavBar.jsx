import React from 'react'

const NavBar = () => {
  return (
  
    <div className='fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/20 backdrop-blur-md'>
      <nav className='max-w-7xl mx-auto flex justify-between items-center p-6 md:px-16'>
        
        <h1 className='text-xl font-bold tracking-tighter text-white'>
          Emen <span className='text-[#4677b3]'>Mario</span>
        </h1>

        <ul className='hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] font-mono text-gray-400'>
          <a href='#home' className='hover:text-[#4677b3] cursor-pointer transition-colors'>Home</a>
          <a href='#about' className='hover:text-[#4677b3] cursor-pointer transition-colors'>About</a>
          <a href='#projects' className='hover:text-[#4677b3] cursor-pointer transition-colors'>Projects</a>
          <a href='#technologies' className='hover:text-[#4677b3] cursor-pointer transition-colors'>Technologies</a>
          <a href='#education' className='hover:text-[#4677b3] cursor-pointer transition-colors'>Education</a>
          <a href='#contact' className='hover:text-[#4677b3] cursor-pointer transition-colors'>Contact</a>
        </ul>

        <div className='md:hidden text-[#4677b3]'>
          ☰
        </div>
      </nav>
    </div>
  )
}

export default NavBar