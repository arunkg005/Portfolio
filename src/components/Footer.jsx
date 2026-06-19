import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="simple-footer w-full py-8 px-6 text-center bg-[var(--background)] shadow-[var(--neu-up)] mt-8 relative z-10">
      <p className="font-['Hanken_Grotesk'] text-xs text-[var(--on-surface-variant)] opacity-60 m-0">
        &copy; {currentYear} Arun Kumar Gupta. All rights reserved.
      </p>
    </footer>
  );
}
