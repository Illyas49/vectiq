import { useScrollReveal } from '../hooks/useScrollReveal';
import { useParallax } from '../hooks/useParallax';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const { ref: pRef, offset } = useParallax(0.05);

  return (
    <section
      id="contact"
      ref={(el) => {
        (ref as React.MutableRefObject<HTMLElement | null>).current = el;
        (pRef as React.MutableRefObject<HTMLElement | null>).current = el;
      }}
      className={`reveal ${isVisible ? 'visible' : ''} py-16 md:py-24 relative overflow-hidden`}
    >
      <div
        className="absolute right-[10%] top-[10%] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,160,0.03) 0%, transparent 60%)',
          transform: `translateY(${offset}px)`,
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="gradient-line mb-12" />

        <div className="max-w-xl">
          <h2 className="text-heading-1 text-text-primary mb-5">
            Let's Talk
          </h2>
          <p className="text-body-lg text-text-secondary mb-10 leading-[1.75]">
            For operator, affiliate, and media partnership conversations,
            get in touch.
          </p>
          <a
            href="mailto:partnerships@vectiq.io"
            className="group inline-flex items-center gap-3 text-[15px] font-medium text-text-primary px-7 py-3.5 rounded-full border border-line-strong hover:border-accent/40 hover:bg-accent/[0.04] transition-all duration-500"
          >
            partnerships@vectiq.io
            <span className="text-text-tertiary group-hover:text-accent group-hover:translate-x-1 transition-all duration-300">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
