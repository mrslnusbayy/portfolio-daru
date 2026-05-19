import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Student Staff KAHK",
      company: "Kantor Admisi, Humas & Kerja Sama",
      period: "Okt 2025 - Sekarang",
      description: "Merancang konten visual dan mengedit materi promosi digital untuk mendukung branding serta komunikasi publik kampus."
    },
    {
      title: "Pengurus Harian BEM",
      company: "Fakultas Sains dan Teknologi",
      period: "Nov 2023 - Nov 2024",
      description: "Bertanggung jawab atas arah kebijakan strategis, manajemen operasional, dan kelancaran program kerja BEM."
    },
    {
      title: "IT Support Intern",
      company: "Charitas Hospital KM. 7",
      period: "Jan 2022 - Mar 2022",
      description: "Melakukan troubleshooting hardware, instalasi perangkat keras/lunak, dan memberikan dukungan teknis garda terdepan."
    }
  ];

  return (
    <section id="pengalaman" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight">Jejak Langkah.</h2>
          <Briefcase size={48} className="text-primary/10 hidden md:block" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bento-card flex gap-6 md:gap-8 relative group overflow-hidden"
            >
              {/* Thick Vertical Line */}
              <div className="w-2 bg-slate-100 rounded-full relative overflow-hidden shrink-0">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-800 origin-top transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"></div>
                <div className="absolute top-0 left-0 w-full h-1/4 bg-slate-800"></div>
              </div>
              
              <div className="flex-1 py-2">
                <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 font-extrabold text-sm rounded-full mb-4 uppercase tracking-wider">
                  {exp.period}
                </span>
                <h3 className="text-3xl font-extrabold text-dark mb-2 tracking-tight">{exp.title}</h3>
                <h4 className="text-xl font-bold text-slate-500 mb-6">{exp.company}</h4>
                <p className="text-slate-600 leading-relaxed font-medium text-lg">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
