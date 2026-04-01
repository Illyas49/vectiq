import { useScrollReveal } from '../hooks/useScrollReveal';
import { useParallax } from '../hooks/useParallax';

export default function Worldview() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const { ref: pRef, offset } = useParallax(0.06);

  return (
    <section
      ref={(el) => {
        (ref as React.MutableRefObject<HTMLElement | null>).current = el;
        (pRef as React.MutableRefObject<HTMLElement | null>).current = el;
      }}
      className={`reveal ${isVisible ? 'visible' : ''} py-12 md:py-16 relative`}
    >
      <div
        className="absolute right-[-10%] top-[-30%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,160,0.03) 0%, transparent 60%)',
          transform: `translateY(${offset}px)`,
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="gradient-line mb-12" />

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="glow-dot" />
              <p className="text-micro uppercase text-text-tertiary tracking-[0.12em]">
                The Landscape
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <p className="text-heading-2 text-text-primary mb-5 font-medium leading-[1.3]">
              Gaming acquisition is fragmented across channels, content formats,
              regulatory frameworks, and partnership structures.
            </p>
            <p className="text-body-lg text-text-secondary max-w-2xl leading-[1.75]">
              Most operators rely on a patchwork of vendors, agencies, and internal
              teams that move slowly and lack the operational flexibility this market
              demands. Vectiq is built differently -- a focused media and acquisition
              infrastructure designed to operate across that complexity with speed,
              precision, and adaptability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
