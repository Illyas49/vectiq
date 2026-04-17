import { useScrollReveal } from '../hooks/useScrollReveal';

const stats = [
  { value: 'Paid Media', detail: 'Meta, Google, TikTok, programmatic' },
  { value: 'Search & Content', detail: 'Owned properties, SEO infrastructure' },
  { value: 'Partner Networks', detail: 'Affiliate programs, distribution' },
  { value: 'North America', detail: 'Regulated state-by-state operations' },
];

export default function Worldview() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className={`reveal ${isVisible ? 'visible' : ''} py-16 md:py-24`}>
      <div className="section-container">
        <div className="border border-border rounded-2xl bg-surface-1/50 p-6 sm:p-8 md:p-10">
          <p className="text-body-lg text-zinc-300 max-w-3xl mb-10 leading-relaxed">
            Gaming acquisition is fragmented across channels, regulatory frameworks,
            and partnership structures. Most operators rely on a patchwork of vendors
            that move slowly. Vectiq is built differently — focused infrastructure
            designed to operate across that complexity with speed and precision.
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
