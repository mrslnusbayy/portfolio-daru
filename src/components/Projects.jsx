import smpImg from '../assets/smp.jpg';
import bioreleafImg from '../assets/bioreleaf.jpg';
import sinarImg from '../assets/sinar88.jpg';
import TiltCard from './TiltCard';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Website Profile SMP Xaverius 5 Plaju",
      role: "Front-end Developer",
      image: smpImg,
      link: "https://smpxaverius5.my.id/"
    },
    {
      title: "BioReleaf",
      role: "Back-end Developer",
      image: bioreleafImg,
      link: "https://bioreleaf.my.id/"
    },
    {
      title: "SIA-Inventory Sinar 88",
      role: "FULL-STACK DEVELOPMENT",
      image: sinarImg,
      link: "https://sinar88.my.id"
    }
  ];

  return (
    <section id="proyek" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-4 tracking-tight">Karya IT & Software.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <TiltCard key={index} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-slate-100 flex flex-col hover:-translate-y-2 relative">
              <div className="relative h-72 overflow-hidden bg-slate-100 p-2">
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col relative bg-white">
                <span className="text-slate-500 font-semibold text-sm uppercase tracking-widest mb-3">{project.role}</span>
                <h3 className="text-2xl font-extrabold text-dark mb-8 flex-1 leading-snug">{project.title}</h3>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full pt-4 border-t-2 border-slate-100 group-hover:border-primary text-slate-500 hover:text-primary font-bold transition-colors text-lg"
                >
                  Lihat Karya 
                  <span className="bg-slate-50 group-hover:bg-primary group-hover:text-white p-3 rounded-full transition-colors transform group-hover:rotate-12">
                    <ArrowUpRight size={20} />
                  </span>
                </a>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
