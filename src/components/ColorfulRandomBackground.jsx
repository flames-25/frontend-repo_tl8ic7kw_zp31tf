import React, { useEffect, useRef } from 'react';

// A colorful randomized background using particles + gradient strokes
export default function ColorfulRandomBackground({ density = 60 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let frame = 0;
    let raf = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const dots = Array.from({ length: density }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 1 + Math.random() * 2,
      hue: Math.random() * 360,
      speed: 0.2 + Math.random() * 0.6,
      dir: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.setTransform(1, 0, 0, 1, 0, 0);

      // fade trail for softness
      ctx.fillStyle = 'rgba(255,255,255,0.25)';
      ctx.fillRect(0, 0, w, h);

      dots.forEach(d => {
        // move
        d.x += Math.cos(d.dir) * 0.0015 * d.speed;
        d.y += Math.sin(d.dir) * 0.0015 * d.speed;
        if (d.x < 0 || d.x > 1) d.dir = Math.PI - d.dir;
        if (d.y < 0 || d.y > 1) d.dir = -d.dir;

        // color drift
        d.hue += 0.2;
        const color = `hsla(${d.hue % 360}, 80%, 55%, 0.6)`;

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(d.x * w, d.y * h, d.r, 0, Math.PI * 2);
        ctx.fill();
      });

      frame++;
      raf = requestAnimationFrame(draw);
    };

    resize();
    // paint white base
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    raf = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [density]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="pointer-events-none block" />
    </div>
  );
}
