import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-slate-400 py-10 text-center border-t border-slate-800/50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl">
        <p className="font-medium text-sm">
          &copy; 2026 Marselinus Dewadaru. Built with React & Tailwind.
        </p>
        <div className="flex items-center">
          <a 
            href="https://instagram.com/mrslnusbayy" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
          >
            <Instagram size={18} /> @mrslnusbayy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
