
import React from 'react';
import { SKILLS } from '../constants';
import { Code2, Globe, Sparkles } from 'lucide-react';

const Skills: React.FC = () => {
  const categories = [
    { id: 'Programming', icon: <Code2 className="w-4 h-4" /> },
    { id: 'Web', icon: <Globe className="w-4 h-4" /> },
    { id: 'Specialization', icon: <Sparkles className="w-4 h-4" /> },
  ];

  return (
    <section id="skills" className="py-24 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Technical Arsenal</h2>
          <p className="text-zinc-500 max-w-xl mx-auto">A selection of tools and technologies I use to build scalable and intelligent software.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.id} className="glass-card p-8 rounded-3xl border-zinc-800 transition-all hover:border-violet-500/50">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-violet-500/10 rounded-xl text-violet-500">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold font-heading">{cat.id}</h3>
              </div>
              
              <div className="space-y-4">
                {SKILLS.filter(s => s.category === cat.id).map(skill => (
                  <div key={skill.name} className="flex items-center justify-between group">
                    <span className="text-zinc-400 group-hover:text-white transition-colors">{skill.name}</span>
                    <div className="h-1.5 w-16 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-violet-500 w-[85%] rounded-full shadow-[0_0_8px_rgba(139,92,246,0.5)]"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
