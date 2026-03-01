"use client";

import { useMemo, useState } from "react";
import { mapPins, dayPlans } from "@/data/trip";
import { SectionHeading } from "@/components/ui/section-heading";

function toEmbedUrl(query: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

export function TripMap() {
  const allStops = useMemo(
    () => dayPlans.flatMap((day) => day.stops.map((stop) => ({ name: stop.name, query: stop.mapsQuery }))),
    [],
  );
  const [selected, setSelected] = useState(allStops[0]);

  return (
    <section className="py-20">
      <SectionHeading
        eyebrow="Mappa"
        title="Mappa vera con pin smart"
        subtitle="Scegli una tappa e vedi subito dove si trova: perfetto per orientarsi senza stress durante il viaggio."
      />

      <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-[1fr_1.3fr] md:px-10">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
          <h3 className="text-lg font-bold">📍 Pin principali</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {mapPins.map((pin) => (
              <span key={pin} className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                {pin}
              </span>
            ))}
          </div>

          <div className="mt-5 grid gap-2">
            {allStops.map((stop) => (
              <button
                key={stop.name}
                type="button"
                onClick={() => setSelected(stop)}
                className={`rounded-xl border px-3 py-2 text-left text-sm transition ${
                  selected.name === stop.name
                    ? "border-fuchsia-300 bg-fuchsia-400/10 text-fuchsia-100"
                    : "border-white/10 bg-white/5 text-slate-200 hover:border-cyan-300/50"
                }`}
              >
                {stop.name}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10">
          <iframe
            title={`Mappa: ${selected.name}`}
            src={toEmbedUrl(selected.query)}
            className="h-[440px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
