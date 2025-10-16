"use client";

import RealmMap from "@/components/RealmMap";
import { useAppContext } from "@/components/auth/AppProvider";

const TOTAL_REALMS = 3;

export default function WorldHubPage(): JSX.Element {
  const { unlockedWorlds } = useAppContext();
  const unlockedCount = unlockedWorlds.length;
  const progressLabel = `${Math.min(unlockedCount, TOTAL_REALMS)} of ${TOTAL_REALMS} realms unlocked`;

  return (
    <main className="bg-porcelain min-h-screen px-6 py-16">
      <div className="mx-auto max-w-6xl space-y-10">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-dhfh-jade">World hub</p>
          <h1 className="font-display text-4xl text-dhfh-ink">Choose your next bilingual adventure</h1>
          <p className="text-lg text-dhfh-ink/80">
            Each world unlocks stories, maker prompts, and cultural notes crafted for your reader’s preferences.
          </p>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-dhfh-ink shadow-soft">
            {progressLabel}
          </p>
        </header>
        <RealmMap />
      </div>
    </main>
  );
}
