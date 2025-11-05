import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, subtitle, code, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.4 }}
    transition={{ delay, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
    className="group relative rounded-xl border border-white/10 bg-white/5 p-5 text-left shadow-xl backdrop-blur-sm hover:border-white/20"
  >
    <div className="mb-2 flex items-center justify-between">
      <h3 className="font-medium text-slate-100">{title}</h3>
      <span className="text-xs text-slate-400">{subtitle}</span>
    </div>
    <pre className="mt-2 overflow-hidden rounded-lg bg-[#0b1020] p-3 text-xs leading-relaxed text-slate-300 ring-1 ring-white/10">
      <code>
        {code}
      </code>
    </pre>
    <motion.p
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      className="pointer-events-none absolute inset-x-0 bottom-3 mx-4 rounded-md bg-white/5 p-2 text-[11px] text-slate-300 opacity-0 ring-1 ring-white/10"
    >
      Every bug was a lesson.
    </motion.p>
  </motion.div>
);

const Ascent = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#0a0e1a] to-[#0b0f1e] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-2 text-center text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          The Ascent
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mx-auto mb-12 max-w-2xl text-center text-slate-300"
        >
          Evolution into programming — a steady climb with quiet breakthroughs.
        </motion.p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card
            title="Java"
            subtitle="First principles"
            code={`public class Hello {\n  public static void main(String[] args){\n    System.out.println("Hello, world");\n  }\n}`}
          />
          <Card
            title="Kotlin"
            subtitle="Modern thinking"
            code={`data class Note(val text: String)\nfun main(){\n  val note = Note("Flow over force")\n  println(note.text)\n}`}
            delay={0.1}
          />
          <Card
            title="Early Projects"
            subtitle="Learning in public"
            code={`// Pseudocode\nfor (bug in bugs) {\n  understand(bug)\n  learn()\n  grow()\n}`}
            delay={0.2}
          />
        </div>
      </div>

      {/* Cinematic divider */}
      <div className="pointer-events-none mx-auto mt-16 h-px max-w-4xl bg-gradient-to-r from-transparent via-slate-400/30 to-transparent" />
    </section>
  );
};

export default Ascent;
