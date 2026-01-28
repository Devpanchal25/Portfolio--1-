
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Bot, Github, Linkedin, Mail } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Hero: React.FC = () => {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (blob1Ref.current) {
        blob1Ref.current.style.transform = `translateY(${scrolled * 0.15}px)`;
      }
      if (blob2Ref.current) {
        blob2Ref.current.style.transform = `translateY(${scrolled * -0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socials = [
    { icon: <Github className="w-5 h-5" />, href: "#", color: "hover:text-white hover:bg-zinc-800" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", color: "hover:text-[#0077B5] hover:bg-[#0077B5]/10" },
    { icon: <Mail className="w-5 h-5" />, href: `mailto:${RESUME_DATA.email}`, color: "hover:text-red-400 hover:bg-red-400/10" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background blobs with parallax effect */}
      <div 
        ref={blob1Ref}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] will-change-transform" 
      />
      <div 
        ref={blob2Ref}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] will-change-transform" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-400 mb-8 animate-bounce">
          <Bot className="w-4 h-4 text-violet-400" />
          <span>Powered by Gemini 2.0</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 tracking-tighter">
          Hi, I'm <span className="gradient-text">Dev Panchal</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
          I'm an <span className="text-white font-medium">Information Technology Engineer</span> focused on building 
          intelligent systems through <span className="text-white font-medium">AI, NLP,</span> and robust 
          <span className="text-white font-medium"> Java Development</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#projects"
            className="group px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all flex items-center shadow-lg shadow-white/10"
          >
            View My Work
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#aichat"
            className="px-8 py-3 bg-zinc-900 text-white font-semibold rounded-full border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-all shadow-lg shadow-zinc-950/20"
          >
            Talk to my AI
          </a>
        </div>

        <div className="mt-16 flex justify-center space-x-4">
          {socials.map((social, idx) => (
            <a 
              key={idx}
              href={social.href} 
              className={`p-3 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-zinc-500 transition-all duration-300 ${social.color} hover:scale-110 active:scale-95`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
