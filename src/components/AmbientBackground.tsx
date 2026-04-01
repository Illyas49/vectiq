import { useEffect, useState } from 'react';

export default function AmbientBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const drift1 = scrollY * 0.02;
  const drift2 = scrollY * -0.015;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="ambient-orb w-[700px] h-[700px] opacity-[0.02]"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,160,0.25), transparent 60%)',
          left: '55%',
          top: '15%',
          transform: `translate(${drift1 * 2}px, ${drift1 * -3}px)`,
        }}
      />
      <div
        className="ambient-orb w-[500px] h-[500px] opacity-[0.015]"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,196,0.25), transparent 60%)',
          left: '10%',
          top: '50%',
          transform: `translate(${drift2 * 2}px, ${drift2 * 3}px)`,
        }}
      />
      <div
        className="ambient-orb w-[400px] h-[400px] opacity-[0.012]"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,160,0.2), transparent 60%)',
          right: '5%',
          top: '70%',
          transform: `translate(${drift1}px, ${drift2 * 2}px)`,
        }}
      />
    </div>
  );
}
