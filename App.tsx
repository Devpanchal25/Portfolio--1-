
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import AiAssistant from './components/AiAssistant';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Intersection Observer for scroll-triggered reveal animations
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px', // Trigger slightly before the section fully enters
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-4');
          // Once the animation is done, we can stop observing this element
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Select all main sections to apply the reveal effect
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      // Apply initial hidden states and transition properties
      section.classList.add(
        'transition-all', 
        'duration-700', 
        'ease-out', 
        'opacity-0', 
        'translate-y-4',
        'will-change-transform'
      );
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-violet-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <AiAssistant />
      </main>
      <Footer />
    </div>
  );
}

export default App;
