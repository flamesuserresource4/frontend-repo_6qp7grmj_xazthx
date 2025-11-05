import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Starfield = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext('2d');

    let w = (c.width = c.offsetWidth);
    let h = (c.height = c.offsetHeight);

    const stars = Array.from({ length: 140 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 0.6 + 0.4,
      r: Math.random() * 1.4 + 0.2,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#0a0e1a';
      ctx.fillRect(0, 0, w, h);
      for (const s of stars) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * s.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(210,220,255,${0.5 * s.z})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      w = c.width = c.offsetWidth;
      h = c.height = c.offsetHeight;
    };

    draw();
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />;
};

const Values = () => {
  const items = ['Curiosity', 'Empathy', 'Creativity', 'Perseverance'];
  return (
    <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 px-6 md:grid-cols-4">
      {items.map((v, i) => (
        <motion.div
          key={v}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: i * 0.1, duration: 0.8 }}
          className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 text-center text-slate-100"
        >
          <span className="relative z-10 text-sm">{v}</span>
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(300px_200px_at_center,rgba(200,210,255,0.12),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </motion.div>
      ))}
    </div>
  );
};

const Finale = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end end'] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <section ref={ref} className="relative min-h-[180vh] w-full overflow-hidden bg-[#0a0e1a] text-white">
      <Starfield />

      {/* Creation */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-3 text-center text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          The Creation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mx-auto max-w-2xl text-center text-slate-300"
        >
          Leading teams, shaping a sign-to-speech glove — calm confidence into clarity.
        </motion.p>

        {/* Symbolic rotating halo representing the glove presence */}
        <div className="mt-10 flex items-center justify-center">
          <motion.div
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
            className="relative h-40 w-40 rounded-full"
          >
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,rgba(180,200,255,0.2),rgba(250,220,150,0.15),rgba(100,120,200,0.2))] blur-md" />
            <div className="absolute inset-6 rounded-full bg-[#0d1226] ring-1 ring-white/10" />
          </motion.div>
        </div>
      </div>

      {/* Reflection */}
      <div className="relative z-10 mt-24">
        <motion.div style={{ y, opacity }} className="mx-auto max-w-3xl px-6 text-center">
          <h3 className="mb-4 text-2xl font-semibold tracking-tight">The Reflection</h3>
          <p className="text-slate-300">
            A horizon of soft gradients — values that guide every decision and design.
          </p>
        </motion.div>
        <div className="mt-10">
          <Values />
        </div>
      </div>

      {/* Vision */}
      <div className="relative z-10 mt-28 flex flex-col items-center px-6 pb-32 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-4 text-2xl font-semibold tracking-tight"
        >
          The Vision
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mx-auto max-w-2xl text-slate-300"
        >
          The camera moves ever-forward — endless possibility unfolding like a constellation.
        </motion.p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {['Building tech that listens', 'Creating games that feel human', 'Designing experiences that move people'].map(
            (t) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.8 }}
                className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200 ring-1 ring-white/10"
              >
                {t}
              </motion.span>
            )
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.6, duration: 1.6 }}
          className="pointer-events-none mt-20 text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl"
        >
          Rishika Lawankar
        </motion.div>
      </div>
    </section>
  );
};

export default Finale;
