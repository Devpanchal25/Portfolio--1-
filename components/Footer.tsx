
import React from 'react';
import { Mail, Phone, MapPin, Heart, Github, Linkedin } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6 cursor-default">
              <span className="text-2xl font-bold font-heading">DEV<span className="text-violet-500">.</span>PAN</span>
            </div>
            <p className="text-zinc-500 max-w-sm leading-relaxed mb-8">
              Pushing the boundaries of Information Technology through AI integration and clean software engineering.
            </p>
            <div className="flex space-x-4">
               <a href="#" className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 border border-zinc-800 hover:scale-110 shadow-lg shadow-black/50">
                 <Github className="w-5 h-5" />
               </a>
               <a href="#" className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center hover:bg-[#0077B5] text-zinc-400 hover:text-white transition-all duration-300 border border-zinc-800 hover:scale-110 shadow-lg shadow-black/50">
                 <Linkedin className="w-5 h-5" />
               </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-zinc-500 hover:text-white transition-colors group">
                <Mail className="w-4 h-4 mr-3 text-violet-500 group-hover:scale-110 transition-transform" />
                <a href={`mailto:${RESUME_DATA.email}`} className="link-underline">{RESUME_DATA.email}</a>
              </li>
              <li className="flex items-center text-zinc-500 hover:text-white transition-colors group">
                <Phone className="w-4 h-4 mr-3 text-violet-500 group-hover:scale-110 transition-transform" />
                <span className="link-underline">{RESUME_DATA.phone}</span>
              </li>
              <li className="flex items-start text-zinc-500 transition-colors group">
                <MapPin className="w-4 h-4 mr-3 text-violet-500 mt-1 group-hover:scale-110 transition-transform" />
                <span>{RESUME_DATA.location}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-zinc-500">
              <li><a href="#about" className="hover:text-violet-400 transition-colors link-underline inline-block">About</a></li>
              <li><a href="#skills" className="hover:text-violet-400 transition-colors link-underline inline-block">Skills</a></li>
              <li><a href="#projects" className="hover:text-violet-400 transition-colors link-underline inline-block">Projects</a></li>
              <li><a href="#aichat" className="hover:text-violet-400 transition-colors link-underline inline-block">AI Assistant</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm">
          <p>© {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.</p>
          <p className="flex items-center mt-4 md:mt-0">
            Built with <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500 animate-pulse" /> using React & Gemini
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
