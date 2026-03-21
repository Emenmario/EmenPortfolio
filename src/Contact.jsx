import React from 'react'
import Footer from './Footer'

const Contact = () => {
  return (
    <section id='contact' className='relative flex justify-center items-center min-h-screen w-full px-4 md:px-16 py-16 md:py-24 text-white flex-col'>
      <div className='max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16'>

        <div className="flex flex-col justify-center">
          <span className="text-[#4677b3] font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-2 block">
            Available for Projects
          </span>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 md:mb-8">
            Get in <span className="text-[#4677b3]">touch.</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed mb-6 md:mb-10">
            Have a project in mind or just want to chat about design and development? Drop me a message.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 md:gap-4 group cursor-pointer">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#4677b3] transition-colors">
                <span className="text-sm">📧</span>
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors text-sm md:text-base">
                emenmario97@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-3 md:gap-4 group cursor-pointer">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#4677b3] transition-colors">
                <span className="text-sm">📍</span>
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors text-sm md:text-base">
                Addis Ababa, Ethiopia
              </span>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <div className="absolute -inset-3 md:-inset-4 bg-[#4677b3]/5 blur-3xl rounded-full opacity-50"></div>
          
          <form className="relative bg-white/[0.02] border border-white/5 p-6 md:p-10 rounded-3xl backdrop-blur-sm space-y-5 md:space-y-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 ml-1">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="bg-white/5 border border-white/10 rounded-xl px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:border-[#4677b3] transition-all"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-white/5 border border-white/10 rounded-xl px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:border-[#4677b3] transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 ml-1">Subject</label>
              <input 
                type="text" 
                placeholder="Project Inquiry" 
                className="bg-white/5 border border-white/10 rounded-xl px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:border-[#4677b3] transition-all"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 ml-1">Message</label>
              <textarea 
                rows="5" 
                placeholder="Tell me about your project..." 
                className="bg-white/5 border border-white/10 rounded-xl px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:border-[#4677b3] transition-all resize-none"
              ></textarea>
            </div>

            <button className="w-full py-3 md:py-4 bg-[#4677b3] hover:bg-[#3a6396] text-white font-bold rounded-xl tracking-widest uppercase text-xs md:text-sm transition-all transform hover:-translate-y-1 shadow-lg shadow-[#4677b3]/20">
              Send Message
            </button>
          </form>

        </div>

      </div>
      <div className='absolute bottom-0 w-full'><Footer/></div>
    </section>
  )
}

export default Contact