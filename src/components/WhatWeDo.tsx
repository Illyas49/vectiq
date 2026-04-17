import { useScrollReveal } from '../hooks/useScrollReveal';

const capabilities = [
  {
    num: '01',
    title: 'Paid Media',
    text: 'Campaign architecture and media buying across Meta, Google, TikTok, and programmatic channels — built for regulated verticals with complex compliance requirements.',
  },
  {
    num: '02',
    title: 'Search & Content',
    text: 'Owned and operated content properties engineered for high-intent organic visibility. SEO infrastructure that compounds over time and adapts to shifting search landscapes.',
  },
  {
    num: '03',
    title: 'Interactive Acquisition',
    text: 'Gamified acquisition environments that engage users before traditional conversion flows — capturing intent earlier and feeding scalable systems across paid, search, and content.',
  },
  {
    num: '04',
    title: 'Commercial Flexibility',
    text: 'CPA, revenue share, hybrid, and custom structures aligned to operator economics and market conditions — not locked into a single pricing model.',
  },
];

export default function Capabilities() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="capabilities"
      ref={ref}
      className={`reveal ${isVisible ? 'visible' : ''} py-10 md:py-14`}
    >
      <div className="section-container">
        <div className="mb-8 md:mb-10">
          <p className="text-label uppercase text-accent mb-4">Capabilities</p>
          <h2 className="text-h1 text-white max-w-lg">
            Four disciplines, one integrated system
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {capabilities.map((cap) => (
            <div
              key={cap.num}
              className="group rounded-xl border border-border bg-surface-1/40 p-6 sm:p-8 hover:border-border-strong hover:bg-surface-2/60 transition-all duration-400"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-accent/70">{cap.num}</span>
                <h3 className="text-h3 text-white group-hover:text-accent transition-colors duration-300">
                  {cap.title}
                </h3>
              </div>
              <p className="text-body text-zinc-400 leading-relaxed">
                {cap.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
