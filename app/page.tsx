import { Hero } from "./components/hero";
import { PilotCohortSection } from "./components/pilot-cohort-section";
import { ProgramsSection } from "./components/programs-section";
import { heroCopy, heroValues, pilotStats, programs } from "@/lib/content";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero
        eyebrow={heroCopy.eyebrow}
        title={heroCopy.title}
        description={heroCopy.description}
        values={heroValues}
      />
      <ProgramsSection programs={programs} />
      <PilotCohortSection stats={pilotStats} />
    </main>
  );
}
