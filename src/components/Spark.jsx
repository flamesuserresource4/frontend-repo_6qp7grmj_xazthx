import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const words = ['imagination', 'creation', 'discovery'];

function useCursorLight() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  const style = {
    background: `radial-gradient(600px 600px at ${pos.x}px ${pos.y}px, rgba(120,140,255,0.12), transparent 60%)`,
  };
  return style;
}

const FloatingWord = ({ text, delay = 0 }) => (
  <motion.span
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.5 }}
    transition={{ delay, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    className="mx-2 select-none whitespace-nowrap rounded-full bg-white/5 px-3 py-1 text-sm text-slate-200 backdrop-blur-sm ring-1 ring-white/10"
  >
    {text}
  </motion.span>
);

const Particles = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.6 + 0.3,
      a: Math.random() * 0.6 + 0.2,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        g.addColorStop(0, `rgba(180,200,255,${p.a})`);
        g.addColorStop(1, 'rgba(20,30,60,0)');
        ctx.fillStyle = g;
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };

    draw();
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
};

const Spark = () => {
  const lightStyle = useCursorLight();
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0a0e1a] via-[#0b1020] to-[#0a0e1a] text-slate-100">
      <Particles />
      <div aria-hidden className="pointer-events-none absolute inset-0" style={lightStyle} />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="mb-6 font-['Inter',ui-sans-serif] text-3xl font-medium tracking-tight text-slate-100 sm:text-4xl"
        >
          The Spark
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1.1 }}
          className="mx-auto mb-10 max-w-2xl text-slate-300"
        >
          Where curiosity found its light. Thoughts drifted into ideas and ideas into wonder.
        </motion.p>

        <div className="flex flex-wrap items-center justify-center">
          {words.map((w, i) => (
            <FloatingWord key={w} text={w} delay={i * 0.25} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spark;
