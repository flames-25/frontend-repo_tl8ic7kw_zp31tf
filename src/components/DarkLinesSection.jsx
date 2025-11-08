import React, { useEffect, useRef } from 'react';

// Section with majority black theme where thin straight lines animate
// transitioning from black to white.
export default function DarkLinesSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let raf = 0;

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const lines = Array.from({ length: 80 }, () => ({
      x1: Math.random(),
      y1: Math.random(),
      x2: Math.random(),
      y2: Math.random(),
      t: Math.random(),
      speed: 0.2 + Math.random() * 0.6,
      width: 0.5 + Math.random() * 1.2,
    }));

    const draw = (ts) => {
      const { width: w, height: h } = canvas;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, w, h);

      // black base
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, w, h);

      lines.forEach(l => {
        l.t += (l.speed * 0.005);
        if (l.t > 1) l.t -= 1;
        // color transitions between near-black and white
        const c = Math.floor(20 + 220 * Math.abs(Math.sin(l.t * Math.PI * 2)));
        ctx.strokeStyle = `rgb(${c},${c},${c})`;
        ctx.lineWidth = l.width;

        const x1 = l.x1 * w, y1 = l.y1 * h, x2 = l.x2 * w, y2 = l.y2 * h;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      });

      raf = requestAnimationFrame(draw);
    };

    init();
    raf = requestAnimationFrame(draw);

    const onResize = () => init();
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section id="deep" className="relative min-h-screen flex items-center justify-center text-white">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10 mx-auto w-full max-w-3xl px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold">Deeper me</h2>
        <p className="mt-4 text-white/90">
          A little more description, thoughts, and links. Majority black so the vibe shifts.
        </p>
        <ul className="mt-6 space-y-2 text-white/90">
          <li>
            <a className="underline decoration-white/40 underline-offset-4 hover:text-white" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          </li>
          {/* Add other socials you own, no LinkedIn or email shown */}
        </ul>
      </div>
    </section>
  );
}
