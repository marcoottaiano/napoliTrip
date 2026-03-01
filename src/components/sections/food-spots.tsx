"use client";

import { motion } from "framer-motion";
import { foodHighlights } from "@/data/trip";
import { SectionHeading } from "@/components/ui/section-heading";

export function FoodSpots() {
  return (
    <section className="pb-24 pt-20">
      <SectionHeading
        eyebrow="Food mission"
        title="Le tappe che meritano un mamma mia"
        subtitle="Card con micro-interazioni: hover, tilt e reveal per rendere la presentazione più simpatica e viva."
      />

      <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-2 md:px-10">
        {foodHighlights.map((spot, i) => (
          <motion.article
            key={spot.name}
            className="group rounded-3xl border border-white/10 bg-slate-900/70 p-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: i * 0.08, duration: 0.35 }}
            whileHover={{ y: -6, rotateX: 4, rotateY: -4, scale: 1.01 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">{spot.type}</p>
            <h3 className="mt-2 text-2xl font-bold">{spot.name}</h3>
            <p className="mt-3 text-slate-300">{spot.tip}</p>
            <p className="mt-4 inline-flex rounded-full border border-fuchsia-300/40 px-3 py-1 text-sm text-fuchsia-200">{spot.price}</p>
          </motion.article>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-6xl rounded-3xl border border-amber-300/20 bg-amber-200/10 p-6 text-amber-100 md:px-10">
        <h4 className="text-xl font-bold">Budget activities (2 persone): base certa 76 €</h4>
        <p className="mt-2 text-amber-50/90">
          Sansevero 16 € · Napoli Sotterranea 36 € · Santa Chiara 14 € · Sant'Elmo 10 €.
          Opzionali: Maschio interno +12 €, Palazzo Reale interno +20 €.
        </p>
      </div>
    </section>
  );
}
