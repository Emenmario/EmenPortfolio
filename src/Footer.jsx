import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full py-1 px-4 md:px-6 border-t border-white/5 mt-auto backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 font-mono text-center md:text-left">
          &copy; {new Date().getFullYear()} Emen Mario. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
          <a
            href="https://github.com/Emenmario"
            target="_blank"
            rel="noreferrer"
            className="text-[10px] md:text-xs uppercase font-extrabold tracking-[0.2em] text-gray-500 hover:text-[#4677b3] transition-colors font-mono"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/emen-mario-4759bb30a/"
            target="_blank"
            rel="noreferrer"
            className="text-[10px] md:text-xs uppercase font-extrabold tracking-[0.2em] text-gray-500 hover:text-[#4677b3] transition-colors font-mono"
          >
            LinkedIn
          </a>
          <a
            href="https://t.me/U_identified"
            target="_blank"
            rel="noreferrer"
            className="text-[10px] md:text-xs uppercase font-extrabold tracking-[0.2em] text-gray-500 hover:text-[#4677b3] transition-colors font-mono"
          >
            Telegram
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer