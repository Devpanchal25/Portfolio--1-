
import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-16 text-center">Academic Journey</h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-violet-600 rounded-full -translate-x-1/2 border-4 border-zinc-950 z-10 hidden md:block" />
                
                <div className="w-full md:w-1/2 px-0 md:px-12">
                  <div className="glass-card p-8 rounded-3xl hover:border-violet-500/50 transition-colors">
                    <div className="flex items-center space-x-2 text-violet-400 mb-3 text-sm font-medium">
                      <GraduationCap className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <h3 className="text-xl font-bold font-heading mb-2">{edu.degree}</h3>
                    <p className="text-zinc-300 font-medium mb-4">{edu.institution}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {edu.location}
                      </div>
                      {edu.score && (
                        <div className="px-2 py-0.5 bg-zinc-800 rounded text-violet-400 font-bold">
                          {edu.score}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
