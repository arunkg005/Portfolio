import React, { useRef, useState, useEffect } from 'react';

export default function Projects() {
  const trackRef = useRef(null);
  const [scrollPct, setScrollPct] = useState(20);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const projects = [
    {
      title: 'ADAPT Platform',
      type: 'Web App',
      image: 'assets/ADAPT.png',
      desc: 'A centralized caretaker assistance platform designed to streamline patient care management and improve caregiver accessibility across web and mobile devices. Integrates Gemini-powered AI assistance for contextual healthcare support.',
      tags: ['Django', 'PostgreSQL', 'Gemini AI', 'Python', 'Render'],
      liveLink: 'https://adapt-web-tbc7.onrender.com/',
      codeLink: 'https://github.com/arunkg005/ADAPT',
    },
    {
      title: 'SAIGE',
      type: 'AI / Web App',
      image: 'assets/Saige.png',
      desc: 'A cutting-edge application focused on advanced data intelligence and AI-driven automation for enhanced decision making and streamlined workflows.',
      tags: ['React', 'Python', 'Machine Learning', 'API'],
      codeLink: 'https://github.com/arunkg005/Saige',
    },
    {
      title: 'Churn Prediction',
      type: 'Machine Learning',
      image: 'assets/Chrun prediction.png',
      desc: 'Telecom Customer Churn Prediction System featuring a machine learning-powered Flask API and an independent dashboard interface. Employs Logistic Regression and Scikit-learn for customer behavior analytics.',
      tags: ['Flask', 'Python', 'Scikit-Learn', 'Docker', 'Vercel'],
      liveLink: 'https://churn-prediction-lwz4ics58-akgindian55-6827s-projects.vercel.app/',
      codeLink: 'https://github.com/arunkg005/churn-prediction-api',
    },
    {
      title: 'Digit Recognition',
      type: 'Deep Learning',
      image: 'assets/digit_recognition.png',
      desc: 'A deep learning web application powered by a custom neural network. Features a FastAPI backend serving a browser canvas drawing board for real-time handwritten digit recognition and telemetry visualization.',
      tags: ['FastAPI', 'TensorFlow', 'Python', 'HTML Canvas', 'JavaScript'],
      liveLink: 'https://huggingface.co/spaces/Arun-Acc001/Handwritten_Digit_Recognition',
      codeLink: 'https://github.com/arunkg005/Handwriiten-Digit-Recongnition',
    },
    {
      title: 'SysPulse',
      type: 'Android App',
      image: 'assets/syspulse_logo.jpg',
      imageBg: '#ffffff',
      imagePadding: '20px',
      desc: 'Android application using Java and Android Studio to monitor CPU usage, memory statistics, sensors, and system health diagnostics. Features an interactive dashboard for hardware telemetry visualization.',
      tags: ['Android SDK', 'Java', 'XML', 'Android Studio'],
      liveLink: 'https://github.com/arunkg005/Syspulse/releases/tag/v1.0.0',
      liveLabel: 'Get APK',
      liveIcon: 'download',
      codeLink: 'https://github.com/arunkg005/Syspulse',
    },
  ];

  const updateTrackFill = () => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const pct = maxScroll > 0 ? (track.scrollLeft / maxScroll) * 100 : 0;
    setScrollPct(Math.max(20, pct));
  };

  const getScrollAmount = () => {
    const track = trackRef.current;
    if (!track) return 400;
    const card = track.querySelector('.project-card');
    return card ? card.offsetWidth + 32 : 400;
  };

  const scrollPrev = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    }
  };

  // Drag-to-Scroll Events
  const handleMouseDown = (e) => {
    const track = trackRef.current;
    if (!track) return;
    setIsDragging(true);
    setStartX(e.pageX - track.offsetLeft);
    setScrollLeftState(track.scrollLeft);
    track.style.scrollSnapType = 'none';
    track.style.scrollBehavior = 'auto';
  };

  const handleMouseLeaveOrUp = () => {
    const track = trackRef.current;
    if (!track) return;
    setIsDragging(false);
    track.style.scrollSnapType = 'x mandatory';
    track.style.scrollBehavior = 'smooth';
  };

  const handleMouseMove = (e) => {
    const track = trackRef.current;
    if (!isDragging || !track) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed multiplier
    track.scrollLeft = scrollLeftState - walk;
  };

  // Ensure scroll calculation is correct on mount/resize
  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      track.addEventListener('scroll', updateTrackFill);
      window.addEventListener('resize', updateTrackFill);
    }
    return () => {
      if (track) {
        track.removeEventListener('scroll', updateTrackFill);
      }
      window.removeEventListener('resize', updateTrackFill);
    };
  }, []);

  return (
    <section id="projects" className="animate-on-scroll mb-32">
      <div className="projects-header flex justify-between items-end mb-12">
        <div>
          <h2 className="font-headline-lg text-[var(--primary)]">Projects</h2>
          <p className="font-body-md text-[var(--on-surface-variant)] mt-2">A selection of my recent work</p>
        </div>
        <div className="carousel-controls flex items-center gap-4">
          <button
            className="carousel-btn w-12 h-12 rounded-full shadow-[var(--neu-ext)] flex items-center justify-center bg-[var(--surface-container)] border-none cursor-pointer text-[var(--primary)] transition-all duration-300 hover:bg-[var(--surface-container-highest)] active:shadow-[var(--neu-sun)]"
            onClick={scrollPrev}
            aria-label="Previous"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <div className="carousel-track-indicator w-24 h-2 rounded-full shadow-[var(--neu-sun)] bg-[var(--surface-container-low)] relative overflow-hidden">
            <div
              className="carousel-track-fill absolute left-0 top-0 h-full bg-[var(--secondary)] rounded-full transition-all duration-300"
              style={{ width: `${scrollPct}%` }}
            />
          </div>
          <button
            className="carousel-btn w-12 h-12 rounded-full shadow-[var(--neu-ext)] flex items-center justify-center bg-[var(--surface-container)] border-none cursor-pointer text-[var(--primary)] transition-all duration-300 hover:bg-[var(--surface-container-highest)] active:shadow-[var(--neu-sun)]"
            onClick={scrollNext}
            aria-label="Next"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
        className="carousel-track hide-scrollbar flex gap-8 overflow-x-auto p-4 -m-4 snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing"
      >
        {projects.map((p, idx) => (
          <div
            key={idx}
            className="project-card w-[calc(100%-32px)] md:w-[320px] md:min-w-[320px] min-w-[280px] shrink-0 bg-[var(--card-bg)] rounded-2xl p-4 border border-[var(--card-border)] shadow-[var(--card-shadow)] snap-start flex flex-col gap-4 transition-all duration-300"
          >
            <div
              className="project-thumb w-full h-40 rounded-lg overflow-hidden shadow-[var(--neu-sun)] border border-[rgba(67,72,71,0.2)] relative"
              style={{ background: p.imageBg || 'transparent' }}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                style={{ objectFit: p.imageBg ? 'contain' : 'cover', padding: p.imagePadding || '0px' }}
              />
              <div className="project-thumb-overlay absolute inset-0 bg-gradient-to-t from-[rgba(5,21,32,0.8)] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="font-mono text-xs font-medium text-[#e2e8f0] bg-[rgba(15,23,42,0.7)] backdrop-blur-md px-2 py-1 rounded-md">
                  {p.type}
                </span>
              </div>
            </div>

            <div className="project-info flex-grow flex flex-col gap-3">
              <h3 className="font-headline-lg-mobile text-[var(--primary)]">{p.title}</h3>
              <p className="font-body-sm text-[var(--on-surface-variant)] text-xs !leading-relaxed line-clamp-4 min-h-[72px]">
                {p.desc}
              </p>
              <div className="project-tech-tags flex flex-wrap gap-2 mt-2">
                {p.tags.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[10px] font-medium text-[var(--secondary)] bg-[var(--surface-container-low)] px-2.5 py-1 rounded-full shadow-[var(--neu-sun)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-actions flex gap-4 mt-auto">
              {p.liveLink && (
                <a
                  href={p.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-project-live flex-1 py-3 rounded-full font-mono text-[11px] font-medium tracking-wide text-center text-[var(--primary)] bg-[var(--surface-container-highest)] shadow-[var(--neu-ext)] transition-all duration-300 hover:bg-[var(--surface-bright)] hover:shadow-[var(--neu-ext-hover)] hover:-translate-y-0.5 hover:text-[var(--secondary)] active:shadow-[var(--neu-sun)] active:translate-y-0.5"
                >
                  <span className="inline-flex items-center gap-1.5 justify-center">
                    {p.liveIcon && (
                      <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                        {p.liveIcon}
                      </span>
                    )}
                    {p.liveLabel || 'Live Demo'}
                  </span>
                </a>
              )}
              <a
                href={p.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-project-code py-3 rounded-full font-mono text-[11px] font-medium tracking-wide text-center transition-all duration-300 border border-[rgba(141,145,145,0.4)] text-[var(--on-surface-variant)] hover:text-[var(--primary)] hover:border-[var(--outline)] hover:bg-[rgba(255,255,255,0.03)] hover:-translate-y-0.5 active:translate-y-0.5 ${
                  !p.liveLink ? 'flex-1' : 'flex-1'
                }`}
              >
                <span>{p.liveLink ? 'GitHub' : 'GitHub Repository'}</span>
              </a>
            </div>
          </div>
        ))}

        {/* Empty State / More Projects */}
        <a
          href="https://github.com/arunkg005"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-empty w-[calc(100%-32px)] md:w-[calc(50%-16px)] md:min-w-[340px] min-w-[280px] shrink-0 bg-[rgba(28,50,68,0.3)] rounded-2xl p-6 border border-dashed border-[rgba(182,201,219,0.25)] flex items-center justify-center snap-start transition-all duration-300 hover:bg-[rgba(28,50,68,0.5)] hover:border-[var(--secondary)] hover:-translate-y-1.5"
          style={{ textDecoration: 'none' }}
        >
          <div className="project-empty-inner text-center flex flex-col items-center gap-4">
            <div className="project-empty-icon w-16 h-16 rounded-full shadow-[var(--neu-ext)] flex items-center justify-center bg-[var(--surface-container)] text-[var(--secondary)]">
              <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>
                arrow_forward
              </span>
            </div>
            <p className="font-label-md text-[var(--on-surface-variant)]">More Projects on GitHub</p>
          </div>
        </a>
      </div>
    </section>
  );
}
