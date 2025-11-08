import React, { useEffect, useRef } from 'react';

// A subtle abstract background of flowing lines with varying opacity.
// Drawn on canvas to keep it lightweight and randomized on resize.
export default function AbstractLinesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Background mostly white
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, w, h);

      const lines = 45; // number of lines
      for (let i = 0; i < lines; i++) {
        const startX = Math.random() * w;
        const startY = Math.random() * h;
        const endX = startX + (Math.random() * w * 0.4 - w * 0.2);
        const endY = startY + (Math.random() * h * 0.4 - h * 0.2);
        const cp1x = startX + (Math.random() * w * 0.3 - w * 0.15);
        const cp1y = startY + (Math.random() * h * 0.3 - h * 0.15);
        const cp2x = endX + (Math.random() * w * 0.3 - w * 0.15);
        const cp2y = endY + (Math.random() * h * 0.3 - h * 0.15);

        // Varying transparency to avoid clashing with text
        const alpha = 0.05 + Math.random() * 0.08; // 0.05 - 0.13
        ctx.strokeStyle = `rgba(0,0,0,${alpha})`;
        ctx.lineWidth = 1 + Math.random() * 1.5;

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
        ctx.stroke();
      }

      // Add a soft vignette to ease readability near edges
      const grad = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.2, w / 2, h / 2, Math.max(w, h) * 0.8);
      grad.addColorStop(0, 'rgba(255,255,255,0)');
      grad.addColorStop(1, 'rgba(255,255,255,0.55)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    };

    draw();
    const onResize = () => draw();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="pointer-events-none block" />
    </div>
  );
}
