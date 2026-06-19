import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { greeting, name, role, description, resumeUrl, avatarUrl } = portfolioData.about;

  const handleResumeDownload = () => {
    window.open(resumeUrl, '_blank');
  };

  return (
    <section className="hero animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 pt-12 md:pt-24" id="hero">
      {/* Left Column (Info) */}
      <div className="flex flex-col gap-8 z-10">
        <div className="flex flex-col gap-2">
          <p className="font-body-md text-[var(--secondary)]">{greeting}</p>
          <h1 className="font-headline-xl text-[var(--primary)] !leading-tight">{name}</h1>
          <h2 className="font-headline-lg-mobile text-[var(--on-surface-variant)]">{role}</h2>
        </div>
        <p className="font-body-md text-[var(--on-surface-variant)] max-w-[520px] !leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pt-4">
          <button
            onClick={handleResumeDownload}
            className="btn-primary btn-neu bg-[var(--surface-container-highest)] text-[var(--primary)] font-mono text-xs font-medium tracking-wider px-8 py-4 rounded-2xl border-none cursor-pointer flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>download</span>
            Resume
          </button>
        </div>
      </div>

      {/* Right Column (Avatar Image) */}
      <div className="hero-image-area relative flex justify-center items-center">
        {/* Glowing Background effect */}
        <div className="hero-glow absolute w-64 h-64 bg-[rgba(182,201,219,0.2)] rounded-full blur-[80px]" />

        {/* Inline SVG ClipPath for Rounded Hexagon */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id="rounded-hexagon-clip" clipPathUnits="objectBoundingBox">
              <path d="M 0.55,0.043 L 0.955,0.246 Q 0.98,0.259 0.98,0.303 L 0.98,0.697 Q 0.98,0.741 0.955,0.754 L 0.55,0.957 Q 0.5,0.982 0.45,0.957 L 0.045,0.754 Q 0.02,0.741 0.02,0.697 L 0.02,0.303 Q 0.02,0.259 0.045,0.246 L 0.45,0.043 Q 0.5,0.018 0.55,0.043 Z" />
            </clipPath>
          </defs>
        </svg>

        <div className="portal-hexagon">
          {/* SVG Border Frame with Rounded Path */}
          <svg className="portal-frame" viewBox="0 0 400 450">
            <path d="M 220,19.3 L 382,110.8 Q 392,116.5 392,136.5 L 392,313.5 Q 392,333.5 382,339.2 L 220,430.7 Q 200,442 180,430.7 L 18,339.2 Q 8,333.5 8,313.5 L 8,136.5 Q 8,116.5 18,110.8 L 180,19.3 Q 200,8 220,19.3 Z" fill="none" stroke="#CCD0CF" strokeWidth="12" strokeLinejoin="round" />
          </svg>

          {/* Clipped Background and Body Layer */}
          <div className="portal-clipped">
            <div className="portal-bg-pattern bg-white" />
            <img className="portal-img" src={avatarUrl} alt={`Portrait of ${name}`} />
          </div>

          {/* Unclipped Head Layer (Only showing top part to overlap border) */}
          <div className="portal-unclipped">
            <img className="portal-img" src={avatarUrl} alt={`Portrait of ${name}`} />
          </div>
        </div>

        {/* Floating Badges */}
        <div className="floating-badge badge-left absolute p-2 px-4 bg-[var(--surface-container)] rounded-2xl shadow-[var(--neu-ext)] flex items-center gap-2 left-[-10px] md:left-[20px] top-[25%] z-10">
          <span className="material-symbols-outlined text-[var(--tertiary-fixed)]" style={{ fontSize: '14px', fontVariationSettings: "'FILL' 1" }}>
            model_training
          </span>
          <span className="font-mono text-xs font-medium tracking-wider text-[var(--primary)]">DS &amp; ML</span>
        </div>

        <div className="floating-badge badge-right absolute p-2 px-4 bg-[var(--surface-container)] rounded-2xl shadow-[var(--neu-ext)] flex items-center gap-2 right-[-10px] md:right-[20px] bottom-[30%] z-10">
          <span className="material-symbols-outlined text-[var(--tertiary-fixed)]" style={{ fontSize: '14px', fontVariationSettings: "'FILL' 1" }}>
            code
          </span>
          <span className="font-mono text-xs font-medium tracking-wider text-[var(--primary)]">Software Dev</span>
        </div>
      </div>
    </section>
  );
}
