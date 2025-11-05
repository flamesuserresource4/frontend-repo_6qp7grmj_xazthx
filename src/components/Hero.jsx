import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#0a0e1a] text-white"
    >
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Ethereal gradient atmosphere overlay (non-blocking) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,25,50,0.55),rgba(10,14,26,0.95))]"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="select-none font-['Mona_Sans',Inter,ui-sans-serif] text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl md:text-6xl"
        >
          <motion.span
            initial={{ opacity: 0.6 }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="bg-gradient-to-r from-blue-200 via-slate-100 to-amber-200 bg-clip-text text-transparent"
          >
            Rishika Lawankar
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base"
        >
          A cinematic portfolio — calm, mysterious, and emotionally immersive. Drift through a
          story of curiosity, creation, and vision.
        </motion.p>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-3 text-slate-300"
        >
          <span className="text-xs tracking-widest">SCROLL</span>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="h-10 w-[2px] rounded-full bg-gradient-to-b from-slate-400/80 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
