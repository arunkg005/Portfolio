import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('dark');

  // Check saved theme or system preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    
    const initialTheme = savedTheme || (systemPrefersLight ? 'light' : 'dark');
    setTheme(initialTheme);

    if (initialTheme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  // Toggle Theme handler
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);

    if (nextTheme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  };

  // Run scroll-based animations Observer
  useEffect(() => {
    const animElements = document.querySelectorAll('.animate-on-scroll');
    const animObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            animObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    animElements.forEach((el) => animObserver.observe(el));

    return () => {
      animElements.forEach((el) => animObserver.unobserve(el));
    };
  }, []);

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="container px-4 md:px-16 pt-12 md:pt-24 transition-colors duration-300">
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Activities />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
