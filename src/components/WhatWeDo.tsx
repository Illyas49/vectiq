import { useScrollReveal } from '../hooks/useScrollReveal';

const capabilities = [
  {
    num: '01',
    title: 'Owned Media Properties',
    text: 'A portfolio of content-rich websites engineered to rank for high-intent sports betting and gaming keywords. Our properties attract qualified audiences through editorial authority, data-driven content, and sustained organic visibility.',
  },
  {
    num: '02',
    title: 'Paid Acquisition',
    text: 'Scalable media buying across Meta, Google, TikTok, and programmatic channels. Campaigns are built for regulated verticals with compliant creative workflows, state-level targeting, and full-funnel attribution.',
  },
  {
    num: '03',
    title: 'Player Lead Generation',
    text: 'Performance-based delivery of verified, high-value player leads to operator partners. Every lead is tracked from first touch through deposit, with transparent reporting and quality controls at each stage.',
  },
  {
    num: '04',
    title: 'Commercial Flexibility',
    text: 'CPA, revenue share, hybrid, and custom structures aligned to operator economics and market conditions. Engagements are designed around sustainable unit economics for both parties.',
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
            Full-spectrum player acquisition
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
