import { ArrowRight, Mail, Code2, Paintbrush, PenTool } from 'lucide-react';
import profileImg from '../assets/Profile_Daru.png';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(12px)", scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)", 
      scale: 1, 
      transition: { type: "spring", stiffness: 80, damping: 14 } 
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatingVariantsDelay = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      },
    },
  };

  return (
    <section id="beranda" className="pt-32 md:pt-40 pb-20 min-h-screen flex flex-col justify-center relative overflow-hidden bg-transparent">
      
      {/* Decorative Plus Symbols scattered in background */}
      <div className="absolute top-1/4 left-1/2 text-slate-300 pointer-events-none -translate-x-32 -translate-y-20 opacity-50">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
      </div>
      <div className="absolute bottom-1/4 right-1/4 text-indigo-300 pointer-events-none opacity-40 scale-75">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mt-10 lg:mt-0">
          
          {/* Text Column */}
          <motion.div 
            className="flex flex-col items-start text-left z-10 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={itemVariants} className="text-indigo-700 font-semibold tracking-widest uppercase text-sm mb-4">
              Portfolio
            </motion.span>
            
            <motion.h1 variants={itemVariants} className="text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-extrabold text-slate-900 leading-[1.05] mb-4 tracking-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-indigo-700">Daru.</span>
            </motion.h1>
            
            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-medium text-slate-500 mb-8 tracking-tight">
              Web & App Developer | UI/UX Designer
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-slate-600 text-lg md:text-xl mb-12 leading-relaxed max-w-lg">
              Membantu bisnis mewujudkan ide menjadi website kustom, aplikasi mobile, serta materi desain grafis & visual kreatif yang andal dan menarik.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <MagneticButton 
                href="#kontak" 
                className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-medium shadow-lg shadow-slate-900/20 hover:bg-slate-800"
              >
                <Mail size={18} /> Hubungi Saya
              </MagneticButton>
              <MagneticButton 
                href="#proyek" 
                className="flex items-center justify-center gap-2 bg-transparent text-slate-700 border-2 border-slate-300 px-8 py-4 rounded-full font-medium hover:bg-slate-50 group"
              >
                Lihat Karya <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <div className="flex justify-center lg:justify-end relative order-1 lg:order-2 w-full mt-12 lg:mt-0">
            <div className="relative w-full max-w-md lg:max-w-xl aspect-[4/5] flex items-center justify-center">
              
              {/* Mature Organic Blob Container with Image inside */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative w-full h-full !bg-gradient-to-br !from-slate-900 !via-slate-800 !to-slate-900 flex items-end justify-center overflow-hidden z-0"
                style={{
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                }}
              >
                {/* Inner Glow matching the education card exactly */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none z-0"></div>

                {/* Image */}
                <motion.img 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  src={profileImg} 
                  alt="Daru" 
                  className="w-full h-[110%] object-cover object-bottom relative z-10 scale-105 origin-bottom"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop';
                  }}
                />
              </motion.div>
              
              {/* Floating Badge 1 - Top Right */}
              <motion.div 
                variants={floatingVariants}
                animate="animate"
                className="absolute top-16 right-0 md:-right-4 bg-white text-slate-800 px-5 py-3 rounded-2xl shadow-sm z-20 flex items-center gap-3 border border-slate-100 hidden md:flex"
              >
                <Code2 size={20} className="text-slate-600" />
                <span className="font-semibold text-sm">Full-Stack Developer</span>
              </motion.div>

              {/* Floating Badge 2 - Bottom Left */}
              <motion.div 
                variants={floatingVariantsDelay}
                animate="animate"
                className="absolute bottom-32 left-0 md:-left-8 bg-white text-slate-800 px-5 py-3 rounded-2xl shadow-sm z-20 flex items-center gap-3 border border-slate-100 hidden md:flex"
              >
                <Paintbrush size={20} className="text-slate-600" />
                <span className="font-semibold text-sm">UI/UX Designer</span>
              </motion.div>

              {/* Floating Badge 3 - Bottom Right */}
              <motion.div 
                variants={floatingVariants}
                animate="animate"
                className="absolute bottom-16 right-4 md:-right-4 bg-white text-slate-800 px-5 py-3 rounded-2xl shadow-sm z-20 flex items-center gap-3 border border-slate-100"
              >
                <PenTool size={20} className="text-slate-600" />
                <span className="font-semibold text-sm">Graphic Designer</span>
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
