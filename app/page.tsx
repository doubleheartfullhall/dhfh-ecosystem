import WelcomeHero from "@/components/WelcomeHero";

import { PilotCohortSection } from "./components/pilot-cohort-section";
import { ProgramsSection } from "./components/programs-section";
import { heroCopy, heroValues, pilotStats, programs } from "@/lib/content";

export default function Home() {
  return (
    <main className="bg-porcelain text-dhfh-ink">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-20 pt-16 sm:px-10 lg:gap-20">
        <WelcomeHero />
        <ProgramsSection programs={programs} values={heroValues} eyebrow={heroCopy.eyebrow} />
        <PilotCohortSection stats={pilotStats} />
      </div>
    </main>
  );
}
