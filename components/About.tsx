
import React from 'react';
import { User, Target, MapPin, Languages } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6 flex items-center">
                <Target className="mr-3 text-violet-500" />
                Career Objective
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                {RESUME_DATA.objective}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl">
                <MapPin className="w-6 h-6 text-violet-500 mb-4" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-zinc-400 text-sm">{RESUME_DATA.location}</p>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <Languages className="w-6 h-6 text-violet-500 mb-4" />
                <h3 className="font-semibold mb-2">Languages</h3>
                <p className="text-zinc-400 text-sm">English, Hindi, Gujarati</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative glass-card p-8 rounded-3xl">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-zinc-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading">{RESUME_DATA.name}</h3>
                  <p className="text-violet-400 text-sm">Information Technology</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm py-2 border-b border-zinc-800">
                  <span className="text-zinc-500">Birth Date</span>
                  <span className="text-zinc-300">25/07/2005</span>
                </div>
                <div className="flex justify-between text-sm py-2 border-b border-zinc-800">
                  <span className="text-zinc-500">Nationality</span>
                  <span className="text-zinc-300">Indian</span>
                </div>
                <div className="flex justify-between text-sm py-2 border-b border-zinc-800">
                  <span className="text-zinc-500">Hobbies</span>
                  <span className="text-zinc-300">Cricket, Travelling, Movies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
