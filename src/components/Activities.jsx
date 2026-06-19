import React from 'react';

export default function Activities() {
  const activities = [
    {
      icon: 'music_note',
      title: 'Singing',
      desc: 'Vocal performances and creative musical hobbies.',
    },
    {
      icon: 'psychology',
      title: 'Chess',
      desc: 'Strategic, tactical, and analytical gaming skills.',
    },
    {
      icon: 'sports_tennis',
      title: 'Badminton',
      desc: 'Active athletic recreation and physical fitness.',
    },
    {
      icon: 'emoji_events',
      title: 'Quizzes & Hackathons',
      desc: 'Participating in competitive quiz bowls and programming hackathons.',
    },
  ];

  return (
    <section id="activities" className="animate-on-scroll mb-32">
      <div className="section-header mb-12">
        <h2 className="font-headline-lg text-[var(--primary)]">Extracurricular Activities</h2>
        <p className="font-body-md text-[var(--on-surface-variant)] mt-2">My hobbies and competitive participations</p>
      </div>

      <div className="activities-grid grid grid-cols-2 md:grid-cols-4 gap-4">
        {activities.map((act, idx) => (
          <div
            key={idx}
            className="activity-card bg-[var(--card-bg)] p-6 py-8 rounded-2xl border border-[var(--card-border)] shadow-[var(--card-shadow)] flex flex-col items-center text-center gap-3 transition-all duration-300 hover:-translate-y-1.5"
          >
            <div className="activity-icon w-12 h-12 rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(182,201,219,0.15)] flex items-center justify-center text-[var(--secondary)]">
              <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                {act.icon}
              </span>
            </div>
            <h4 className="text-[var(--primary)] text-sm font-bold mt-2">{act.title}</h4>
            <p className="text-xs leading-relaxed text-[var(--on-surface-variant)]">{act.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
