import { Mail, Phone, Linkedin, Github, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="kontak" className="py-24 px-6 mb-12">
      <div className="container mx-auto max-w-7xl">
        <div className="bento-card !bg-dark text-white p-12 md:p-24 text-center relative overflow-hidden !rounded-[3rem] border-none shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/30 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-indigo-600/30 rounded-full blur-[120px] -ml-40 -mb-40 pointer-events-none"></div>

          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 relative z-10 tracking-tight">Mari Berkolaborasi!</h2>
          <p className="text-slate-300 text-xl md:text-2xl mb-14 max-w-3xl mx-auto relative z-10 font-medium leading-relaxed">
            Punya ide brilian atau sekadar ingin berbincang soal teknologi? <br className="hidden md:block" /> Saya siap mendengar dan membantu mewujudkannya.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <a 
              href="mailto:marselinusbayu145@gmail.com" 
              className="flex items-center gap-3 bg-white/10 hover:bg-white text-white hover:text-dark px-8 py-5 rounded-full transition-all duration-300 border border-white/20 font-bold backdrop-blur-sm text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1"
            >
              <Mail size={24} />
              marselinusbayu145@gmail.com
            </a>
            
            <a 
              href="https://wa.me/6283179124796" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/10 hover:bg-white text-white hover:text-dark px-8 py-5 rounded-full transition-all duration-300 border border-white/20 font-bold backdrop-blur-sm text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1"
            >
              <Phone size={24} />
              +62 831-7912-4796
            </a>
            
            {/* Socials */}
            <div className="flex gap-6 w-full justify-center mt-4 sm:w-auto sm:mt-0">
              <a 
                href="https://linkedin.com/in/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 flex items-center justify-center bg-white/10 hover:bg-primary text-white rounded-full transition-all duration-300 border border-white/20 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:-translate-y-1"
              >
                <Linkedin size={26} />
              </a>
              <a 
                href="https://github.com/mrsInusbayy" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 flex items-center justify-center bg-white/10 hover:bg-slate-800 text-white rounded-full transition-all duration-300 border border-white/20 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-1"
              >
                <Github size={26} />
              </a>
              <a 
                href="https://instagram.com/mrslnusbayy" 
                target="_blank"
                rel="noopener noreferrer"
                title="@mrslnusbayy"
                className="w-16 h-16 flex items-center justify-center bg-white/10 hover:bg-pink-600 text-white rounded-full transition-all duration-300 border border-white/20 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(219,39,119,0.5)] hover:-translate-y-1"
              >
                <Instagram size={26} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
