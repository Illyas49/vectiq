import { useScrollReveal } from '../hooks/useScrollReveal';
import { useScrollProgress } from '../hooks/useParallax';

const capabilities = [
  {
    label: '01',
    title: 'Paid Media',
    text: 'Campaign architecture and media buying across Meta, Google, TikTok, and programmatic channels -- built for regulated verticals with complex compliance requirements.',
  },
  {
    label: '02',
    title: 'Search & Content',
    text: 'Owned and operated content properties engineered for high-intent organic visibility. SEO infrastructure that compounds over time and adapts to shifting search landscapes.',
  },
  {
    label: '03',
    title: 'Interactive Acquisition',
    text: 'Gamified acquisition environments that engage users before traditional conversion flows -- capturing intent earlier, building first-party audiences, and feeding scalable systems across paid, search, and content ecosystems.',
  },
  {
    label: '04',
    title: 'Commercial Flexibility',
    text: 'Engagement models that reflect how the industry actually works -- CPA, revenue share, hybrid, and custom structures aligned to operator economics and market conditions.',
  },
];

export default function Capabilities() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const { ref: progressRef, progress } = useScrollProgress();

  return (
    <section
      ref={(el) => {
        (ref as React.MutableRefObject<HTMLElement | null>).current = el;
        (progressRef as React.MutableRefObject<HTMLElement | null>).current = el;
      }}
      className={`reveal ${isVisible ? 'visible' : ''} py-12 md:py-16 relative`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 mb-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="glow-dot" />
              <p className="text-micro uppercase text-text-tertiary tracking-[0.12em]">
                Capabilities
              </p>
            </div>
            <h2 className="text-heading-1 text-text-primary">
              What we operate
            </h2>
          </div>
          <div className="lg:col-span-8 flex items-end">
            <p className="text-body-lg text-text-secondary max-w-lg">
              Four interconnected disciplines, each designed for the
              specific dynamics of regulated gaming markets.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-surface-3 overflow-hidden">
            <div
              className="w-full bg-gradient-to-b from-accent/40 to-accent/10 transition-all duration-100"
              style={{ height: `${Math.min(100, progress * 130)}%` }}
            />
          </div>

          <div className="pl-8 md:pl-12">
            {capabilities.map((cap, i) => (
              <div
                key={cap.label}
                className={`group grid lg:grid-cols-12 gap-4 lg:gap-12 py-7 border-b border-line-subtle relative transition-colors duration-500 hover:bg-surface-1/30 ${
                  i === 0 ? 'border-t' : ''
                }`}
              >
                <div className="absolute left-[-8px] md:left-[-12px] top-7 w-[5px] h-[5px] rounded-full bg-surface-4 group-hover:bg-accent group-hover:shadow-[0_0_10px_rgba(56,189,160,0.5)] transition-all duration-500" />

                <div className="lg:col-span-1">
                  <span className="text-micro text-text-tertiary font-mono">{cap.label}</span>
                </div>
                <div className="lg:col-span-3">
                  <h3 className="text-heading-3 text-text-primary group-hover:text-accent transition-colors duration-500">
                    {cap.title}
                  </h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-body text-text-secondary leading-[1.75] max-w-xl group-hover:text-text-secondary/90 transition-colors duration-500">
                    {cap.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
