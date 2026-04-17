export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-white tracking-tight">Vectiq</span>
          <span className="text-xs text-zinc-600">&copy; {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#contact"
            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-300"
          >
            Contact
          </a>
          <a
            href="mailto:partnerships@vectiq.io"
            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-300"
          >
            partnerships@vectiq.io
          </a>
        </div>
      </div>
    </footer>
  );
}
