import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { schooling, university } = portfolioData.education;

  return (
    <section id="education" className="animate-on-scroll mb-32">
      <div className="section-header mb-12">
        <h2 className="font-headline-lg text-[var(--primary)]">Education</h2>
        <p className="font-body-md text-[var(--on-surface-variant)] mt-2">My academic journey</p>
      </div>

      <div className="education-grid grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 1 - Schooling Card */}
        <div className="education-card p-8 rounded-2xl flex flex-col gap-4">
          <div>
            <h3 className="font-headline-lg-mobile text-[var(--primary)] mb-1">Schooling</h3>
            <p className="font-body-sm text-[var(--secondary)]">
              <a
                href={schooling.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ textDecorationColor: 'var(--secondary)', textUnderlineOffset: '4px' }}
              >
                {schooling.name}
              </a>{' '}
              • {schooling.board}
            </p>
          </div>

          {/* Subcards inside schooling */}
          <div className="school-subcards flex flex-col sm:flex-row gap-4 mt-2">
            {schooling.classes.map((cls, idx) => (
              <div key={idx} className="school-subcard flex-1 p-4 rounded-lg flex flex-col gap-1.5">
                <h4 className="font-['Sora'] text-sm font-semibold text-[var(--primary)]">{cls.title}</h4>
                <div className="subcard-meta font-mono text-[11px] text-[var(--secondary)]">
                  {schooling.board} • {cls.year}
                </div>
                <div className="subcard-result text-xs font-medium text-[var(--on-surface-variant)]">
                  Result: {cls.result}
                  <a
                    href={cls.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[var(--secondary)] underline ml-2"
                  >
                    View
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2 - B.Tech Card */}
        <div className="education-card p-8 rounded-2xl flex flex-col gap-4 justify-between">
          <div>
            <h3 className="font-headline-lg-mobile text-[var(--primary)] mb-1">
              {university.degree}
            </h3>
            <p className="font-body-sm text-[var(--secondary)] mb-4">
              <a
                href={university.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ textDecorationColor: 'var(--secondary)', textUnderlineOffset: '4px' }}
              >
                {university.college}
              </a>{' '}
              • {university.years}
            </p>
            <p className="font-body-sm text-[var(--on-surface-variant)] mt-1 bg-[rgba(255,255,255,0.03)] border border-[rgba(182,201,219,0.1)] rounded-lg p-3 inline-block font-mono">
              Current CGPA: <strong className="text-[var(--secondary)]">{university.cgpa}</strong> (up to {university.semesterLimit})
            </p>
          </div>
          <div className="text-xs text-[var(--on-surface-variant)] opacity-60">
            * {university.description}
          </div>
        </div>
      </div>
    </section>
  );
}
