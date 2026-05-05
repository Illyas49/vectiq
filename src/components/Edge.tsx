import { useScrollReveal } from '../hooks/useScrollReveal';

const partners = [
  {
    type: 'Sportsbook Operators',
    description: 'Licensed operators seeking incremental player volume through high-quality, performance-based acquisition channels outside of their internal marketing teams.',
  },
  {
    type: 'Casino Gaming Platforms',
    description: 'Online casino operators looking for sustainable, compliant lead generation that delivers depositing players with strong retention metrics.',
  },
  {
    type: 'Affiliate Programs',
    description: 'Operator-side partnership managers seeking reliable media sources with transparent reporting, verified traffic quality, and regulatory compliance.',
  },
  {
    type: 'Market-Entry Teams',
    description: 'Operators launching in newly regulated states who need established acquisition infrastructure with local market knowledge and existing organic rankings.',
  },
];

export default function Partners() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="partners"
      ref={ref}
      className={`reveal ${isVisible ? 'visible' : ''} py-10 md:py-14`}
    >
      <div className="section-container">
        <div className="border-t border-border pt-8 md:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-8">
            <div className="lg:col-span-5">
              <p className="text-label uppercase text-accent mb-4">Who we work with</p>
              <h2 className="text-h1 text-white">Our partners</h2>
            </div>
            <div className="lg:col-span-7 flex items-end">
              <p className="text-body-lg text-zinc-400 max-w-lg">
                We operate at the intersection of digital media, performance marketing,
                and regulated online gaming across North America.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {partners.map((p) => (
              <div
                key={p.type}
                className="group rounded-xl border border-border bg-surface-1/40 p-6 sm:p-8 hover:border-border-strong hover:bg-surface-2/60 transition-all duration-400"
              >
                <h3 className="text-h3 text-white mb-2 group-hover:text-accent transition-colors duration-300">
                  {p.type}
                </h3>
                <p className="text-body text-zinc-400 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
