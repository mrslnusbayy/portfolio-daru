import { Code2, PenTool, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Tech Stack & Web Dev",
      icon: <Code2 className="text-primary mb-4" size={32} />,
      skills: ["React", "Laravel", "JavaScript", "PHP", "Python", "MySQL", "VS Code", "Git"]
    },
    {
      title: "Design & Creative Suite",
      icon: <PenTool className="text-primary mb-4" size={32} />,
      skills: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Figma", "Canva"]
    },
    {
      title: "Soft Skills & Capabilities",
      icon: <Lightbulb className="text-primary mb-4" size={32} />,
      skills: ["Public Speaking", "Teamwork", "Analytical Thinking", "Emotional Intelligence"]
    }
  ];

  return (
    <section id="keahlian" className="py-24 bg-gray-50 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Keahlian & Kemampuan</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-800 mb-6">{category.title}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="bg-gray-50 text-gray-700 border border-gray-200 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
