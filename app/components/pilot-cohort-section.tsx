import Link from "next/link";

import type { Stat } from "@/lib/content";

type PilotCohortSectionProps = {
  stats: Stat[];
};

export function PilotCohortSection({ stats }: PilotCohortSectionProps) {
  return (
    <section className="border-t border-white/10 bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-20 sm:px-12 lg:flex-row lg:items-stretch">
        <div className="w-full space-y-4 rounded-3xl border border-slate-700 bg-slate-900/60 p-8 text-center lg:w-5/12 lg:text-left">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Join the pilot cohort</h2>
          <p className="text-base text-slate-200">
            We are co-designing the next wave of DHFH modules with educators, librarians, and caregivers. Share your context to
            receive sample chapters, activity run-throughs, and facilitator coaching.
          </p>
          <Link
            href="https://forms.gle/97ahb7YyDemo"
            className="inline-flex items-center justify-center rounded-full bg-purple-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-purple-300"
          >
            Request pilot access
          </Link>
        </div>
        <dl className="grid w-full gap-6 rounded-3xl border border-slate-700 bg-slate-900/40 p-8 sm:grid-cols-2 lg:w-7/12">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <dt className="text-sm uppercase tracking-[0.3em] text-purple-200">{stat.label}</dt>
              <dd className="text-3xl font-semibold text-white">{stat.value}</dd>
              <p className="text-sm text-slate-200">{stat.description}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
