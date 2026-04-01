import { useEffect, useRef, useState } from 'react';

function GridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;
    let mouseX = 0.5;
    let mouseY = 0.5;

    function resize() {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
    }

    function draw() {
      if (!canvas || !ctx) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const spacing = 50;
      const cols = Math.ceil(w / spacing) + 1;
      const rows = Math.ceil(h / spacing) + 1;
      const cx = w * (0.35 + mouseX * 0.3);
      const cy = h * (0.25 + mouseY * 0.3);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          const dx = (x - cx) / w;
          const dy = (y - cy) / h;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const wave = Math.sin(time * 0.4 + i * 0.2 + j * 0.12) * 0.5 + 0.5;
          const pulse = Math.sin(time * 0.25 + dist * 6) * 0.3 + 0.7;
          const fade = Math.max(0, 1 - dist * 2);
          const alpha = fade * wave * pulse * 0.12;

          if (alpha > 0.003) {
            const r = 1 + fade * wave * 0.6;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(56, 189, 160, ${alpha})`;
            ctx.fill();
          }

          if (i < cols - 1) {
            const nx = (i + 1) * spacing;
            const ndx = (nx - cx) / w;
            const nDist = Math.sqrt(ndx * ndx + dy * dy);
            const nFade = Math.max(0, 1 - nDist * 2);
            const lineAlpha = Math.min(alpha, nFade * wave * pulse * 0.12) * 0.25;
            if (lineAlpha > 0.002) {
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(nx, y);
              ctx.strokeStyle = `rgba(56, 189, 160, ${lineAlpha})`;
              ctx.lineWidth = 0.4;
              ctx.stroke();
            }
          }

          if (j < rows - 1) {
            const ny = (j + 1) * spacing;
            const ndy = (ny - cy) / h;
            const nDist = Math.sqrt(dx * dx + ndy * ndy);
            const nFade = Math.max(0, 1 - nDist * 2);
            const lineAlpha = Math.min(alpha, nFade * wave * pulse * 0.12) * 0.25;
            if (lineAlpha > 0.002) {
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(x, ny);
              ctx.strokeStyle = `rgba(56, 189, 160, ${lineAlpha})`;
              ctx.lineWidth = 0.4;
              ctx.stroke();
            }
          }
        }
      }

      const particleCount = 8;
      for (let p = 0; p < particleCount; p++) {
        const px = w * (0.1 + 0.8 * ((Math.sin(time * 0.15 + p * 2.1) + 1) / 2));
        const py = h * (0.05 + 0.9 * ((Math.cos(time * 0.12 + p * 1.7) + 1) / 2));
        const pAlpha = 0.1 + 0.08 * Math.sin(time + p);
        ctx.beginPath();
        ctx.arc(px, py, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 160, ${pAlpha})`;
        ctx.fill();
      }

      time += 0.008;
      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const parallax = Math.min(scrollY * 0.3, 200);
  const opacity = Math.max(0, 1 - scrollY / 700);

  return (
    <section className="relative min-h-screen flex items-end pb-16 sm:pb-24 lg:items-center lg:pb-0 overflow-hidden">
      <div
        className="absolute top-[-10%] left-[5%] w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,160,0.06) 0%, transparent 55%)',
          transform: `translate(0, ${parallax * 0.5}px)`,
        }}
      />
      <div
        className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,196,0.04) 0%, transparent 55%)',
          transform: `translate(0, ${parallax * 0.3}px)`,
        }}
      />

      <GridCanvas />

      <div className="scan-line" style={{ animationDelay: '0s' }} />
      <div className="scan-line" style={{ animationDelay: '5s' }} />

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-surface-0 via-surface-0/80 to-transparent z-[1]" />

      <div
        className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 w-full pt-32 lg:pt-0"
        style={{ transform: `translateY(${parallax * -0.15}px)`, opacity }}
      >
        <div className="max-w-4xl">
          <h1
            className={`text-display text-text-primary mb-8 transition-all duration-[1.2s] delay-200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Acquisition systems for gaming and
            <span className="bg-gradient-to-r from-accent to-accent-bright bg-clip-text text-transparent"> sports betting</span> brands
          </h1>

          <p
            className={`text-body-lg text-text-secondary max-w-xl mb-12 transition-all duration-[1.2s] delay-[400ms] ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Vectiq develops and operates acquisition channels across paid media,
            search, content, and partner distribution.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-start gap-8 transition-all duration-[1.2s] delay-[600ms] ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 text-[15px] font-medium text-text-primary px-7 py-3.5 rounded-full border border-line-strong hover:border-accent/40 hover:bg-accent/[0.04] transition-all duration-500"
            >
              Get in touch
              <span className="text-text-tertiary group-hover:text-accent group-hover:translate-x-1 transition-all duration-300">&rarr;</span>
            </a>
            <span className="text-micro uppercase text-text-tertiary tracking-wider self-center">
              Onboarding select partners across North America
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
