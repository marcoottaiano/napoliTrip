"use client";

import { motion } from "framer-motion";
import { activityCosts, baseCostForTwo, foodHighlights, optionalFoodSpots, transportInfo } from "@/data/trip";
import { SectionHeading } from "@/components/ui/section-heading";

export function FoodSpots() {
  return (
    <section className="pb-24 pt-20">
      <SectionHeading
        eyebrow="Cibo e logistica"
        title="Mangiare bene e muoversi senza stress"
        subtitle="Tutto in chiaro: dove mangiare, opzioni extra, trasporti e costi principali."
      />

      <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-2 md:px-10">
        {foodHighlights.map((spot, i) => (
          <motion.article
            key={spot.name}
            className="group rounded-3xl border border-white/10 bg-slate-900/70 p-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: i * 0.06, duration: 0.35 }}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">{spot.type}</p>
            <h3 className="mt-2 text-2xl font-bold">{spot.name}</h3>
            <p className="mt-3 text-slate-300">{spot.tip}</p>
            <p className="mt-4 inline-flex rounded-full border border-fuchsia-300/40 px-3 py-1 text-sm text-fuchsia-200">{spot.price}</p>
          </motion.article>
        ))}
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl gap-6 px-6 md:grid-cols-2 md:px-10">
        <article className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
          <h4 className="text-xl font-bold">Bonus opzionali da segnare</h4>
          <ul className="mt-4 grid gap-2 text-slate-200">
            {optionalFoodSpots.map((item) => (
              <li key={item} className="rounded-xl border border-white/10 bg-slate-800/50 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
          <h4 className="text-xl font-bold">Trasporti utili</h4>
          <ul className="mt-4 grid gap-3">
            {transportInfo.map((item) => (
              <li key={item.name} className="rounded-xl border border-white/10 bg-slate-800/50 p-3">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
                <p className="mt-2 inline-flex rounded-full border border-cyan-300/30 px-3 py-1 text-xs text-cyan-200">{item.price}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mx-auto mt-10 max-w-6xl rounded-3xl border border-amber-300/20 bg-amber-200/10 p-6 text-amber-100 md:px-10">
        <h4 className="text-xl font-bold">Stima costi attivita (2 persone)</h4>
        <ul className="mt-3 grid gap-2 text-amber-50/90 md:grid-cols-2">
          {activityCosts.map((item) => (
            <li key={item.label} className="rounded-xl border border-amber-200/20 bg-amber-100/5 px-3 py-2">
              <span className="font-semibold">{item.label}</span>: {item.amount}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-lg font-semibold">{baseCostForTwo}</p>
      </div>
    </section>
  );
}
