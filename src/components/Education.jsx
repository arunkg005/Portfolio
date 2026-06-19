import React from 'react';

export default function Education() {
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
                href="https://greenwayroorkee.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ textDecorationColor: 'var(--secondary)', textUnderlineOffset: '4px' }}
              >
                Greenway Modern School, Roorkee
              </a>{' '}
              • CBSE
            </p>
          </div>

          {/* Subcards inside schooling */}
          <div className="school-subcards flex flex-col sm:flex-row gap-4 mt-2">
            <div className="school-subcard flex-1 p-4 rounded-lg flex flex-col gap-1.5">
              <h4 className="font-['Sora'] text-sm font-semibold text-[var(--primary)]">Class X</h4>
              <div className="subcard-meta font-mono text-[11px] text-[var(--secondary)]">CBSE • 2020</div>
              <div className="subcard-result text-xs font-medium text-[var(--on-surface-variant)]">
                Result: 93.40%
                <a
                  href="assets/cbse_10th_result_2020.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[var(--secondary)] underline ml-2"
                >
                  View
                </a>
              </div>
            </div>

            <div className="school-subcard flex-1 p-4 rounded-lg flex flex-col gap-1.5">
              <h4 className="font-['Sora'] text-sm font-semibold text-[var(--primary)]">Class XII</h4>
              <div className="subcard-meta font-mono text-[11px] text-[var(--secondary)]">CBSE • 2022</div>
              <div className="subcard-result text-xs font-medium text-[var(--on-surface-variant)]">
                Result: 74.80%
                <a
                  href="assets/cbse_12th_result_2022.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[var(--secondary)] underline ml-2"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2 - B.Tech Card */}
        <div className="education-card p-8 rounded-2xl flex flex-col gap-4 justify-between">
          <div>
            <h3 className="font-headline-lg-mobile text-[var(--primary)] mb-1">
              B.Tech in Computer Science &amp; Engineering
            </h3>
            <p className="font-body-sm text-[var(--secondary)] mb-4">
              <a
                href="https://www.mmumullana.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ textDecorationColor: 'var(--secondary)', textUnderlineOffset: '4px' }}
              >
                Maharishi Markandeshwar University, Ambala
              </a>{' '}
              • 2023 - 2027
            </p>
            <p className="font-body-sm text-[var(--on-surface-variant)] mt-1 bg-[rgba(255,255,255,0.03)] border border-[rgba(182,201,219,0.1)] rounded-lg p-3 inline-block font-mono">
              Current CGPA: <strong className="text-[var(--secondary)]">7.88</strong> (up to 5th Semester)
            </p>
          </div>
          <div className="text-xs text-[var(--on-surface-variant)] opacity-60">
            * Focusing on core CSE, ML applications, and backend engineering
          </div>
        </div>
      </div>
    </section>
  );
}
