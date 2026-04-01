import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-surface-0/80 backdrop-blur-2xl border-b border-line-subtle shadow-[0_1px_40px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 h-[72px] flex items-center justify-between">
        <a href="#" className="text-text-primary font-semibold tracking-tight text-[17px] hover:text-accent transition-colors duration-500">
          Vectiq
        </a>
        <a
          href="#contact"
          className="text-caption text-text-tertiary hover:text-text-primary transition-colors duration-500"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
