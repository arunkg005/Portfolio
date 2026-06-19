import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="animate-on-scroll mb-32">
      <div className="section-header mb-12">
        <h2 className="font-headline-lg text-[var(--primary)]">Experience</h2>
        <p className="font-body-md text-[var(--on-surface-variant)] mt-2">Professional background</p>
      </div>

      <div className="experience-list flex flex-col gap-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="experience-card bg-[var(--card-bg)] p-8 rounded-2xl border border-[var(--card-border)] shadow-[var(--card-shadow)] flex flex-col gap-6 transition-all duration-300 hover:scale-[1.01]"
          >
            <div className="experience-header flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="font-headline-lg-mobile text-[var(--primary)]">{exp.role}</h3>
                <p className="font-body-md text-[var(--secondary)]">{exp.company}</p>
              </div>
              <div className="experience-date font-mono text-xs font-medium text-[var(--secondary)] px-4 py-1.5 bg-[rgba(255,255,255,0.08)] border border-[rgba(182,201,219,0.15)] rounded-full self-start md:self-auto">
                {exp.date}
              </div>
            </div>

            <ul className="experience-list-items list-disc list-inside flex flex-col gap-3 text-[var(--on-surface-variant)] text-sm !leading-relaxed pl-2">
              {exp.points.map((pt, pIdx) => (
                <li key={pIdx} className="marker:text-[var(--secondary)]">
                  <span className="ml-1">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
