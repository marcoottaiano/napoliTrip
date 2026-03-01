import { CinematicHero } from "@/components/sections/cinematic-hero";
import { DayTimeline } from "@/components/sections/day-timeline";
import { EmotionalMap } from "@/components/sections/emotional-map";
import { FoodSpots } from "@/components/sections/food-spots";

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <CinematicHero />
      <DayTimeline />
      <EmotionalMap />
      <FoodSpots />
    </main>
  );
}
