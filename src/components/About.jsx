import { Code2, PenTool, Lightbulb, Database, Globe, Server, GitBranch, Layers, Wand2, BookImage } from 'lucide-react';
import TiltCard from './TiltCard';

const About = () => {
  const skillGroups = [
    {
      label: "Tech Stack & Web Dev",
      items: [
        { name: "React", icon: <Globe size={24} />, color: "text-cyan-500", bg: "bg-cyan-50" },
        { name: "Laravel", icon: <Server size={24} />, color: "text-red-500", bg: "bg-red-50" },
        { name: "JavaScript", icon: <Code2 size={24} />, color: "text-yellow-500", bg: "bg-yellow-50" },
        { name: "PHP", icon: <Code2 size={24} />, color: "text-indigo-500", bg: "bg-indigo-50" },
        { name: "Python", icon: <Code2 size={24} />, color: "text-amber-500", bg: "bg-amber-50" },
        { name: "MySQL", icon: <Database size={24} />, color: "text-blue-500", bg: "bg-blue-50" },
        { name: "VS Code", icon: <Layers size={24} />, color: "text-sky-500", bg: "bg-sky-50" },
        { name: "Git", icon: <GitBranch size={24} />, color: "text-orange-500", bg: "bg-orange-50" },
      ]
    },
    {
      label: "Design & Creative Suite",
      items: [
        { name: "Photoshop", icon: <Wand2 size={24} />, color: "text-blue-600", bg: "bg-blue-50" },
        { name: "Illustrator", icon: <PenTool size={24} />, color: "text-orange-600", bg: "bg-orange-50" },
        { name: "InDesign", icon: <BookImage size={24} />, color: "text-pink-700", bg: "bg-pink-50" },
        { name: "Figma", icon: <PenTool size={24} />, color: "text-pink-500", bg: "bg-pink-50" },
        { name: "Canva", icon: <Lightbulb size={24} />, color: "text-teal-500", bg: "bg-teal-50" },
      ]
    },
  ];

  return (
    <section id="tentang" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Tentang Saya.</h2>
        </div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main About Card (Spans 2 columns on desktop) */}
          <TiltCard className="md:col-span-2 bento-card flex flex-col justify-between h-full bg-gradient-to-br from-white to-slate-50/80 border border-slate-100 shadow-sm relative overflow-hidden">
            {/* Background Watermark */}
            <div className="absolute -bottom-10 -right-10 text-slate-100/50 rotate-12 pointer-events-none">
              <Code2 size={200} strokeWidth={1} />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Mengenal Saya
              </h3>
              
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Saat ini saya sedang menempuh studi <span className="font-semibold text-slate-900">S1 Informatika</span> di Universitas Katolik Musi Charitas. Memiliki minat besar dalam <span className="font-semibold text-slate-900">Full-Stack Development</span> dengan keahlian praktis menggunakan <span className="font-semibold text-slate-900">Laravel, React, dan Python</span>. Saya suka memecahkan masalah melalui logika pemrograman di backend sekaligus memastikan antarmuka (UI/UX) tetap bersih dan fungsional.
              </p>
              
              <div className="border-l-4 border-indigo-500 pl-6 mt-6 mb-2 italic text-slate-700 bg-gradient-to-r from-indigo-50/50 to-transparent py-4 rounded-r-2xl">
                <p className="leading-relaxed">
                  "Selain fokus pada hal teknis, saya aktif dalam organisasi BEM dan kepanitiaan kampus. Pengalaman ini membentuk cara kerja saya agar selalu sistematis, adaptif dalam tim, dan terbiasa mendokumentasikan setiap progress proyek secara rapi."
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-8 pt-6 border-t border-slate-100 mt-4 relative z-10">
              <div>
                <span className="block text-xl font-bold text-slate-900">Full-Stack</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">Core Focus</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-slate-900">6th Sem</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">Current Status</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-slate-900">Active</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">Organization</span>
              </div>
            </div>
          </TiltCard>

          {/* Education Card */}
          <TiltCard className="bento-card !bg-gradient-to-br !from-slate-900 !via-slate-800 !to-slate-900 !border-slate-800 !text-white flex flex-col justify-center relative overflow-hidden group h-full">
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10">
              <span className="text-slate-400 font-semibold tracking-widest uppercase text-sm block">Pendidikan</span>
              <p className="text-3xl font-bold text-white mt-2 tracking-tight">Informatika</p>
              <p className="text-lg text-slate-200 mt-1">Universitas Katolik Musi Charitas</p>
              <p className="text-sm text-slate-400 mt-3 font-medium">2023 - Sekarang</p>
            </div>
          </TiltCard>

          {/* Tech Stack & Tools Card (Spans full width) */}
          <div className="md:col-span-3 mt-12">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Tech Stack & Tools
              </h3>
              <p className="text-slate-500 font-medium text-base">Alat yang saya gunakan sehari-hari dalam pengembangan web, aplikasi, dan desain grafis.</p>
            </div>
            
            <div className="flex flex-col gap-10">
              {skillGroups.map((group, gi) => (
                <div key={gi}>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{group.label}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                    {group.items.map((skill, index) => (
                      <TiltCard 
                        key={index}
                        className="bg-white border border-slate-100 shadow-sm rounded-3xl p-5 flex flex-col items-center justify-center gap-3 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 transition-all duration-300 group"
                      >
                        <div className={`p-3 rounded-2xl ${skill.bg} ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                          {skill.icon}
                        </div>
                        <span className="font-bold text-slate-700 text-xs text-center">{skill.name}</span>
                      </TiltCard>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
