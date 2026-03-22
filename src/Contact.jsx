import React from 'react'
import Footer from './Footer'
import { supabase } from './Supabase'

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false); 

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase
        .from('Contacts')
        .insert([{
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }]);

      if (error) throw error;

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error:', error.message);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

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
          
          {isSubmitted ? (
            <div className="relative bg-white/[0.02] border border-white/5 p-10 md:p-16 rounded-3xl backdrop-blur-sm flex flex-col items-center text-center animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-[#4677b3]/10 border border-[#4677b3]/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tighter">Message Received.</h2>
              <p className="text-gray-400 max-w-sm leading-relaxed text-sm md:text-base">
                Your transmission was successful. I'll review the details and contact you <span className='text-[#4677b3] font-mono'>ASAP</span>.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-[#4677b3] font-mono text-xs uppercase tracking-[0.2em] hover:text-white transition-colors"
              >
                [ Send Another ]
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative bg-white/[0.02] border border-white/5 p-6 md:p-10 rounded-3xl backdrop-blur-sm space-y-5 md:space-y-6 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 ml-1">Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe" 
                    className="bg-white/5 border border-white/10 rounded-xl px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:border-[#4677b3] transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 ml-1">Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-white/5 border border-white/10 rounded-xl px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:border-[#4677b3] transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry" 
                  className="bg-white/5 border border-white/10 rounded-xl px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:border-[#4677b3] transition-all"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 ml-1">Message</label>
                <textarea 
                  required
                  rows="5" 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..." 
                  className="bg-white/5 border border-white/10 rounded-xl px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:border-[#4677b3] transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-3 md:py-4 bg-[#4677b3] hover:bg-[#3a6396] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl tracking-widest uppercase text-xs md:text-sm transition-all transform hover:-translate-y-1 shadow-lg shadow-[#4677b3]/20 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}

        </div>

      </div>
      <div className='absolute bottom-0 w-full'><Footer/></div>
    </section>
  )
}

export default Contact