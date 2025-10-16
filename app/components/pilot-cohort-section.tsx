import Link from "next/link";

import type { Stat } from "@/lib/content";

type PilotCohortSectionProps = {
  stats: Stat[];
};

export function PilotCohortSection({ stats }: PilotCohortSectionProps) {
  return (
    <section className="rounded-2xl bg-white/80 p-10 shadow-soft ring-1 ring-dhfh-ink/5 sm:p-12">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <div className="space-y-5">
          <h2 className="font-display text-3xl text-dhfh-ink sm:text-4xl">Join the pilot cohort</h2>
          <p className="text-base leading-7 text-dhfh-ink/80 sm:text-lg">
            We are co-designing the next wave of DHFH modules with educators, librarians, and caregivers. Share your context to
            receive sample chapters, activity run-throughs, and facilitator coaching.
          </p>
          <Link
            href="https://forms.gle/97ahb7YyDemo"
            className="inline-flex items-center justify-center rounded-full bg-dhfh-red px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-dhfh-ink"
          >
            Request pilot access
          </Link>
        </div>
        <dl className="grid gap-6 rounded-2xl bg-dhfh-porcelain/80 p-8 ring-1 ring-dhfh-gold/30 sm:grid-cols-2">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-dhfh-gold/90">{stat.label}</dt>
              <dd className="font-display text-3xl text-dhfh-ink sm:text-4xl">{stat.value}</dd>
              <p className="text-sm leading-6 text-dhfh-ink/70">{stat.description}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
