"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function CinematicHero() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 240]);
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ y: yBg, backgroundImage: "url('https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1800&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 bg-slate-950/65" />
      <motion.div
        className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:px-10"
        style={{ y: yTitle }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <p className="mb-4 inline-flex rounded-full border border-fuchsia-300/40 bg-fuchsia-400/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-fuchsia-200">
          Napoli Lovers Edition · 16/17/18 maggio 2026
        </p>
        <h1 className="max-w-4xl text-5xl font-black leading-[0.95] md:text-8xl">
          Napoli in tre giorni.
          <span className="block text-fuchsia-300">Io + te + panorama + pizza.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-slate-200 md:text-xl">
          Uno showcase narrativo rilassato, autentico e pieno di effetti scroll: dalla città antica al lungomare, fino al gran finale con sfogliatella pre-volo.
        </p>
      </motion.div>
    </section>
  );
}
