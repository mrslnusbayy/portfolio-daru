import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import DesignWork from './components/DesignWork';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [showButton, setShowButton] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className={`font-sans text-slate-900 min-h-screen relative bg-slate-50 overflow-hidden cursor-none ${isLoading ? 'h-screen' : ''}`}>
      {/* Global Tech Grid Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      {/* Global Ambient Glows for Depth */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none z-0"></div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <DesignWork />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-slate-900 text-white rounded-full shadow-[0_0_20px_rgba(15,23,42,0.3)] hover:bg-indigo-600 hover:-translate-y-2 transition-all duration-300 cursor-none"
            aria-label="Back to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
    </>
  );
}

export default App;
