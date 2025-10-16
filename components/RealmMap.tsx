"use client";

import WorldCard from "@/components/WorldCard";
import { useAppContext } from "@/components/auth/AppProvider";

const REALMS = [
  {
    slug: "kitchen",
    title: "Kitchen Explorers",
    description:
      "Cook up new vocabulary with Mia and Bao Bao as they blend Mandarin phrases into everyday meals.",
    featuredStory: "story.kitchen.001",
  },
  {
    slug: "lantern-lane",
    title: "Lantern Lane",
    description: "Wander glowing streets and practice festival greetings under the autumn moon.",
    featuredStory: "lantern-lane.intro",
  },
  {
    slug: "garden-path",
    title: "Garden Path",
    description: "Grow character recognition with nature quests full of poetic idioms and sensory clues.",
    featuredStory: "garden-path.intro",
  },
] as const;

export default function RealmMap(): JSX.Element {
  const { unlockedWorlds } = useAppContext();

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {REALMS.map((realm) => {
        const isUnlocked = unlockedWorlds.includes(realm.slug);
        const href = isUnlocked ? `/reader/${realm.featuredStory}` : undefined;

        return (
          <div key={realm.slug} className="relative">
            <WorldCard title={realm.title} description={realm.description} href={href} />
            {isUnlocked ? (
              <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-dhfh-jade px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-soft">
                Unlocked
              </span>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
