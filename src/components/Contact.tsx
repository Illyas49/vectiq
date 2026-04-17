import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="contact"
      ref={ref}
      className={`reveal ${isVisible ? 'visible' : ''} py-10 md:py-14`}
    >
      <div className="section-container">
        <div className="border-t border-border pt-8 md:pt-10">
          <div className="max-w-xl">
            <p className="text-label uppercase text-accent mb-4">Contact</p>
            <h2 className="text-h1 text-white mb-5">
              Let's talk
            </h2>
            <p className="text-body-lg text-zinc-400 mb-10 leading-relaxed">
              For operator, affiliate, and media partnership conversations,
              reach out directly.
            </p>
            <a
              href="mailto:partnerships@vectiq.io"
              className="inline-flex items-center gap-3 text-sm font-medium text-surface-0 bg-accent hover:bg-accent-muted px-6 py-3 rounded-lg transition-colors duration-300"
            >
              partnerships@vectiq.io
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-px">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
