import React, { useRef, useState, useEffect } from 'react';

export default function Certificates() {
  const trackRef = useRef(null);
  const [scrollPct, setScrollPct] = useState(20);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const certs = [
    {
      id: 'agile',
      title: 'Agile Scrum in Practice',
      issuer: 'Infosys Springboard',
      pdf: 'assets/Infosys_Agile_Scrum_Certificate.pdf',
    },
    {
      id: 'csa',
      title: 'ServiceNow CSA',
      issuer: 'ServiceNow',
      pdf: 'assets/ServiceNow_CSA_Certificate.pdf',
    },
    {
      id: 'ml',
      title: 'Machine Learning',
      issuer: 'Infosys Springboard',
      pdf: 'assets/Machine_Learning_Certificate.pdf',
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
    if (!track) return 300;
    const card = track.querySelector('.cert-card');
    return card ? card.offsetWidth + 24 : 300;
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
    const walk = (x - startX) * 2;
    track.scrollLeft = scrollLeftState - walk;
  };

  const handleCardClick = (pdfUrl) => {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    }
  };

  // Render PDFs onto Canvas using PDF.js
  useEffect(() => {
    const renderPDFs = () => {
      const pdfjsLib = window.pdfjsLib;
      if (!pdfjsLib) {
        // PDF.js not loaded yet, retry in 500ms
        setTimeout(renderPDFs, 500);
        return;
      }

      pdfjsLib.GlobalWorkerOptions.workerSrc =
        'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

      certs.forEach((cert) => {
        const canvas = document.getElementById(`cert-thumb-${cert.id}`);
        if (!canvas) return;

        pdfjsLib
          .getDocument(cert.pdf)
          .promise.then((pdf) => pdf.getPage(1))
          .then((page) => {
            const viewport = page.getViewport({ scale: 1.0 });
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            const ctx = canvas.getContext('2d');
            const renderContext = {
              canvasContext: ctx,
              viewport: viewport,
            };
            return page.render(renderContext).promise;
          })
          .catch((err) => {
            console.error(`Error rendering PDF ${cert.pdf}:`, err);
          });
      });
    };

    renderPDFs();

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
    <section id="certificates" className="animate-on-scroll mb-32">
      <div className="certs-header flex justify-between items-end mb-12">
        <div>
          <h2 className="font-headline-lg text-[var(--primary)]">Certificates</h2>
          <p className="font-body-md text-[var(--on-surface-variant)] mt-2">Professional certifications and courses</p>
        </div>
        <div className="certs-carousel-controls flex items-center gap-4">
          <button
            className="certs-carousel-btn w-11 h-11 rounded-full shadow-[var(--neu-ext)] flex items-center justify-center bg-[var(--surface-container)] border-none cursor-pointer text-[var(--primary)] transition-all duration-300 hover:bg-[var(--surface-container-highest)] active:shadow-[var(--neu-sun)]"
            onClick={scrollPrev}
            aria-label="Previous"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <div className="certs-track-indicator w-20 h-1.5 rounded-full shadow-[var(--neu-sun)] bg-[var(--surface-container-low)] relative overflow-hidden">
            <div
              className="certs-track-fill absolute left-0 top-0 h-full bg-[var(--secondary)] rounded-full transition-all duration-300"
              style={{ width: `${scrollPct}%` }}
            />
          </div>
          <button
            className="certs-carousel-btn w-11 h-11 rounded-full shadow-[var(--neu-ext)] flex items-center justify-center bg-[var(--surface-container)] border-none cursor-pointer text-[var(--primary)] transition-all duration-300 hover:bg-[var(--surface-container-highest)] active:shadow-[var(--neu-sun)]"
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
        className="certs-track hide-scrollbar flex gap-6 overflow-x-auto p-4 -m-4 snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing"
      >
        {certs.map((c) => (
          <div
            key={c.id}
            onClick={() => handleCardClick(c.pdf)}
            className="cert-card w-[calc(33.333%-16px)] lg:w-[calc(33.333%-16px)] md:w-[calc(50%-12px)] sm:w-[80%] min-w-[200px] shrink-0 bg-[var(--card-bg)] p-4 rounded-2xl border border-[var(--card-border)] shadow-[var(--card-shadow)] flex flex-col items-center text-center gap-3 cursor-pointer snap-start transition-all duration-300 hover:-translate-y-1.5"
          >
            <div className="cert-thumb w-full aspect-[1.414/1] rounded-lg overflow-hidden bg-[rgba(255,255,255,0.03)] border border-[rgba(182,201,219,0.1)] relative flex items-center justify-center">
              <canvas id={`cert-thumb-${c.id}`} className="w-full h-full object-contain transition-transform duration-500 hover:scale-[1.03]" />
              <div className="cert-thumb-overlay absolute inset-0 bg-gradient-to-t from-[rgba(5,21,32,0.7)] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3">
                <span className="font-mono text-[10px] font-medium text-[#e2e8f0] bg-[rgba(15,23,42,0.7)] backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <span className="material-symbols-outlined !text-[12px]">visibility</span>
                  View
                </span>
              </div>
            </div>
            <h4 className="text-[var(--primary)] font-bold text-xs leading-5 min-h-[40px] flex items-center">
              {c.title}
            </h4>
            <p className="cert-issuer font-mono text-[10px] font-medium text-[var(--on-surface-variant)] -mt-1">
              {c.issuer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
