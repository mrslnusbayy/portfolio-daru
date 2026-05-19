import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Beranda', href: '#beranda' },
  { name: 'Tentang', href: '#tentang' },
  { name: 'Pengalaman', href: '#pengalaman' },
  { 
    name: 'Karya', 
    href: '#proyek', 
    dropdown: [
      { name: 'IT & Software', href: '#proyek' },
      { name: 'Desain & Kreatif', href: '#design' }
    ] 
  },
  { name: 'Kontak', href: '#kontak' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('Beranda');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      
      // Default tracking for direct mapped sections
      for (const link of navLinks) {
        const id = link.href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const offsetTop = top + window.scrollY;
          const offsetBottom = bottom + window.scrollY;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActive(link.name);
          }
        }
      }

      // Special tracking: also highlight 'Karya' when viewing the '#design' section
      const designElement = document.getElementById('design');
      if (designElement) {
        const { top, bottom } = designElement.getBoundingClientRect();
        const offsetTop = top + window.scrollY;
        const offsetBottom = bottom + window.scrollY;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActive('Karya');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed w-full top-6 z-50 flex justify-center px-4">
      <nav className="glass-nav rounded-full px-6 py-3 flex items-center justify-between w-full max-w-4xl transition-all duration-300">
        <a href="#beranda" className="text-2xl font-extrabold text-slate-900 tracking-tight">Daru.</a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2 ml-8">
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div 
                  key={link.name} 
                  className="relative group py-2"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button
                    className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-1.5 ${
                      active === link.name 
                        ? 'bg-slate-900 text-white' 
                        : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-48 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-100 p-2 z-50 flex flex-col gap-1"
                      >
                        {link.dropdown.map((subLink) => (
                          <a
                            key={subLink.name}
                            href={subLink.href}
                            onClick={() => {
                              setActive('Karya');
                              setIsDropdownOpen(false);
                            }}
                            className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors text-left"
                          >
                            {subLink.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }
            return (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setActive(link.name)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${active === link.name ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'}`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 hover:text-primary transition-colors p-2 rounded-full bg-slate-100">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 glass-nav rounded-[2rem] flex flex-col py-6 px-6 space-y-3 shadow-2xl md:hidden"
          >
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.name} className="flex flex-col gap-1.5 border-t border-b border-slate-100/50 py-3 my-1">
                    <span className="px-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {link.name}
                    </span>
                    <div className="pl-4 flex flex-col gap-1">
                      {link.dropdown.map((subLink) => (
                        <a 
                          key={subLink.name} 
                          href={subLink.href}
                          onClick={() => {
                            setIsOpen(false);
                            setActive('Karya');
                          }}
                          className="px-4 py-2.5 rounded-xl font-bold text-base text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                        >
                          {subLink.name}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => {
                    setIsOpen(false);
                    setActive(link.name);
                  }}
                  className={`px-4 py-3 rounded-2xl font-bold text-lg transition-colors ${active === link.name ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
                >
                  {link.name}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
