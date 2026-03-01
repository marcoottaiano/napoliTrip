"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { dayPlans } from "@/data/trip";
import { SectionHeading } from "@/components/ui/section-heading";

type Mode = "rilassato" | "rapido";

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.12, duration: 0.45, ease: "easeOut" },
  }),
};

export function DayTimeline() {
  const [mode, setMode] = useState<Mode>("rilassato");
  const isFast = mode === "rapido";

  const plans = useMemo(() => dayPlans, []);

  return (
    <section className="py-20">
      <SectionHeading
        eyebrow="Timeline"
        title="Roadmap completa del viaggio"
        subtitle="Zero corse inutili: attiva la modalità viaggio e guarda come cambia il ritmo della giornata."
      />

      <div className="mx-auto mb-8 flex max-w-6xl justify-start px-6 md:px-10">
        <div className="inline-flex rounded-full border border-white/10 bg-slate-900/70 p-1">
          {(["rilassato", "rapido"] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setMode(option)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                mode === option ? "bg-fuchsia-400 text-slate-950" : "text-slate-200 hover:bg-white/10"
              }`}
            >
              {option === "rilassato" ? "🧘 Modalità rilassata" : "⚡ Modalità rapida"}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:px-10">
        {plans.map((day, dayIndex) => (
          <motion.article
            key={day.day}
            className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-sm"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={dayIndex}
          >
            <div className="grid gap-0 md:grid-cols-[1.2fr_1fr]">
              <div className="p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">{day.day}</p>
                <h3 className="mt-3 text-2xl font-bold md:text-3xl">{day.title}</h3>
                <p className="mt-3 text-slate-300">{day.mood}</p>

                <div className="mt-6 grid gap-4">
                  {day.stops.map((stop, stopIndex) => (
                    <motion.div
                      key={stop.name}
                      className="rounded-2xl border border-white/10 bg-slate-800/50 p-4"
                      initial={{ opacity: 0, x: -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.35, delay: stopIndex * 0.08 }}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <h4 className="font-semibold">{stop.name}</h4>
                        <span className="rounded-full bg-cyan-300/20 px-3 py-1 text-xs text-cyan-200">{stop.price}</span>
                      </div>
                      <p className="mt-2 text-sm text-slate-300">{isFast ? stop.noteFast ?? stop.note : stop.note}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 p-2">
                {day.stops.map((stop) => (
                  <motion.div
                    key={`${stop.name}-img`}
                    className="relative h-40 overflow-hidden rounded-2xl md:h-auto"
                    whileHover={{ scale: 1.02, rotate: -0.5 }}
                    transition={{ type: "spring", stiffness: 180, damping: 18 }}
                  >
                    <img src={stop.image} alt={stop.name} className="h-full w-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                    <p className="absolute bottom-2 left-2 right-2 text-sm font-semibold text-white">{stop.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
