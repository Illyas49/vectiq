import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(52,211,153,0.07), transparent)',
        }}
      />

      <div className="section-container relative z-10 w-full py-32 sm:py-40">
        <div className="max-w-3xl">
          <p
            className={`text-label uppercase text-accent mb-6 transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Acquisition infrastructure
          </p>

          <h1
            className={`text-display text-white mb-8 transition-all duration-700 delay-100 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Performance systems for gaming &amp; sports betting
          </h1>

          <p
            className={`text-body-lg text-zinc-400 max-w-xl mb-12 transition-all duration-700 delay-200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Vectiq develops and operates acquisition channels across paid media,
            search, content, and partner distribution — built for regulated markets.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-surface-0 bg-accent hover:bg-accent-muted px-6 py-3 rounded-lg transition-colors duration-300"
            >
              Partner with us
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-px">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white px-6 py-3 rounded-lg border border-border hover:border-border-strong transition-all duration-300"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-0 to-transparent" />
    </section>
  );
}
