import React from 'react'
import { certData } from './certData'
import { createPortal } from 'react-dom'

const Education = () => {

  const handleClose = () => setZoomed(null);

  return (
    <section id='education' className='min-h-screen w-full px-4 md:px-16 py-16 md:py-24 text-white flex flex-col items-center'>
      <div className='max-w-6xl w-full'>
        <div className="mb-12 md:mb-16">
          <span className="text-[#4677b3] font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-2 block">
            Academic & Professional
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Education
          </h1>
          <div className="h-[2px] w-20 md:w-24 bg-[#4677b3] mt-4 md:mt-6"></div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 w-full'>
          {certData.map((cert, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-[#4677b3]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-500 group-hover:border-[#4677b3]/50 group-hover:bg-white/[0.05]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-black/40 mb-4 cursor-pointer">
                  <img
                    src={cert.image} 
                    alt={`Certificate ${cert.id}`} 
                    className="w-full h-full object-cover opacity-80 transition-all duration-700 ease-in-out hover:scale-105 hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm md:text-base font-bold tracking-wide text-gray-300 group-hover:text-white transition-colors">
                    {cert.title || "Professional Certification"}
                  </h3>
                  <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-[#4677b3]">
                    {cert.issuer || "Verified Credential"}
                  </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-6 h-6 rounded-full border border-[#4677b3] flex items-center justify-center text-[#4677b3] text-[10px]">
                    ↗
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     
    </section>
  )
}

export default Education