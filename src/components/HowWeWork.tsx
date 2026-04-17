import { useScrollReveal } from '../hooks/useScrollReveal';

const principles = [
  {
    title: 'Lean execution',
    text: 'Small team, high output. No layers of account management or unnecessary process. Decisions are made quickly and acted on immediately.',
  },
  {
    title: 'Fast launch cycles',
    text: 'New campaigns, content properties, and distribution channels go live in days, not months. We test aggressively and iterate based on real performance data.',
  },
  {
    title: 'Selective onboarding',
    text: 'We work with a limited number of partners at any given time, allowing us to go deep, align properly, and maintain quality across every channel.',
  },
  {
    title: 'Flexible structures',
    text: 'CPA, revenue share, hybrid — we structure engagements around what makes sense for the operator and the market, not around a fixed pricing model.',
  },
];

export default function OperatingModel() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="approach"
      ref={ref}
      className={`reveal ${isVisible ? 'visible' : ''} py-10 md:py-14`}
    >
      <div className="section-container">
        <div className="border-t border-border pt-8 md:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-label uppercase text-accent mb-4">Approach</p>
              <h2 className="text-h1 text-white">
                Built to move quickly
              </h2>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
              {principles.map((p) => (
                <div key={p.title}>
                  <h3 className="text-h3 text-white mb-2">{p.title}</h3>
                  <p className="text-body text-zinc-400 leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
