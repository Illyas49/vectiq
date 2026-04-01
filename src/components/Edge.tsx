import { useScrollReveal } from '../hooks/useScrollReveal';

const partners = [
  {
    type: 'Operators',
    description: 'Sportsbooks and gaming platforms looking for acquisition infrastructure outside of their internal teams.',
  },
  {
    type: 'Affiliate Programs',
    description: 'Operator-side affiliate managers seeking reliable, compliant volume from quality media sources.',
  },
  {
    type: 'Media Partners',
    description: 'Content publishers, comparison sites, and traffic sources interested in structured distribution relationships.',
  },
  {
    type: 'Market-Entry Teams',
    description: 'Operators launching in new jurisdictions who need acquisition channels that understand the local regulatory landscape.',
  },
];

export default function Partners() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className={`reveal ${isVisible ? 'visible' : ''} py-12 md:py-16`}>
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="gradient-line mb-10" />

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 mb-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="glow-dot" />
              <p className="text-micro uppercase text-text-tertiary tracking-[0.12em]">
                Who We Work With
              </p>
            </div>
            <h2 className="text-heading-1 text-text-primary">
              Our partners
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-end">
            <p className="text-body-lg text-text-secondary max-w-lg">
              We operate at the intersection of media, technology, and regulated
              gaming -- working closely with a focused group of industry participants.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-line/50 rounded-xl overflow-hidden">
          {partners.map((p) => (
            <div
              key={p.type}
              className="glass-card p-8 md:p-10 group relative overflow-hidden rounded-none"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 30% 0%, rgba(56,189,160,0.04) 0%, transparent 60%)' }}
              />
              <h3 className="relative text-heading-3 text-text-primary mb-3 group-hover:text-accent transition-colors duration-500">
                {p.type}
              </h3>
              <p className="relative text-body text-text-secondary leading-[1.75]">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
