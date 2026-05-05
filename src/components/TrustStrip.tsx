import { useScrollReveal } from '../hooks/useScrollReveal';

const stats = [
  { value: '50+', detail: 'High-ranking content properties' },
  { value: 'Tier 1', detail: 'Organic positions across target keywords' },
  { value: 'North America', detail: 'Regulated state-by-state coverage' },
  { value: 'Performance', detail: 'CPA, revenue share, and hybrid models' },
];

export default function Worldview() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className={`reveal ${isVisible ? 'visible' : ''} py-10 md:py-14`}>
      <div className="section-container">
        <div className="border border-border rounded-2xl bg-surface-1/50 p-6 sm:p-8 md:p-10">
          <p className="text-body-lg text-zinc-300 max-w-3xl mb-10 leading-relaxed">
            The online sports betting and gaming market is growing rapidly across
            North America as new states regulate. Operators need reliable, compliant
            acquisition channels that deliver high-value players at scale. Vectiq
            provides that infrastructure through a portfolio of owned and operated
            digital media properties built for organic visibility and conversion.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.value} className="border-l-2 border-accent/30 pl-4">
                <p className="text-sm font-semibold text-white mb-1">{s.value}</p>
                <p className="text-sm text-zinc-500">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
