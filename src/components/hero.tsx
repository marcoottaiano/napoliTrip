"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-hero-gradient p-8 md:p-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mx-auto mt-24 max-w-4xl"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-violet-300">
          maggio 2026 • napoli
        </p>
        <h1 className="text-5xl font-black leading-tight md:text-7xl">
          Il nostro viaggio a Napoli, tra mare, storia e notti indimenticabili.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-slate-300">
          Base pronta per storytelling con parallax, reveal in scroll e transizioni immersive.
        </p>
      </motion.div>
    </section>
  );
}
