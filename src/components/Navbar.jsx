import React, { useState, useEffect } from 'react';

export default function Navbar({ theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'About Me', href: '#hero' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certificates' },
    { label: 'Activities', href: '#activities' },
    { label: 'Contact', href: '#contact' },
  ];

  // Programmatic smooth scroll to account for navbar offset
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 100;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Intersection Observer to highlight active section
  useEffect(() => {
    const sections = document.querySelectorAll('main > section');
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav id="navbar" className="sticky top-0 z-50 w-full bg-[var(--background)] shadow-[var(--neu-ext)] transition-colors duration-300">
      <div className="container flex justify-between items-center h-20">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full shadow-[var(--neu-ext)] flex items-center justify-center bg-[var(--surface-container-highest)] overflow-hidden">
            <img 
              src="assets/Arun_Kumar_Gupta_transparent.png" 
              alt="Arun Kumar Gupta" 
              className="w-full h-full object-cover scale-110"
            />
          </div>
          <span className="font-['Sora'] text-2xl font-bold text-[var(--primary)]">Portfolio</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 shadow-[var(--neu-sun)] px-6 py-2 rounded-full bg-[var(--surface-container-low)]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-mono text-xs font-medium tracking-wider px-4 py-2 rounded-full transition-all duration-300 ${
                activeSection === link.href.substring(1)
                  ? 'text-[var(--primary)] bg-[var(--surface-container-high)] shadow-[var(--neu-ext)] font-bold'
                  : 'text-[var(--on-surface-variant)] hover:text-[var(--primary)] hover:bg-[var(--surface-container-high)] hover:shadow-[var(--neu-ext)]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button (Desktop) */}
          <button
            onClick={toggleTheme}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-[var(--surface-container-highest)] text-[var(--primary)] shadow-[var(--neu-ext)] border-none cursor-pointer transition-all duration-300 hover:bg-[var(--surface-bright)] hover:shadow-[var(--neu-ext-hover)] hover:-translate-y-0.5 active:shadow-[var(--neu-sun)] active:translate-y-0.5"
            aria-label="Toggle Theme"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
              {theme === 'light' ? 'dark_mode' : 'light_mode'}
            </span>
          </button>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden w-10 h-10 rounded-full shadow-[var(--neu-ext)] items-center justify-center bg-[var(--surface-container)] text-[var(--primary)] border-none cursor-pointer"
            aria-label="Menu"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`flex md:hidden flex-col gap-2 p-4 bg-[var(--surface-container)] shadow-[var(--neu-sun)] rounded-b-2xl transition-all duration-300 ${mobileMenuOpen ? 'flex' : 'hidden'}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className={`block px-4 py-3 rounded-lg font-mono text-sm font-medium tracking-wider transition-all duration-300 ${
              activeSection === link.href.substring(1)
                ? 'text-[var(--primary)] bg-[var(--surface-container-high)] font-bold'
                : 'text-[var(--on-surface-variant)] hover:text-[var(--primary)]'
            }`}
          >
            {link.label}
          </a>
        ))}
        <button
          onClick={() => {
            toggleTheme();
            setMobileMenuOpen(false);
          }}
          className="flex items-center justify-center gap-2 p-3.5 rounded-full bg-[var(--surface-container-high)] text-[var(--primary)] shadow-[var(--neu-ext)] border-none font-mono text-xs font-medium tracking-wider cursor-pointer w-full mt-3 mb-2 hover:bg-[var(--surface-bright)] active:shadow-[var(--neu-sun)]"
          aria-label="Toggle Theme"
        >
          <span className="material-symbols-outlined">
            {theme === 'light' ? 'dark_mode' : 'light_mode'}
          </span>
          <span>{theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}</span>
        </button>
      </div>
    </nav>
  );
}
