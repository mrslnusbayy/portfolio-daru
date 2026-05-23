import smpImg from "../assets/smp.jpg";
import bioreleafImg from "../assets/bioreleaf.jpg";
import sinarImg from "../assets/sinar88.jpg";
import TiltCard from "./TiltCard";
import { ArrowUpRight, Lock } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Website Profile SMP Xaverius 5 Plaju",
      role: "Front-end Developer",
      image: smpImg,
      link: "https://smpxaverius5.my.id/",
    },
    {
      title: "BioReleaf",
      role: "Back-end Developer",
      image: bioreleafImg,
      link: "https://bioreleaf.my.id/",
    },
  ];

  const privateProjects = [
    {
      title: "SIA-Inventory Sinar 88",
      role: "FULL-STACK DEVELOPMENT",
      image: sinarImg,
      description:
        "Sistem inventory management untuk toko retail dengan fitur POS terintegrasi",
    },
  ];

  return (
    <section id="proyek" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-4 tracking-tight">
            Karya IT & Software.
          </h2>
        </div>

        {/* Karya Selesai */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <TiltCard
              key={index}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-slate-100 flex flex-col hover:-translate-y-2 relative"
            >
              <div className="relative h-72 overflow-hidden bg-slate-100 p-2">
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col relative bg-white">
                <span className="text-slate-500 font-semibold text-sm uppercase tracking-widest mb-3">
                  {project.role}
                </span>
                <h3 className="text-2xl font-extrabold text-dark mb-8 flex-1 leading-snug">
                  {project.title}
                </h3>

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

        {/* Proyek Mendatang */}
        <div className="mt-24 pt-12 border-t-2 border-slate-200">
          <div className="flex items-center gap-3 mb-8">
            <Lock size={28} className="text-slate-400" />
            <h3 className="text-2xl md:text-3xl font-extrabold text-dark">
              Proyek Klien (Private)
            </h3>
            <span className="ml-auto text-sm text-slate-500 font-medium bg-slate-100 px-4 py-2 rounded-full">
              Dipercaya oleh bisnis lokal
            </span>
          </div>
          <p className="text-slate-600 mb-8 text-lg">
            Proyek-proyek selesai yang tidak dapat dipublikasikan karena
            perjanjian kerahasiaan dengan klien
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {privateProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-[2rem] p-8 border-2 border-slate-200 hover:border-slate-300 transition-all duration-500 group hover:shadow-lg"
              >
                <div className="relative h-48 rounded-[1.5rem] overflow-hidden mb-6 bg-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-dark/40 flex items-center justify-center">
                    <div className="text-center">
                      <Lock size={48} className="text-white/80 mx-auto mb-2" />
                      <p className="text-white font-bold text-sm">
                        Private Project
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="text-slate-500 font-semibold text-sm uppercase tracking-widest">
                    {project.role}
                  </span>
                  <h4 className="text-2xl font-extrabold text-dark mb-2 mt-2">
                    {project.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
