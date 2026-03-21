import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-mono">
          &copy; {new Date().getFullYear()} Emen Mario. All rights reserved.
        </p>

        <div className="flex gap-8">
          <a 
            href="https://github.com/Emenmario" 
            target="_blank" 
            rel="noreferrer" 
            className="text-[10px] uppercase font-extrabold tracking-[0.2em] text-gray-500 hover:text-[#4677b3] transition-colors font-mono"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/emen-mario-4759bb30a/" 
            target="_blank" 
            rel="noreferrer" 
            className="text-[10px] uppercase font-extrabold tracking-[0.2em] text-gray-500 hover:text-[#4677b3] transition-colors font-mono"
          >
            LinkedIn
          </a>
          <a 
            href="https://t.me/U_identified" 
            target="_blank" 
            rel="noreferrer" 
            className="text-[10px] uppercase font-extrabold tracking-[0.2em] text-gray-500 hover:text-[#4677b3] transition-colors font-mono"
          >
            Telegram
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer