export default function Footer() {
  return (
    <footer className="py-10 border-t border-line-subtle">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-baseline gap-4">
          <span className="text-caption text-text-primary font-semibold tracking-tight">
            Vectiq
          </span>
          <span className="text-micro text-text-tertiary uppercase tracking-wider">
            Performance Media
          </span>
        </div>
        <div className="flex items-center gap-8">
          <a
            href="#contact"
            className="text-caption text-text-tertiary hover:text-text-secondary transition-colors duration-500"
          >
            Contact
          </a>
          <a
            href="mailto:partnerships@vectiq.io"
            className="text-caption text-text-tertiary hover:text-text-secondary transition-colors duration-500"
          >
            partnerships@vectiq.io
          </a>
        </div>
      </div>
    </footer>
  );
}
