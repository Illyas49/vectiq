import { useScrollReveal } from '../hooks/useScrollReveal';
import { useParallax } from '../hooks/useParallax';

const principles = [
  {
    title: 'Lean execution',
    text: 'Small team, high output. We operate without layers of account management or unnecessary process. Decisions are made quickly and acted on immediately.',
  },
  {
    title: 'Fast launch cycles',
    text: 'New campaigns, content properties, and distribution channels go live in days, not months. We test aggressively and iterate based on real performance data.',
  },
  {
    title: 'Selective onboarding',
    text: 'We work with a limited number of partners at any given time. This allows us to go deep, align properly, and maintain quality across every channel we operate.',
  },
  {
    title: 'Flexible structures',
    text: 'CPA, revenue share, hybrid -- we structure engagements around what makes sense for the operator and the market, not around a fixed pricing model.',
  },
];

export default function OperatingModel() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const { ref: pRef, offset } = useParallax(0.08);

  return (
    <section
      ref={(el) => {
        (ref as React.MutableRefObject<HTMLElement | null>).current = el;
        (pRef as React.MutableRefObject<HTMLElement | null>).current = el;
      }}
      className={`reveal ${isVisible ? 'visible' : ''} py-12 md:py-16 relative overflow-hidden`}
    >
      <div
        className="absolute left-[-15%] bottom-[-20%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,160,0.03) 0%, transparent 60%)',
          transform: `translateY(${offset}px)`,
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="glow-dot" />
            <p className="text-micro uppercase text-text-tertiary tracking-[0.12em]">
              Operating Model
            </p>
          </div>
          <h2 className="text-heading-1 text-text-primary max-w-md">
            Built to move quickly
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {principles.map((p, i) => (
            <div key={p.title} className="group relative pl-6">
              <div
                className="absolute left-0 top-0 h-full w-px bg-line group-hover:bg-accent/30 transition-colors duration-700"
                style={{ transitionDelay: `${i * 50}ms` }}
              />
              <h3 className="text-heading-3 text-text-primary mb-2 group-hover:text-accent transition-colors duration-500">
                {p.title}
              </h3>
              <p className="text-body text-text-secondary leading-[1.75]">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
