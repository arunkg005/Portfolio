import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const skillsData = portfolioData.skills;

  return (
    <section id="skills" className="animate-on-scroll mb-32">
      <div className="section-header mb-12">
        <h2 className="font-headline-lg text-[var(--primary)]">Skills</h2>
      </div>

      <div className="flex flex-col gap-12">
        {skillsData.map((cat, idx) => (
          <div key={idx}>
            <p className="font-body-md text-[var(--on-surface-variant)] mb-4 font-semibold tracking-wide uppercase text-sm border-b border-[var(--surface-container-highest)] pb-2">
              {cat.title}
            </p>
            <div className="skills-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              {cat.subsections.map((sub, sIdx) => (
                <div key={sIdx} className="skills-card p-6 rounded-2xl">
                  <h3 className="font-headline-lg-mobile !text-[18px] !leading-6 text-[var(--primary)] mb-4 border-b border-[var(--surface-container-highest)] pb-3">
                    {sub.name}
                  </h3>
                  <div className="pills-wrap flex flex-wrap gap-4">
                    {sub.skills.map((skill, kIdx) => (
                      <span
                        key={kIdx}
                        className="pill px-4 py-2 bg-[var(--surface-container-low)] rounded-full text-[var(--secondary)] font-mono text-xs font-medium tracking-wider shadow-[var(--neu-sun)] transition-all duration-300 hover:bg-[var(--surface-container)] hover:shadow-[var(--neu-sun-active)] cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
