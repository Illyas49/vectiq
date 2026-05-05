import { useScrollReveal } from '../hooks/useScrollReveal';

const principles = [
  {
    title: 'Data-driven execution',
    text: 'Every decision is informed by real performance data. We invest in analytics infrastructure that gives operators full transparency into acquisition metrics, player quality, and lifetime value indicators.',
  },
  {
    title: 'Regulatory expertise',
    text: 'We operate across multiple regulated jurisdictions with compliance-first processes. Our teams understand state-level licensing requirements, responsible gaming obligations, and advertising standards.',
  },
  {
    title: 'Scalable infrastructure',
    text: 'Our technology platform is purpose-built to launch new properties, enter new markets, and scale existing channels without linear cost increases. Speed to market is a core competitive advantage.',
  },
  {
    title: 'Selective partnerships',
    text: 'We work with a limited number of operator partners at any given time. This allows us to dedicate meaningful resources, align on shared objectives, and deliver measurable results.',
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
                How we operate
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
