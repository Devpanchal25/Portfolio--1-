
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Terminal, ChevronRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Featured Projects</h2>
            <p className="text-zinc-500">Turning complex ideas into functional, AI-driven reality.</p>
          </div>
          <a href="#" className="group text-violet-400 font-medium hover:text-violet-300 flex items-center transition-colors">
            <span className="link-underline">View All Projects</span>
            <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx} 
              className="group glass-card rounded-3xl overflow-hidden border-zinc-800 hover:border-violet-500/50 hover:shadow-[0_0_40px_-15px_rgba(139,92,246,0.3)] hover:scale-[1.02] transition-all duration-500 cursor-default"
            >
              <div className="h-48 bg-zinc-900 flex items-center justify-center group-hover:bg-zinc-800 transition-colors duration-500">
                 <Terminal className="w-16 h-16 text-zinc-700 group-hover:text-violet-500 transition-colors duration-500" />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-zinc-800 text-zinc-400 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 group-hover:text-violet-400 transition-colors duration-500">
                  {project.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                   <button className="group/btn text-sm font-semibold flex items-center text-zinc-400 hover:text-violet-400 transition-colors duration-300">
                     <span className="link-underline">Case Study</span>
                     <ExternalLink className="ml-1.5 w-4 h-4 opacity-0 -translate-y-1 group-hover/btn:opacity-100 group-hover/btn:translate-y-0 transition-all" />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
