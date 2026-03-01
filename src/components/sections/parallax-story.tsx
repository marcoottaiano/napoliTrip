"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const layers = [
  {
    label: "Mattina nel centro antico",
    image:
      "https://images.unsplash.com/photo-1602416138454-abc7f3e9fef7?auto=format&fit=crop&w=1800&q=80",
  },
  {
    label: "Blu del lungomare",
    image:
      "https://images.unsplash.com/photo-1634305295085-2f43cf89f390?auto=format&fit=crop&w=1800&q=80",
  },
  {
    label: "Notte viva a Piazza Bellini",
    image:
      "https://images.unsplash.com/photo-1549893074-4bcbe67b1d49?auto=format&fit=crop&w=1800&q=80",
  },
];

export function ParallaxStory() {
  const { scrollYProgress } = useScroll();
  const yOne = useTransform(scrollYProgress, [0, 1], [0, -130]);
  const yTwo = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const yThree = useTransform(scrollYProgress, [0, 1], [0, -320]);

  return (
    <section className="py-20">
      <SectionHeading
        eyebrow="Parallax"
        title="Una mini-scena cinematica in scroll"
        subtitle="Livelli che si muovono a velocità diverse per dare profondità: la storia si sente più viva e meno da classica presentazione statica."
      />

      <div className="mx-auto h-[120vh] max-w-6xl px-6 md:px-10">
        <div className="sticky top-10 h-[80vh] overflow-hidden rounded-3xl border border-white/10">
          <motion.img src={layers[0].image} alt={layers[0].label} style={{ y: yOne }} className="absolute inset-0 h-full w-full object-cover" />
          <motion.img
            src={layers[1].image}
            alt={layers[1].label}
            style={{ y: yTwo }}
            className="absolute inset-0 h-full w-full scale-95 object-cover opacity-70 mix-blend-screen"
          />
          <motion.img
            src={layers[2].image}
            alt={layers[2].label}
            style={{ y: yThree }}
            className="absolute inset-0 h-full w-full scale-90 object-cover opacity-50 mix-blend-lighten"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/80" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-200">Effetto narrativa</p>
            <h3 className="mt-3 max-w-2xl text-3xl font-black md:text-5xl">
              Centro storico, mare e notte: tre mood, un solo viaggio.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
