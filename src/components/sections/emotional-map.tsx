import { emotionalMap } from "@/data/trip";
import { SectionHeading } from "@/components/ui/section-heading";

export function EmotionalMap() {
  return (
    <section className="py-20">
      <SectionHeading
        eyebrow="Mappa emozionale"
        title="Come ci sentiremo (spoiler: molto bene)"
        subtitle="Un modo simpatico per visualizzare il mood del viaggio: romanticismo alto, food altissimo, stress quasi inesistente."
      />

      <div className="mx-auto grid max-w-6xl gap-5 px-6 md:grid-cols-2 md:px-10">
        {emotionalMap.map((item) => (
          <article key={item.label} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-bold">{item.icon} {item.label}</h3>
              <span className="text-sm text-fuchsia-200">{item.value}%</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" style={{ width: `${item.value}%` }} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
